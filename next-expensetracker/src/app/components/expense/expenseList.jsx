'use client'
import React, { useState } from 'react'
import ExpenseStructure from "./expenseStructure"
import styles from "./expenselist.module.css"
export default function ExpenseList() {

  const[expense,setExpense]= useState([{
    name:"services",
    amount:500,
    Date:"10-23-2003",
    category:"Utility"


  }])
  const handlesetExpense =(exp) => {
 setExpense([...expense,exp])

  }

// expense working

  return (
    <>  
<ExpenseStructure setExpense={handlesetExpense} ></ExpenseStructure>
<div className={styles.expenselist}>
  {expense.map((expense => { <div><h1>{expense.name}</h1>
  <h1>{expense.amount}</h1>
  <h1>{expense.Date}</h1>
  <h1>{expense.category}</h1>
  <div className={styles.buttons}>
  <button>Delete</button>
  <button>Edit</button>
  </div></div> }))}
  <h1>{expense.name}</h1>
  <h1>{expense.amount}</h1>
  <h1>{expense.Date}</h1>
  <h1>{expense.category}</h1>
  <div className={styles.buttons}>
  <button>Delete</button>
  <button>Edit</button>
  </div>

</div>

</>
  )
}
