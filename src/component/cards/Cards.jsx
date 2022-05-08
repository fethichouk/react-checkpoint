import React from 'react'
import { data } from '../data/data'
import {Card} from "react-bootstrap"
function CustomCards() {
  return (
    <div class="ari"> 
        {data.map(el=>
             <Card style={{ width: '18rem' }}>
             <Card.Body>
               <Card.Title>{el.name}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">{el.id}</Card.Subtitle>
               <Card.Text>
               "street":{el.address.street}
               </Card.Text>
               <Card.Link href="#">Card Link</Card.Link>
               <Card.Link href="#">Another Link</Card.Link>
             </Card.Body>
           </Card>
            )}
       
    </div>
  )
}

export default CustomCards