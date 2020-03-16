import React,{ useState, useEffect}from 'react';
import * as firebase from "firebase";

import Loading from "../../components/Loading";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";



export default MyUser = () =>{
	const [loguin , setLoguin] = useState(null);

	//aca le tengo que hacer con redux en un futuro
	useEffect(()=>{
		 firebase.auth().onAuthStateChanged(user =>{
			 !user ? setLoguin(false): setLoguin(true);
		 })
	},[]);

	if (loguin == null){
		return <Loading isVisible = {true} text= "Cargando..."/>
	}

	return loguin ? <UserLogged /> : <UserGuest />;




}