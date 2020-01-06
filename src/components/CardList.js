import React from 'react'
import Card from './Card'

const CardList=(props)=>{
    // if (true){
    //     throw new Error('ahahahahha')
    // }
    
    return (
        <div>
            {
            props.robots.map((user,i)=>{
                return <Card 
                    key={i}
                    id={user.id} 
                    name={user.name} 
                    email={user.email} 
                    />
                
            })
        }
      </div>
    )
}

export default CardList