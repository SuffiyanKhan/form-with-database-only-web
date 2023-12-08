import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyCITZ4JaopBdwHUmD_KcV5JPf1nk22qiKE",
  authDomain: "signup-and-login-18814.firebaseapp.com",
  databaseURL: "https://signup-and-login-18814-default-rtdb.firebaseio.com",
  projectId: "signup-and-login-18814",
  storageBucket: "signup-and-login-18814.appspot.com",
  messagingSenderId: "761955324033",
  appId: "1:761955324033:web:650f3ca9b0849ec453bd80",
  measurementId: "G-ZFLC2N7BXB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
