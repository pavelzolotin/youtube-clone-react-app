import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyACzhO0tEE4THt0QQ7wXEEpg9ob0naDTEE",
    authDomain: "video-dfd55.firebaseapp.com",
    projectId: "video-dfd55",
    storageBucket: "video-dfd55.appspot.com",
    messagingSenderId: "281121085340",
    appId: "1:281121085340:web:bd25507846274c61285a59"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;