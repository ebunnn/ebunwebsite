import React, { useEffect } from "react";
import "./Blog.css"
import {Link} from "react-router-dom";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import {db, auth } from "./firebase-config"


export default function Blog({isAuth}) {

    const [postLists, setPostList] = React.useState([]);
    const postsCollectionRef = collection(db, "blogPosts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPosts();
    });

    const deletePost = async (id) => {
        const postDoc = doc(db, "blogPosts", id);

        await deleteDoc(postDoc);
    };
    return(
        <div className="Blog--container">
            <h3 className="Blog--welcome">Welcome to blog page!</h3>
            {/* If the user is logged in, then display the "create blog post" link, if not, dont display it */}
            {!isAuth ? <p></p> : <Link to="/create-blog-post">Create Blog Post</Link>}
            {postLists.map((post) => {
                return (
                    <div>
                        <div className="Blog--title">{post.title}</div>
                        <div className="Blog--deletePost">
                            {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => {deletePost(post.id)}}>Delete</button>}
                        </div>
                        <div className="Blog--postText">
                            <p>{post.postText}</p>
                            <h5>Written by: {post.author.name}</h5>
                        </div>
                       
                    </div>
                )
            })}
        </div>
    )
}