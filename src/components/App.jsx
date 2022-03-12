import React, { useState } from 'react';

import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const [lang, setLang] = useState('en');

  function changeLanguage(e) {
    const lang = e.currentTarget.dataset.lang;
    setLang(lang);
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">{t('appName')}</span>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="bi bi-globe"></i>{' '}
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div
                  className="dropdown-item"
                  data-lang="en"
                  onClick={changeLanguage}
                >
                  English
                </div>
                <div
                  className="dropdown-item"
                  data-lang="gu"
                  onClick={changeLanguage}
                >
                  ગુજરાતી
                </div>
              </div>
            </li>
          </ul>
          ({lang === 'en' ? 'English' : 'ગુજરાતી'})
        </nav>
      </div>
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{t('hiMessage')}</h1>
            <p className="lead">{t('welcomeMessage')}</p>
          </div>
        </div>

        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">{t('labelEmail')}</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              {t('captionEmail')}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">{t('labelPassword')}</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {t('captionSubmit')}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
