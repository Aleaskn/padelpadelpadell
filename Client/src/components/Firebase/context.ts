import React from 'react';

// const FirebaseContext = React.createContext(null);
type TFirebaseInstance = any | null;
const FirebaseContext = React.createContext<TFirebaseInstance>(null);

export default FirebaseContext;