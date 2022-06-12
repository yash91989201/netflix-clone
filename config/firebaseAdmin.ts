import firebaseAdmin from "firebase-admin";

var serviceAccount = require("../firebaseAdmin.config.json");

export const verifyIdToken = (token: any) => {
  if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
    });
  }
  return firebaseAdmin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};

export default firebaseAdmin;
