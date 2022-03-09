import React, { createContext, useContext } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	sendPasswordResetEmail
} from 'firebase/auth'
import { auth } from '../Firebase/firebase'


const UserAuthContext = createContext();

export function UserAuthContextProvider({children}) {

	const [user, setUser] = React.useState('');

	function signUp(email, password) {
		return createUserWithEmailAndPassword(auth , email, password);
	}

	function logIn(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		return signOut(auth);
	}

	function signInWithGoogle() {
		const googleAuthProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleAuthProvider)
	}

	function setPasswordReset() {
		return sendPasswordResetEmail(auth, "your-email@gmail.com")
	}

	React.useEffect(() => {

		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser)
		});
		return () => {
			unsubscribe();
		}
	}, []);

	return (
		<UserAuthContext.Provider value={{ user, signUp, logIn, logOut , signInWithGoogle, setPasswordReset}}>
			{ children }
		</UserAuthContext.Provider>
	)

}

export function useUserAuth() {
	return useContext(UserAuthContext);
}