import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import { firebaseConfig } from "C:\Users\edenh\OneDrive\Documents\Spring 2022\Web Applications Class\Projects\Final Project\Final-Project\src\firebaseConfig.js";

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);