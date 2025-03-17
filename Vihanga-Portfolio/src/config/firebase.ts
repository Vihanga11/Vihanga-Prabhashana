import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getAnalytics, Analytics } from 'firebase/analytics';

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY || "your-api-key",
  authDomain: "portfolio-vihanga.firebaseapp.com",
  projectId: "portfolio-vihanga",
  storageBucket: "portfolio-vihanga.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "your-sender-id",
  appId: process.env.FIREBASE_APP_ID || "your-app-id",
  measurementId: "G-MEASUREMENT_ID" // Add this for analytics
};

const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services with proper typing
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
export const analytics: Analytics = getAnalytics(app);

// Enable error reporting
export const enableErrorReporting = () => {
  if (process.env.NODE_ENV === 'production') {
    analytics.app.automaticDataCollectionEnabled = true;
  }
};

// Add a helper function to check if Firebase is initialized
export const isFirebaseInitialized = (): boolean => {
  try {
    getAuth(app);
    return true;
  } catch {
    return false;
  }
};
