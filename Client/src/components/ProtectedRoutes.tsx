import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from './context/UseAuthContext'

type TProtectedRoutes = {

}

interface IProtectedRoutes {
	children : any
}

export const ProtectedRoutes: React.FC<IProtectedRoutes> = ({ children }) => {
	let { user } = useUserAuth();
	if(!user){
		return <Navigate to={"/signIn"} />
	}

	return children
	
}