import { useRouter } from 'next/router';
import React from 'react'

const Dblogs = () => {

    const router= useRouter();
    const pageId=router.query.dblogs;
  return (
    <div>
      <h1>This Is dynamic page {pageId}</h1>
    </div>
  )
}

export default  Dblogs;
