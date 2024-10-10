import fb from "../firebase";
import React,{useState} from "react";
const db = fb.firestore()
const Bloglist = db.collection('blogs');



 function Create(){
const [title,Settitle] = useState("");
const[body,Setbody] = useState("");
const sumbit = (e)=>{
    e.preventDefault();
    Bloglist.add({
        Title:title,
        Body:body
    }).then((docRef)=>{
        alert("data Succesfully sumbit")
    })
    .catch((err)=>{
        console.error(err);
    })
}
    return(
        <div>
            <form onSubmit={(event) => {sumbit(event)}}>    
            <input type="text" placeholder="Title" 
            onChange={(e)=>{Settitle(e.target.value)}} required />

            <textarea  name="content" type="text" placeholder="write yoyr content here" 
            rows="10" cols="150" onChange={(e)=>{Setbody(e.target.value)}} required >
            </textarea>

            <button type="submit">Submit</button>
        </form>
         
        </div>
    );
}

export default Create;