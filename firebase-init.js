// EMERGENCY FIX: Direct Firebase Initialization
// This file ensures the correct API key is used

(function() {
    console.log('🔥 Loading Firebase with CORRECT API key...');
    
    // Correct Firebase Configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAMiB0T5fNsEcmDed4-wmNiXx9EvAn9R7w",
        authDomain: "eka-eb5-website.firebaseapp.com",
        projectId: "eka-eb5-website",
        storageBucket: "eka-eb5-website.firebasestorage.app",
        messagingSenderId: "699403466862",
        appId: "1:699403466862:web:d919169cba9f7d32804e7f",
        measurementId: "G-1VPJDEBM44"
    };

    // Initialize Firebase immediately
    if (typeof firebase !== 'undefined') {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
                console.log('✅ Firebase initialized with CORRECT config');
            } else {
                console.log('✅ Firebase already initialized');
            }
        } catch (error) {
            console.error('❌ Firebase init error:', error);
        }
    } else {
        console.error('❌ Firebase SDK not loaded');
    }
})();
