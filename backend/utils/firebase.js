// var admin = require("firebase-admin");
// var serviceAccount = require("./firebaseAdminSDK.json");

import admin from "firebase-admin";
// import serviceAccount from "./firebaseAdminSDK.json" assert { type: "json" };

import dotenv from "dotenv";
dotenv.config();

console.log("process.env.JWT_SECRET",process.env.JWT_SECRET)
admin.initializeApp({
  credential: admin.credential.cert(
    {
      type: "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI,
      token_uri:  process.env.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url:  process.env.FIREBASE_AUTH_PROVIDER_X509,
      client_x509_cert_url:  process.env.FIREBASE_CLIENT_X509,
      universe_domain:  process.env.FIREBASE_UNIVERSE_DOMAIN
    }
  )
});

export default admin


// import admin from "firebase-admin";
// import serviceAccount from "./firebaseAdminSDK.json" assert { type: "json" };
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// export default admin