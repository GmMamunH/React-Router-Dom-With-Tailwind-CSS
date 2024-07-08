import React from 'react'
import { useState } from 'react';

const Contact = () => {
 
const [values,setValues]=useState({first:"",second:"",sum:""})
const [first,setFirst]=useState('')
const [second,setSecond]=useState('')
const [sum,setSum]=useState('')
const onChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    const newValues = {
    ...values,
    [name]: value
} 
setValues(newValues)
calcSum(newValues)
calcfirst(newValues)
calcSecond(newValues)


}
const calcSum = (newValues) => {
const { first,second} = newValues;
const newSum = parseInt(first,10)+parseInt(second,10)
setSum(newSum)
} 
const calcfirst = (newValues) => {
const { sum,second} = newValues;
const newFirst = parseInt(sum,10)-parseInt(second,10)
setFirst(newFirst)
} 
const calcSecond = (newValues) => {
const { sum,first} = newValues;
const newSecond = parseInt(sum,10)-parseInt(first,10)
setSecond(newSecond)
} 

return ( <form>
       <div style={{display:"flex",flexDirection:"column"}} className='text-red500'>
        <label htmlFor="first">First</label>
        <input onChange={onChange} defaultValue={first} name='first' id="first" type="number" className='border-2'/>

        <label htmlFor="second">Second</label>
        <input onChange={onChange} defaultValue={second} name="second"  id="second" type="number" className='border-2'/>

        <label htmlFor="sum">Total</label>
        <input onChange={onChange} defaultValue={sum} id="sum" name="sum" type="number" className='border-2'/>


       </div>
    </form> );
}

export default Contact