
const firebase = require("firebase/app");

import 'firebase/database';

const config = {
  apiKey: `"${process.env.apiKey}"`,
  authDomain: `"${process.env.authDomain}"`,
  databaseURL: `"${process.env.databaseURL}"`,
  projectId: `"${process.env.projectId}"`,
  storageBucket: `"${process.env.storageBucket}"`,
  messagingSenderId: `"${process.env.messagingSenderId}"`
};

firebase.initializeApp(config);
let db = firebase.database();

export default db;