import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Add this for Firebase Authentication

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,  // Fix typo
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

export function initFirebase() {
    if (!getApps().length) {
        initializeApp(firebaseConfig);
    }
}

// Initialize Firebase Auth (used for authentication)
export const auth = getAuth();
