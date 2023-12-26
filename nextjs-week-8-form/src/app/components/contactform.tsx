import React from 'react'
import ContactInputform from './contactInputform'
import styles from "./contactform.module.css"

export default function Contactform() {
  return (
    <div className={styles.mainform}>

        <h1>This is the main Contact form</h1>
        <ContactInputform/>
    
        
      
    </div>
  )
}
