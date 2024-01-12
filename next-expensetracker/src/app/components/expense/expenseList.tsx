'use client'
import React, { useState } from 'react'
import ExpenseStructure from "./expenseStructure"
import styles from "./expenselist.module.css"
import { ExpenseType } from '../../../../Types/types'

export default function ExpenseList() {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const[expense,setExpense]= useState<ExpenseType>({
    name:"",
    amount:0,
    Date:"",
    category:""


  })
  const handlesetExpense =(exp: ExpenseType) => {

setExpenses([...expenses,exp])
   console.log(expense);
  }

// expense working

  return(
    <>  
<ExpenseStructure setExpense={handlesetExpense} ></ExpenseStructure>
<div className={styles.expenselist}>

  {expenses.map((item =>  
  <div key={item.name} >
  <h1>{item.name}</h1>
  <h1>{item.amount}</h1>
  <h1>{item.Date}</h1>
  <h1>{item.category}</h1>
  <div className={styles.buttons}>
  <button>Delete</button>
  <button>Edit</button>
          </div>
</div> ))}


</div>

</>
  )
}
