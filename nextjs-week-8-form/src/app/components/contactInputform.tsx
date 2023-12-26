'use client'

import React, { useState } from 'react'
import { contactTypes,onChangeEventType  } from '../Types/types';
import DisplayContactinfo from './displayContactinfo'

export default function ContactInputform() {
const obj:string = "Muhammad Faheem"
const [contactdetail,setcontactdetail]=useState<contactTypes>({
 name:"",
email:"",
phone:0,
message:""
})

const onchangehandler=(e:onChangeEventType) =>{
const newinfo:contactTypes ={
...contactdetail,
[e.target.name]: e.target.value,

}
setcontactdetail(newinfo);


}
console.log("Myobj",contactdetail);

  return (
<div className=''>
  <form >

<input type="text" onChange={onchangehandler} name='name'   placeholder='Enter Your Name'/>
<br/><br/>

<input type="email"  onChange={onchangehandler} name='email' placeholder='Enter Your Email'/>
<br/><br/>
<textarea placeholder='Enter your Detailed Information' cols={30} rows={10}></textarea>
<button  >add</button>
  </form>
  <DisplayContactinfo contactlist={contactdetail} />
    </div>

  )
}
