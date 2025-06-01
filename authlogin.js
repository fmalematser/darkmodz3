// authlogin.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB0e8-U4nb8sPyZaw1_S2bD2wub2xJlYP4",
  authDomain: "darkmodz2.firebaseapp.com",
  projectId: "darkmodz2",
  storageBucket: "darkmodz2.firebasestorage.app",
  messagingSenderId: "730284042393",
  appId: "1:730284042393:web:18e4d5518050f1e7c57008",
  measurementId: "G-S25SZ1G07Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const loginScreen = document.getElementById('login-screen');
const dashboard = document.getElementById('dashboard');
const googleLoginBtn = document.getElementById('google-login');
const facebookLoginBtn = document.getElementById('facebook-login');
const logoutBtn = document.getElementById('logout-btn');

googleLoginBtn.addEventListener('click', () => {
  signInWithPopup(auth, googleProvider)
    .catch(err => alert('Google Login Error: ' + err.message));
});

facebookLoginBtn.addEventListener('click', () => {
  signInWithPopup(auth, facebookProvider)
    .catch(err => alert('Facebook Login Error: ' + err.message));
});

logoutBtn.addEventListener('click', () => {
  signOut(auth).catch(err => alert('Logout Error: ' + err.message));
});

onAuthStateChanged(auth, user => {
  if (user) {
    loginScreen.style.display = 'none';
    dashboard.style.display = 'block';
  } else {
    loginScreen.style.display = 'block';
    dashboard.style.display = 'none';
  }
});
