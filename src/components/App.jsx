import React, { useState, useEffect } from 'react';

import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation(['common', 'login']);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const userLang = localStorage.getItem('i18nextLng');
    if (userLang) {
      setLang(userLang);
    }
  }, []);

  function changeLanguage(e) {
    const lang = e.currentTarget.dataset.lang;
    setLang(lang);
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">{t('appName', { ns: 'common' })}</span>
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
            <h1 className="display-4">{t('common:hiMessage')}</h1>
            <p className="lead">{t('common:welcomeMessage')}</p>
          </div>
        </div>

        <form style={{ maxWidth: '400px', margin: 'auto' }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">{t('login:labelEmail')}</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={t('login:labelEmail')}
            />
            <small id="emailHelp" className="form-text text-muted">
              {t('login:captionEmail')}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">
              {t('login:labelPassword')}
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder={t('login:labelPassword')}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {t('common:captionSubmit')}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
