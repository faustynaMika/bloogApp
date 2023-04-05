import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

export const environment = {
  production: false,
  timesApiKey: 'EgaxSAraTKz541QOJ0OxSnGAtWqETYuB',
  weatherApiKey: 'MGU1YmJiM2YtZDBlMy00NGMwLThlNzYtMGQ0NWIyZWNlNWJk',
  firebase: {
    projectId: 'bloogiapp',
    appId: '1:1001130711434:web:fa6c42fbf90343c0bbd073',
    storageBucket: 'bloogiapp.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyCnnmVSYxgW7VW_cdXOzldbdPf2qixewWA',
    authDomain: 'bloogiapp.firebaseapp.com',
    messagingSenderId: '1001130711434',
    measurementId: 'G-7EJ1HHECG5',
  }
};

const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);

