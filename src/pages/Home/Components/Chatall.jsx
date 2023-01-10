import React from 'react'
import sec2 from "../../../Callimg/shared/second/sec2.png"
import Chat from "../../../components/ChatNav/Chat.css"
import Sidbarfn from "../../../components/Sidbar/Sidbarfn"
import star from "../../../Callimg/shared/star.png"
import ColectChat from './ColectChat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Chatfn from '../../../components/ChatNav/Chatfn'
import File from"./File.css"
import Twopart from '../../../components/Twopart'
import Message from '../../../components/Message'
export default function Chatall() {
    return ( <div className=' Querter' >
<div className='allsid p-1 '>
<div className='partone  '>
<span><h4>+</h4></span>
<h6 style={{fontSize:"16px",    transform: "translate(-15%, 0px)"}}>Create New</h6>
</div>
<div className='cht'>
<h4>Chat</h4>
<div className='spn'>
<span></span>
<span></span>
<span></span>

</div>

</div>
<div className='srh '>
<input type={'search'} placeholder="Search Name"/>
<FontAwesomeIcon icon={faSearch} className="icon"/>
</div>

<div className='fun '>
<Chatfn/>
</div>
</div>



</div>
        
    )
}