import React,{useState} from 'react'
import MOCK_DATA from './MOCK_DATA.json';
 import Child from './Child';
import Followers from './Followers';
import Location from './Location'
function Filter() {
  const [fields, setFields] = useState([{ id:null,operator:null,value: null }]);
  const[clicked,setClicked]=useState(false);
//   const [fields2 ,setFields2]=useState([{ value: null }]);
//   console.log(typeof fields)
  function handleChange(i, event) {
    const values = [...fields];
    values[i].id = event.target.value;
    setFields(values);
    
  }
  function handleOperator(i,event)
  {
    const values = [...fields];
    values[i].operator = event.target.value; 
    setFields(values)
  }
  function handleFilter(i,event)
  {
    const values = [...fields];
    values[i].value = event.target.value; 
    setFields(values)
  }


  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  function handleSearch()
  {
    // setClicked(!clicked)
    // console.log('fields',fields)
    const con=[{ id:null,operator:null,value: null }];
    con.pop();
    fields.forEach(field=>con.push(field))
    console.log(con)
    ( <Child con={con}/>)
  }
  
  return (
    <div >
      

     
      {fields.map((field, idx) => {
        return (
         
          <div key={`${field}-${idx}`}>
            <select name="filters" id="id" onChange={(e)=>handleChange(idx,e)}>
            <option value="Add Filter">Add Filter</option>
            <option value="followers">Followers</option>
            <option value="following">Following</option>
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="sname">Screen Name</option>
            <option value="verified">Verified</option>
          </select>
          
          {field.id==="followers" || field.id==="following"?<select name="filters" id="id" onChange={(e)=>handleOperator(idx,e)}>
            <option value="">Select</option>
        <option value="GTE">{">="}</option>
        <option value="LTE">{"<="}</option>
            </select>:field.id==="name" || field.id==="sname" || field.id==="location" ?<select name="filters" id="id" onChange={(e)=>handleOperator(idx,e)}>
            <option value=" ">Select</option>
        <option value="CONTAINS">contains</option> </select>: field.id==="verified" ?<select name="filters" id="id" onChange={(e)=>handleOperator(idx,e)}>
            <option value=" ">Select</option>
        <option value="EQUALS">equals</option> </select>:""}
       
            <input type="text" onChange={(e)=>handleFilter(idx,e)}></input>
          
             {"  "}
            <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        );
      })}
     <button type="button" onClick={() => handleAdd()}>
                +
            </button>
            {/* {console.log('clicked',clicked)} */}
            <br></br><br></br>
            <button onClick={handleSearch}>Search</button>
            
            {/* {clicked? "":<Child con={fields}/>} */}
          
    </div>
    
    
  );
}
export default Filter