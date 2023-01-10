import React from 'react'
import Chatall from '../pages/Home/Components/Chatall'
import Message from './Message'
import"../pages/Home/Components/File.css"
import sec1 from"../Callimg/shared/second/sec1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile,faFaceSmile,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Sidall from './Sidall'


export default function Two() {
  return (
  




<div style={{background:"#eee",borderRadius:"20px",maxWidth:"650px"}} className=" p-1  col-md-4 col-lg-6  AllDiv">
<Chatall/>
<div className='  drk  '>
<div className='two '>

<div className='one '>
<div className='img'>
<img  src={sec1} style={{width:"30px",borderRadius:"50%",margin:"10px",height:"30px"}}/>

<div className='on2'>
<h6 style={{paddingTop:"10px" ,fontSize:"13px"}}>Mohamed ahmed</h6>
<p style={{transform:"translate(-25%,-35%)",fontSize:"12px"}}>Online</p>
</div>
</div>
<div className='spn'>
<span></span>
<span></span>
<span></span>
</div>
</div>

</div>
<Message/>
<div className='yy ml-3'>
<img src={sec1}/>
<p>Amazing!<h6 className=''>4:06pm</h6></p>
</div>
<div className='yu ml-3'>

<img src={sec1} />
<p>this sounds like a good plan for me<h6>4:07pm</h6></p>


</div>
<div className='d-flex dd'>
<div className='final' >
<div className='H3 mr-2'>
<h3>+</h3>
</div>

<div className="input " >
<input type={'text'} placeholder="Type a messaage here....." />
<div className='icon'>
<FontAwesomeIcon icon={faFaceSmile} style={{marginRight:"10px"}} />
<FontAwesomeIcon icon={faPaperPlane} style={{color:"65c165"}} />
</div>
</div>
</div>
</div>
</div>
</div>



  )
}
