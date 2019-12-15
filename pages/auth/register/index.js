// import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { compose, graphql } from 'react-apollo';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import Modal from '../../../app-data/shared/components/admin/Modal';
import { registerUserMutation, toggleModalMutation } from '../../../app-data/graphql/mutation';
import { signIn, redirectIfAuthenticated } from '../../../app-data/lib/auth';
import { getCookie, removeCookie } from '../../../app-data/lib/auth/session';
import Layout from '../../../app-data/pages/admin/components/Layout';

const Register = compose(
  graphql(registerUserMutation, { name: 'mutateRegisterUser' }),
  graphql(toggleModalMutation, { name: 'mutateToggleModal' }),
)((props) => {
  const { mutateRegisterUser, mutateToggleModal } = props;
  const [disabled, toggleDisabled] = useState(true);
  const handleCheckPassword = () => {
    const form = document.querySelector('form');
    const password = form.password.value;
    const passwordToCheck = form.retypePassword.value;

    if (password === passwordToCheck) {
      // console.log('Passwords match');
      toggleDisabled(!disabled);
    }
  };
  const submitForm = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      firstName, email, lastName, password,
    };

    // console.log(user);
    try {
      const resp = await mutateRegisterUser({ variables: { user } });
      const { data: { registerUser } } = resp;
      // console.log(resp);

      if (registerUser.approved) {
        await mutateToggleModal({
          variables: { modal: { content: 'Registrace proběhla úspěšně.', error: false, visible: true } },
        });
      }

      // signIn(loginUser);
    } catch (err) {
      const errMsg = err.toString().replace('GraphQL error: ', '').trim();

      await mutateToggleModal({
        variables: { modal: { content: errMsg, error: true, visible: true } },
      });
    }
  };

  return (
    <Layout>
      <Modal />
      <Form className="border rounded m-auto p-3" onSubmit={submitForm}>
        <h2 className="text-center mb-4">Registrace</h2>
        <FormGroup>
          <Input type="firstName" id="firstName" placeholder="Křestní Jméno" required />
        </FormGroup>
        <FormGroup>
          <Input type="lastName" id="lastName" placeholder="Příjmení" required />
        </FormGroup>
        <FormGroup>
          <Input type="email" id="email" placeholder="Zadejte e-mail" required />
        </FormGroup>
        <FormGroup>
          <Input type="password" id="password" placeholder="Zadejte heslo" required />
        </FormGroup>
        <FormGroup>
          <Input type="password" id="retypePassword" onChange={handleCheckPassword} placeholder="Zopakujte heslo" required />
        </FormGroup>
        <Button color="primary" className="w-100 mb-2" type="submit" disabled={disabled}>Odeslat</Button>
      </Form>
    </Layout>
  );
});

Register.getInitialProps = async (ctx) => {
  if (redirectIfAuthenticated(ctx)) {
    return {};
  }

  const success = getCookie('success', ctx.req);

  if (success) {
    removeCookie('success');
  }

  return { success };
};

export default Register;
