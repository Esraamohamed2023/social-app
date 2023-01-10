import React from 'react'
import Chatfn from '../../../components/ChatNav/Chatfn'

import Chat from "../../../components/ChatNav/Chat.css"
import sec1 from "../../../Callimg/shared/second/sec1.png"
import sec2 from "../../../Callimg/shared/second/sec2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faPaperPlane, faPlaneArrival, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function ColectChat() {
    return ( <
        div className = 'All' >
        <
        div className = 'container' >
        <
        div className = 'contain' >
        <
        div className = 'part' >
        <
        div className = 'first' >
        <
        div >
        <
        h4 > + < /h4> <
        p style = {
            { fontSize: "20px", marginTop: "10px" } } > Create New < /p> <
        /div> <
        /div> <
        div >
        <
        p style = {
            { fontSize: "20px", fontWeight: "bold", height: "20px" } } > Chat < /p> <
        div className = 'three' >
        <
        div > < /div> <
        div > < /div> <
        div > < /div> <
        /div> <
        /div> <
        form >
        <
        input type = { "search" }
        value = "Search Name" / >
        <
        FontAwesomeIcon icon = { faSearch }
        style = {
            { fontSize: "20px", transform: "translatex(-40px)" } }
        />

        <
        /form> <
        div style = {
            {
                width: "300px",
                height: "500px",
                overflowY: "scroll",
                overflowX: "hidden"
            }
        } > < Chatfn / > < /div> <
        /div> <
        div style = {
            { width: "500px" } } >
        <
        div className = 'online' >
        <
        div className = 'on1' >
        <
        img src = { sec1 }
        style = {
            { width: "70px", borderRadius: "50%", margin: "10px", height: "70px" } }
        />

        <
        div className = 'on2' >
        <
        h3 > mohamed ahmed < /h3> <
        p style = {
            { marginTop: "-10px", marginLeft: "-80px" } } > Online < /p> <
        /div> <
        /div> <
        div className = 'three' >
        <
        div > < /div> <
        div > < /div> <
        div > < /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = 'four' >
        <
        p > How about we get together
        for a coffee < span > this weekend ? < /span> <
        h5 style = {
            { position: "absolute", right: "5px", bottom: "0" } } > 4 : 05 pm < /h5></p >
        <
        img src = { sec2 }
        style = {
            { width: "50px", borderRadius: "50%", marginTop: "100px ", height: "50px" } }
        /> <
        div className = 'yy' >
        <
        p > Amazing! < h5 > 4: 06 pm < /h5></p >
        <
        img src = { sec1 }
        style = {
            { width: "50px", borderRadius: "50%", marginTop: "100px ", height: "50px" } }
        /> <
        div className = 'yu' >
        <
        div >
        <
        p > this sounds like a good plan
        for me < h5 > 4: 07 pm < /h5></p >
        <
        img src = { sec1 }
        style = {
            { width: "50px", borderRadius: "50%", marginTop: "100px ", height: "50px" } }
        /> <
        /div> <
        /div> <
        div className = 'final' >
        <
        h3 > + < /h3> <
        div className = "input" >
        <
        input type = { 'text' }
        value = "    Type a messaage here....."
        style = {
            { paddingLeft: "15px", background: "white", width: "450px", boxShadow: " 2px 3px 4px 0px #bdb6b6" } }
        /> <
        div className = 'icon' >
        <
        FontAwesomeIcon icon = { faFaceSmile }
        style = {
            { marginRight: "10px" } }
        /> <
        FontAwesomeIcon icon = { faPaperPlane }
        style = {
            { color: "65c165" } }
        /> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>

        <
        /div>



        <
        /div>
    )
}