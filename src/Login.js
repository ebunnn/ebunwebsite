import React from 'react';
import {auth, provider} from "./firebase-config";
//Allows for popup authentication. 
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button'

//Grabbing "setIsAuth" as props (from App component)
export default function Login({setIsAuth}) {
    // Used to navigate through pages
    let navigate = useNavigate();

    //Function to sign in w/ google
    const signInWithGoogle = () => {
        //"provider" is to specify that we are using Google to authenticate. 
        // "then" is to specify what we do when we login to Google. "return" contains
        // all the information about user that is logged in.
        signInWithPopup(auth, provider).then((result) => {
            //If tabs/browser is closed, this will allow you to still be logged in
            localStorage.setItem("isAuth", true)
            //Changes setIsAuth state (from props) to true
            setIsAuth(true);
            //When you are logged in, it redirects to home page
            navigate("/");
        })
    }
    return(
        <div>
            <div className='Login--welcome'>
                <h4>Welcome to the Login Page!</h4>
            </div>
            <div className='Login--googleButtonContainer'>
                {/* Calls signInWithGoogle func when button is clicked */}
                <a className='Login--loginGoogleBtn' onClick={signInWithGoogle} style={{textDecoration:"none"}}><GoogleButton
                onClick={() => { console.log('Google button clicked') }}
                /></a>
            </div>

            
        </div>
    )
}