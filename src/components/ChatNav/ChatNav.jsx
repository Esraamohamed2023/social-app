import React from 'react'

export default function ChatNav({img,name,hour}) {
  return (
    <div className='sty ml-1' >
<div  style={{display:"flex" }}>
<img src={img } alt="not found" style={{width:"40px" ,height:"40px",borderRadius:"50%"}}/>
<div style={{marginLeft:"5px",marginTop:"10px"}}>
<h6 style={{fontWeight:"bold",fontSize:"13px"}}>{name}</h6>
<div style={{transform: "translate(-5%, -10px)",fontSize:"12px"}}>{hour}</div>
</div>
</div>



</div>
  )
}

