// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo3h6fHTPscrfpZ4Rh9DxdwyFtsU-4sqc",
  authDomain: "cardano-d265c.firebaseapp.com",
  projectId: "cardano-d265c",
  storageBucket: "cardano-d265c.appspot.com",
  messagingSenderId: "432857824833",
  appId: "1:432857824833:web:68bedefcd8cc5f5eb450c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// location / {
//   proxy_pass http://172.31.6.96:3001;
//   proxy_http_version 1.1;
//   proxy_set_header Upgrade $http_upgrade;
//   proxy_set_header Connection 'upgrade';
//   proxy_set_header Host $host;
//   proxy_cache_bypass $http_upgrade;
// }