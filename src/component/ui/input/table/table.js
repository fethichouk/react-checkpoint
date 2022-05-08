import React from 'react'
import {Table} from "react-bootstrap"


function CustomTable() {
    const data = [
        {
          "name": "Molecule Man",
          "age": 29,
          "secretIdentity": "Dan Jukes",
          "powers": [
            "Radiation resistance",
            "Turning tiny",
            "Radiation blast"
          ]
        },
        {
          "name": "Madame Uppercut",
          "age": 39,
          "secretIdentity": "Jane Wilson",
          "powers": [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
          ]
        },
        {
          "name": "Eternal Flame",
          "age": 1000000,
          "secretIdentity": "Unknown",
          "powers": [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
          ]
        }
      ]

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>secretIdentity</th>
                        <th>powers</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.filter(el=>{
                        return el.age<50000
                    })
                    .map(el=>
                    <tr> 
                     <td>{el.name}</td>
                     <td>{el.age}</td>
                     <td>{el.secretIdentity}</td>
                     <td>{el.powers.filter(ele=>{
                         return ele.indexOf(" ") !==-1
                     }).join("+")}</td>
                 </tr>
                  
                    )
                     
                      }
                    
                       
                </tbody>
            </Table>
        </div>
    )
}

export default CustomTable