import React from 'react'
import { contactTypes } from '../Types/types'

export default function DisplayContactinfo({contactlist}:contactTypes) {
  return (
    <div>
      {`Name:${contactlist.name}`}
      <br />
      <br />
      {`Email:${contactlist.email}`}
     


    </div>
  )
}
