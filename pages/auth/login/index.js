import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Link from 'next/link';
import { compose, graphql } from 'react-apollo';
import {
  Button, Container, Form, FormGroup, Input,
} from 'reactstrap';
import Modal from '../../../app-data/shared/components/admin/Modal';
import { loginUserMutation, toggleModalMutation } from '../../../app-data/graphql/mutation';
import { signIn, redirectIfAuthenticated } from '../../../app-data/lib/auth';
import { getCookie, removeCookie } from '../../../app-data/lib/auth/session';

const Login = compose(
  graphql(loginUserMutation, { name: 'mutateLoginUser' }),
  graphql(toggleModalMutation, { name: 'mutateToggleModal' }),
)((props) => {
  const { mutateLoginUser, mutateToggleModal } = props;
  const submitForm = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };

    try {
      const resp = await mutateLoginUser({ variables: { user } });
      const { data: { loginUser } } = resp;

      if (!loginUser.approved) {
        await mutateToggleModal({
          variables: { modal: { content: 'Váš účet čaká na schválenie', error: false, visible: true } },
        });
      }

      signIn(loginUser);
    } catch (err) {
      const errMsg = err.toString().replace('GraphQL error: ', '').trim();

      await mutateToggleModal({
        variables: { modal: { content: errMsg, error: true, visible: true } },
      });
    }
  };

  return (
    <Container className="vh-100 d-flex align-items-center">
      <Modal />
      <Form className="border rounded m-auto p-3" onSubmit={submitForm}>
        <h2 className="text-center mb-4">Login</h2>
        <FormGroup>
          <Input type="email" id="email" placeholder="zadejte e-mail" required />
        </FormGroup>
        <FormGroup>
          <Input type="password" id="password" placeholder="Zadejte heslo" required />
        </FormGroup>
        <Button color="primary" className="w-100 mb-2" type="submit">Odeslat</Button>
      </Form>
    </Container>
  );
});

Login.getInitialProps = async (ctx) => {
  if (redirectIfAuthenticated(ctx)) {
    return {};
  }

  const success = getCookie('success', ctx.req);

  if (success) {
    removeCookie('success');
  }

  return { success };
};

export default Login;
