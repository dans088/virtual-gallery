import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import global_en from './Data/EN/global.json';
import global_es from './Data/ES/global.json';
import global_fr from './Data/FR/global.json';
import i18next from "i18next"; 
import { I18nextProvider } from 'react-i18next';

i18next.init({
    interpolation: {escapeValue: true},
    lng: "en",
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
      fr: {
        global: global_fr,
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <I18nextProvider i18n = {i18next}>
        <App />
    </I18nextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
