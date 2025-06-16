import React from 'react'
import list from '../List'
import Card from './Card'

export default function Shop({handleClick}) {
  return (
    <section>
        {list.map((item)=>{
          return <Card item={item} key={item.id} handleClick={handleClick}/>
        })}
    </section>
  )
}
