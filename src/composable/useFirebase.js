import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import { firebaseConfig } from "./src/firebaseConfig.js";

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);