import React from 'react'
import sec2 from"../Callimg/shared/second/sec2.png"
import "../pages/Home/Components/File.css"
export default function Message() {
  return (
    <div className='message'>
<div className='four mh-200'>
<p style={{fontSize:"13px"}}>How about we get together for a coffee  this weekend?</p>

<h6 >4:05 pm</h6>
</div>
<img src={sec2} />
</div>
  )
}
