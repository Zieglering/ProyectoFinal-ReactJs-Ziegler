import { initializeApp } from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMxirhwNOFGVHo84PNbQ1jjbt156SGFQs",
  authDomain: "coderhouse-ziegler-ecommerce.firebaseapp.com",
  projectId: "coderhouse-ziegler-ecommerce",
  storageBucket: "coderhouse-ziegler-ecommerce.appspot.com",
  messagingSenderId: "567631247794",
  appId: "1:567631247794:web:134841cfedfec151624cab"
};

export const app = initializeApp(firebaseConfig);