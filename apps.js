// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLKPOqok8VS3gR4TAEGCEH4IEJL8kKpvw",
  authDomain: "ind-edu-f63b0.firebaseapp.com",
  projectId: "ind-edu-f63b0",
  storageBucket: "ind-edu-f63b0.appspot.com",
  messagingSenderId: "405906160405",
  appId: "1:405906160405:web:4b47ab1cbafb51cf13071c",
  measurementId: "G-BZPXLELM3J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Show/Hide forms
document.getElementById('show-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
});

// Login function
document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log('Logged in as:', userCredential.user.email);
        })
        .catch(error => {
            console.error('Error logging in:', error.message);
        });
});

// Sign up function
document.getElementById('signup-btn').addEventListener('click', function() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log('Signed up as:', userCredential.user.email);
        })
        .catch(error => {
            console.error('Error signing up:', error.message);
        });
});
