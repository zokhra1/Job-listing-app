import React from 'react'

export default function Search({setSearchKeyword}) {
  return (
    <div className='header-container'>
<ul>
    <input type="text" onChange={(e)=>setSearchKeyword(e.target.value)}/>
</ul>
    </div>
  )
}
