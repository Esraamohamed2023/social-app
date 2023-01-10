import React from 'react'
import ChatNav from './ChatNav'
import Chatdata from "./Chatdata"


export default function Chatfn() {
  return (
    <div style={{height:"540px",width:"100%"}}>
{Chatdata.map((ele)=>
{return(<div style={{height:"50px",marginBottom:"20px",alignItems:"center",display:"flex",width:"100%"}}>
<ChatNav 
img={ele.img}
name={ele.name} 
hour={ele.hour} 
key={ele.id}/> 
</div>)})}</div>
  )
}
