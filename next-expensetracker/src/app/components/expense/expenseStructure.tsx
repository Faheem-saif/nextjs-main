import React from 'react'
import styles from "./expensestructure.module.css"
import { useState } from 'react';
export default function ExpenseStructure({setExpense}:any) {
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
   
 
    const categories=['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Online Purchases', 'Other'];
    const    handleaddexpense = ( ) =>{
     const newexpense={
        name:name,
        amount:amount,
        Date:date,
        category:category
     }
     setExpense(newexpense)
     setName("")
     setDate("")
     setAmount(0)
     console.log(newexpense);
     

     
    }
    
  return (
    <div className={styles.exmodal}>
    <h1 >Enter New Expense</h1>
    <input type="text" placeholder='Enter  Expense Name' onChange={(e)=> setName(e.target.name)}/>

    <input type="number"  placeholder='Enter Amount' onChange={(e)=> setAmount(parseFloat(e.target.value))}/>
    
    <input type="date" onChange={(e)=> setDate(e.target.value)} />

    <select>

 <option >Select a category</option>
        {categories.map((item) => (
          <option key={item} value={item}>
                   {item}
                  </option>
                ))}
         </select>

    <button onClick={handleaddexpense}>Add Expense </button>


    </div>
  )
}
