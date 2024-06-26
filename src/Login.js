import {React, useEffect} from 'react';
import "./Login.css"
import logopng from "./images/Ebun Web Logo trans.png"
import {auth, provider, onAuthStateChanged} from "./firebase-config";
//Allows for popup authentication. 
import {signInWithPopup, signInWithRedirect} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button'

//Grabbing "setIsAuth" as props (from App component)
export default function Login({setIsAuth}) {
    // Used to navigate through pages
    let navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                localStorage.setItem("isAuth", true);
                setIsAuth(true);
                navigate("/");
            }
        });

        return unsubscribe;
    }, [setIsAuth, navigate]);

    //Function to sign in w/ google
    const signInWithGoogle = () => {
        //"provider" is to specify that we are using Google to authenticate. 
        // "then" is to specify what we do when we login to Google. "result" contains
        // all the information about user that is logged in.
        signInWithRedirect(auth, provider).then((result) => {
            //If tabs/browser is closed, this will allow you to still be logged in
            localStorage.setItem("isAuth", true)
            //Changes setIsAuth state (from props) to true
            setIsAuth(true); 
            //When you are logged in, it redirects to home page
            navigate("/");
        })
    }
    return (
        <div className='Login--container'>
            <div className='Login--insideContainer'>
                <div className='Login--welcome'>
                    <img className='Login--logo' src={logopng} alt=''/>
                    <h2>Welcome to the Login Page!</h2>
                </div>
                <div className='Login--googleContainer'>
                    <h4>Log in</h4>
                    {/* Calls signInWithGoogle func when button is clicked */}
                    <a className='Login--loginGoogleBtn' onClick={signInWithGoogle} style={{textDecoration:"none"}}><GoogleButton
                    label='Log in with Google'
                    onClick={() => { console.log('Google button clicked') }}
                    /></a>
                </div>
            </div>
        </div>
    )
}