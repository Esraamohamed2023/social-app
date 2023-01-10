import { faImage, faStar, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import sec5 from"../Callimg/shared/second/sec5.png"
import Sidfn from './Sidbar/Sidbarfn'
import "../pages/Home/Components/File.css"
export default function Sidall() {
  return (
<div className='d-none d-lg-block col-md-2 col-lg-3 coll p-2'>
<div className='firstp '>
<img src={sec5}/>
<h6  className=''style={{fontWeight:"bold"}}>AbdelRahman Sobhy</h6>
<h6 className=' '>Front-end Lead engineer</h6>
</div>
<div className='secondp'>
<div className='secicon' >
<FontAwesomeIcon icon={faStar} />
</div>
<p className=' ml-2'>Starred Messages</p>
</div>
<div className='secondp'>
<div className='secicon'>
<FontAwesomeIcon icon={faImage}/>
</div>
<p className='ml-2'>Media</p>
</div>
<Sidfn/>
<div className='secondp '>
<div className='secicon'>
<FontAwesomeIcon icon={faTriangleExclamation} />
</div>
<p className='ml-2'>Information</p>
</div>
</div>
  )
}
