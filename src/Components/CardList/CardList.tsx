import React from 'react'
import Card from '../Card/Card'

type Props = {}

const CardList = (props: Props) => {
  return (
    <div>
       <Card companyName='Google' ticker='abc' price={250}/>
       <Card companyName='Apple' ticker='xyz' price={300}/>
       <Card companyName='Microsoft' ticker='lmn' price={800}/> 
    </div>
  )
}

export default CardList;