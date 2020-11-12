import React from 'react';
import MOCK_DATA from './MOCK_DATA.json';
import './table.css'


function Child(props) {

    const data= MOCK_DATA;
    const columns=['Name','ScreeName','Followers','Following','Location','Verified']
     
    const res=[];
    data.filter((item)=>
    {
        var val=true;
      props.con.forEach(doc=>{
        // console.log('doc',doc)
          if(doc.id==="followers")
          {
              if(doc.operator==="GTE")
              {
                  if(item.followers>=Number(doc.value)&& val)
                  val=true;
                  else
                  val=false;
              }   
              else if(doc.operator==="LTE")
              {
                if(item.followers<=Number(doc.value) && val)
                  val=true;
                  else
                  val=false;
            }
          }
          else if(doc.id==="following")
          {
              if(doc.operator==="GTE")
              {
                  if(item.following>=Number(doc.value)&& val)
                  val=true;
                  else
                  val=false;
              }   
              else if(doc.operator==="LTE")
              {
                if(item.followers<=Number(doc.value) && val)
                  val=true;
                  else
                  val=false;
            }
          }
          
          else if(doc.id==="location")
          {
              if(item.location.includes(doc.value) && val)
              val=true;
              else
              val=false;
          }
          else if(doc.id==="verified")
          {
              if(item.verified===(doc.value==="verified"? true:false) && val)
              {
              val=true;
            
              }
              else
              val=false    
          }
        
      })  
        if(val)
        res.push(item)
        return res;
    })
    
//    console.log("Inside child",props.con,"res",res)

    return (
        <div>


           <table>
            <thead>
                <tr>
                {
                    columns.map((column,id)=>
                        <th key={id}>{column}</th>
                        )
                }
                </tr>
            </thead>


            <tbody>
                {res.map((user,id)=>
                    <tr key={id}>
                        <td>{user.name}</td>
                        <td>{user.sname}</td>
                        <td>{user.followers}</td>
                        <td>{user.following}</td>
                        <td>{user.location}</td>
                        <td>{user.verified===true ?"Verified":"Not Verified"}</td>
                    
                    </tr>)}
            </tbody>


           </table>
        </div>
    )
}

export default Child
