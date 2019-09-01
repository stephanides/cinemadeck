/* eslint-disable jsx-a11y/anchor-is-valid */
import './scss/navigation.scss';
import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { signOut } from '../../../../lib/auth';

const Navigation = ({ userName }) => (
  <div className="border mb-4 p-2">
    <Container className="navigation-container">
      <ul className="d-flex m-0 p-0 list-unstyled align-items-center justify-content-end position-relative">
        <li className="mr-auto">
          <Link href="/admin">
            <a>Admin</a>
          </Link>
        </li>
        <li className="user">
          <div>
            <span>{userName}</span>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <Link href="/admin/user/settings">
                    <a>Nastavení</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="ml-3">
          <button className="border-0 bg-transparent" type="button" onClick={signOut}>
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </li>
      </ul>
    </Container>
  </div>
);

Navigation.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Navigation;
