import React, { useState } from 'react';
import './styles.css';
import { CookieIcon } from '../Icons/CookieIcon';

export const CookieBanner = () => {
  const [hiddenBanner, setHiddenBanner] = useState(false);

  const handleCookie = () => {
    localStorage.setItem('cookieState', 1);
    setHiddenBanner(true);
  };

  const checkCookieData = () => {
    return localStorage.getItem('cookieState');
  };

  if (checkCookieData()) {
    return;
  }

  return (
    <div className={hiddenBanner ? 'banner__none' : 'banner'}>
      <div className="banner__content">
        <CookieIcon />
        <p className="banner__title">Pozwól na pliki cookies</p>
        <p className="banner__text">
          Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
          działanie strony i pomagają nam świadczyć usługi na najwyższym
          poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich tych
          plików i przejść do strony lub dostosować użycie do swoich
          preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
          zgody”, aby następnie wybrać te które odpowiadają Twoim indywidualnym
          preferencjom.
        </p>
      </div>
      <div className="banner__btn">
        <button onClick={handleCookie} className="banner__btn--agree">
          W PORZĄDKU
        </button>
        <button className="banner__btn--disagree">DOPASUJ ZGODY</button>
      </div>
    </div>
  );
};
