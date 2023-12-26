import React from 'react'
import styles from "./expensestructure.module.css"
export default function ExpenseStructure() {


    const categories=['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Online Purchases', 'Other'];
  return (
    <div className={styles.exmodal}>
    <h1 >Enter New Expense</h1>
    <input type="text" placeholder='Enter  Expense Name'/>

    <input type="number"  placeholder='Enter Amount'/>
    
    <input type="date"  />

    <select>

 <option >Select a category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
                                                    {cat}
                  </option>
                ))}
         </select>

    <button>Add Expense </button>


    </div>
  )
}
