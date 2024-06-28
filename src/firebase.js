import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDpVNq0KJqH9FFrSUjeaPXBjhUjFIkfQww',
  authDomain: 'smitcoderx-portfolio.firebaseapp.com',
  projectId: 'smitcoderx-portfolio',
  storageBucket: 'gs://smitcoderx-portfolio.appspot.com',
  messagingSenderId: '747893498835',
  appId: '1:747893498835:web:fa16ce6383438b8858c526',
  measurementId: 'G-D2M21L0W33',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize storage service
const firebaseStorage = getStorage(app);

export { firebaseStorage };
