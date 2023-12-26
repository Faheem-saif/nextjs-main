import React from 'react'
import ExpenseStructure from "./expenseStructure"
import styles from "./expenselist.module.css"
export default function ExpenseList() {
  return (
    <>  
<ExpenseStructure></ExpenseStructure>
<div className={styles.expenselist}>
  <h1>Expense Name</h1>
  <h1>This is amount</h1>
  <h1>This is date</h1>
  <h1>This is Categories</h1>
  <button>Delete</button>
  <button>Edit</button>

</div>

</>
  )
}
