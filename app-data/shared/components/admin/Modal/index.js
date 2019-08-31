/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, graphql } from 'react-apollo';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { getModalQuery } from '../../../../graphql/query';
import { toggleModalMutation } from '../../../../graphql/mutation';
// import locale from '../../../shared/localisation/modal/productCreate';

const ModalComponent = compose(
  graphql(getModalQuery),
  graphql(toggleModalMutation, { name: 'dispatchToggle' }),
)((props) => {
  const {
    data: {
      modal: {
        content, error, visible,
      },
    },
    dispatchToggle,
  } = props;
  const toggle = async () => {
    try {
      await dispatchToggle({
        variables: {
          modal: {
            visible: !visible,
          },
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    process.browser && (
      <Modal
        isOpen={visible}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>
          {
            error ? 'Chyba' : 'Info'
          }
        </ModalHeader>
        <ModalBody>
          <p>{content}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    )
  );
});

export default ModalComponent;
