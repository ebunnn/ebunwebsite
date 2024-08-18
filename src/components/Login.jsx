import {React, useEffect} from 'react';
import "../css/Login.css"
import loginimg from "../images/login image.png";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

//Grabbing "setIsAuth" as props (from App component)
export default function Login({setUser}) {
    // const [isLoading, setIsLoading] = useState(true);
    // let navigate = useNavigate();


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             localStorage.setItem("isAuth", true);
    //             setIsAuth(true);
    //             setUserName(auth.currentUser.displayName);        
    //             setIsLoading(false);
    //             // navigate("/");
    //         }
    //     });

    //     return unsubscribe;
    // }, [setIsAuth, setUserName, navigate]);


    //Function to sign in w/ google
    // const signInWithGoogle = onAuthStateChanged(auth, (user) => {
    //     //"provider" is to specify that we are using Google to authenticate. 
    //     // "then" is to specify what we do when we login to Google. "result" contains
    //     // all the information about user that is logged in.
    //     signInWithRedirect(auth, provider).then((result) => {
    //         //If tabs/browser is closed, this will allow you to still be logged in
    //         localStorage.setItem("isAuth", true)
    //         //Changes setIsAuth state (from props) to true
    //         setIsAuth(true); 
    //         //When you are logged in, it redirects to home page
    //         navigate("/");
    //     )});
    // }


    // const signInWithGoogle = () => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             localStorage.setItem("isAuth", true);
    //             setIsAuth(true); 
    //             setUserName(auth.currentUser.displayName);        
    //             navigate("/");
    //         }
    //     });
    
    //     signInWithRedirect(auth, provider)
    //         .then(() => {
    //         })
    //         .catch((error) => {
    //             console.error('Failed to sign in with Google:', error);
    //         });
    
    //     return unsubscribe;
    // };

    let navigate = useNavigate();

    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
    
    function handleCallbackResponse(res) {
      console.log("Encoded JWT ID token: " + res.credential);
      var userObject = jwtDecode(res.credential);
      console.log(userObject);
      setUser(userObject);
      navigate("/"); // Now this will work
    }
  
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCallbackResponse,
      });
  
      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    }, []);

    return (
        <div className='Login--container'>
            <div className='Login--insideContainer'>
                <div className='Login--welcome'>
                    <img src={loginimg} alt="Login image" />
                    {/* <img className='Login--logo' src={logopng} alt=''/>
                    <h2>Welcome to the Login Page!</h2> */}
                </div>
                <div className='Login--googleContainer'>
                    <h4>LOGIN</h4>
                    <div id="signInDiv"></div>
                </div>
            </div>
        </div>
    )
}