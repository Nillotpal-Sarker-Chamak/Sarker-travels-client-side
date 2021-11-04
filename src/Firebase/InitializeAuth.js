import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyCs5EWklw8LPNM4mt6o9HZYpjllbmnzE8c",
    authDomain: "travel-website-e9b29.firebaseapp.com",
    projectId: "travel-website-e9b29",
    storageBucket: "travel-website-e9b29.appspot.com",
    messagingSenderId: "591333214602",
    appId: "1:591333214602:web:b60a06b1c3e5fd4545a073"
};

const initializeAuth = () => {
    initializeApp(firebaseConfig);
    // getAnalytics(initializeApp(firebaseConfig));
}

export default initializeAuth;