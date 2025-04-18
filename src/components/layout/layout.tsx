import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { getLayoutState } from './utils.ts';
import { getAuthorizationStatus } from '../../authorization.ts';
import { Fragment } from 'react';

export default function Layout(){
  const {pathname} = useLocation();
  const {rootClassName, linkClassName, shouldRenderLoggedUser, shouldRenderFooter} = getLayoutState(pathname as AppRoute);
  const isAuthorized = getAuthorizationStatus();

  return (
    <div className={`page ${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className={`header__logo-link ${linkClassName}`} to="/">
                <img className="header__logo" src="../../markup/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            {
              shouldRenderLoggedUser ? (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        { isAuthorized === AuthorizationStatus.Auth ? (
                          <Fragment>
                            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                            <span className="header__favorite-count">3</span>
                          </Fragment>
                        ) : <span className="header__signout">Sign in</span>}
                      </Link>
                    </li>
                    {isAuthorized === AuthorizationStatus.Auth ? (
                      <li className="header__nav-item">
                        <Link className="header__nav-link" to="/login">
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    ) : null}
                  </ul>
                </nav>) : null
            }
          </div>
        </div>
      </header>
      <Outlet />
      {shouldRenderFooter ? (
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="../../markup/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      ) : null}
    </div>
  );
}
