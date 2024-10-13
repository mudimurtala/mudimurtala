// Import Firebase authentication functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Initialize Firebase Authentication
const firebaseConfig = {
    apiKey: "AIzaSyBMp-8i3BRb391rsJIX_paUDRo8Oz3scH0",
    authDomain: "my-portfolio-project-5e8d0.firebaseapp.com",
    projectId: "my-portfolio-project-5e8d0",
    storageBucket: "my-portfolio-project-5e8d0.appspot.com",
    messagingSenderId: "828652580713",
    appId: "1:828652580713:web:235710c20ec13b9cb417f8",
    measurementId: "G-CQ4WNY08CR"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app); // Ensure you initialized Firebase in another script

// Sign Up Functionality
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User signed up:', userCredential.user);
        })
        .catch((error) => {
            console.error('Sign-up error:', error);
        });
});

// Sign In Functionality
const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('User signed in:', userCredential.user);
        })
        .catch((error) => {
            console.error('Sign-in error:', error);
        });
});

// Sign Out Functionality
const signoutButton = document.getElementById('signout-button');
signoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('User signed out');
    }).catch((error) => {
        console.error('Sign-out error:', error);
    });
});

// Track Authentication State
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in:', user);
    } else {
        console.log('No user is signed in');
    }
});
