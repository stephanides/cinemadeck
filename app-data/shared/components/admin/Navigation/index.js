/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <ul>
              <li>
                <Link href="/admin/user/settings">
                  <a>Nastavení</a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="ml-3">
          <button className="border-0 bg-transparent" type="button" onClick={signOut}>
            <div className="position-relative">
              <FontAwesomeIcon icon={faPowerOff} />
              <div className="position-absolute">Odhlásit se</div>
            </div>
          </button>
        </li>
      </ul>
      <style jsx>
        {
          `
            ul.list-unstyled {
              z-index: 10;
            }
            ul li { font-size: .9rem; }
            ul li:first-child button {
              background: transparent;
              border: 0 none;
              color: #000;
              font-weight: 600;
              padding: 0;
              outline: none;
            }
            ul li:last-child {
              position: relative;
            }
            ul li:last-child > div:first-child {
              display: block;
              position: relative;
            }
            ul li:last-child > div:last-child {
              display: none;
              left: -50%;
              position: absolute;
              padding-top: 8px;
              transform: translateX(20%);
            }
            ul li:last-child:hover > div:last-child {
              display: block;
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
            }
            ul li:last-child > div:last-child > div {
              background-color: #fff;
              border: 1px solid #ccc;
              border-radius: .25rem;
              padding: .5rem .75rem;
              position: relative;
            }
            ul li:last-child > div:last-child > div:before {
              content: '';
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #ccc;
              left: 50%;
              position: absolute;
              width: 0;
              top: -10px;
              transform: translateX(-50%);
            }
            ul li:last-child > div:last-child > div:after {
              content: '';
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              left: 50%;
              position: absolute;
              width: 0;
              top: -9px;
              transform: translateX(-50%);
            }
            ul li:last-child img { width: 50px; }
            ul li:last-child span {
              bottom: 0;
              color: #000;
              font-size: xx-small;
              left: 0;
              position: absolute;
              width: 100%;
              white-space: nowrap;
            }
            ul li:last-child > div:last-child > ul {
              margin: 0;
              padding: 0;
              list-style: none;
            }
            ul li:last-child > button .position-absolute {
              display: none;
              left: 25px;
              top: 0;
              white-space: nowrap;
            }
            ul li:last-child > button:hover .position-absolute {
              display: block;
            }
          `
        }
      </style>
    </Container>
  </div>
);

Navigation.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Navigation;
