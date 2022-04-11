import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import { firebaseConfig } from "../firebaseConfig.js";

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);