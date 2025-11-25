var firebase = require("firebase-admin"); // npm install firebase-admin --save

var serviceAccount = require("./firebaseKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

module.exports = firebase;