import React from 'react'
import Sid from './Sidbar'
import Siddata from './Sidbardata'
import"../../pages/Home/Components/File.css"
import {  faArrowCircleDown,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Sidfn() {
  return (
<div className='divfun ' style={{background:"white",borderRadius:"20px" ,width:"100%"}}>
    <div className='function' >

{Siddata.map((ele)=>{
return(
<div className='Div' style={{display:"flex",justifyContent:"space-between",width:"100%"}}>

<Sid key={ele.id}
img={ele.img}
pr={ele.pr} />
<div className='ic ' style={{margin:"10px",marginTop:"20px",cursor:"pointer"}}>
<FontAwesomeIcon icon={faArrowCircleDown}/>
</div>
</div>
)

})}


</div>
</div>
  )
}
