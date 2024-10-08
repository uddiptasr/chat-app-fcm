import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import toast from "react-hot-toast";
// apiKey: "AIzaSyCBfloSeUe8i_FlXweenAmHiCUVH3q8aI8",

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_MES_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_APP_ID,
    measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID
  };

  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);
  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
    const message=payload.data.title;
    toast(message,
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
  })
