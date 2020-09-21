// const { InvertColorsOffRounded } = require("@material-ui/icons");
import React, {useState} from 'react'
import { Avatar } from '@material-ui/core'
import VideoCamIcon from "@material-ui/icons/Videocam"
import PhotoLibaryIcon from "@material-ui/icons/PhotoLibrary"
import InserEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import "./MessageSender.css"
import {useStateValue} from "./StateProvider"
import db from "./firebase"
import firebase from "firebase"



function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput]  =  useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

        // DB staff
        db.collection('posts').add({
            message: input,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            profilePIC:user.photoURL,
            username: user.displayName,
            image: imageUrl
        });

        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input" 
                    type="text" 
                    placeholder={`"What's on your mind, ${user.displayName}"`} />

                    <input 
                    value= {imageUrl}
                    onChange={e => setImageUrl(e.tartget.value)}
                    type="text" 
                    placeholder="Image URL"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibaryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InserEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
