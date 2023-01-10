import { faArrowAltCircleDown, faArrowCircleDown, faArrowDown, faArrowDown91, faArrowDownUpAcrossLine, faArrowsDownToLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import"../../pages/Home/Components/File.css"

export default function Sid({img,pr}) {
  return (
    <div  className='Arrow' style={{display:"flex",justifyContent:"space-between",marginTop:"15px "}}>

<div className='sid' >

<div className='simg'>
<img src={img}  alt="not found"/>

</div>
<p  className='' style={{fontSize:"14px"}}>{pr}</p>

</div>

</div>

  )
}
