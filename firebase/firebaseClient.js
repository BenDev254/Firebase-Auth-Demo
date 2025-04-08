import { initializeApp, getApps } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialize Firebase only if it hasn't been initialized
export function initFirebase() {
  if (typeof window !== 'undefined' && !getApps().length) {
    // Initialize Firebase on client-side
    initializeApp(firebaseConfig);
  }
}
