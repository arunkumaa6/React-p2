import React, {useState, useEffect} from 'react';

// //Function component useState method updete value
// // React Hooks useState() 
// // React Hooks useEffect()

function Hooks() {
    const [name, setName]=useState("React js");
    const [age, setObj]=useState(23)

// // componentDidMount useEffect()

// useEffect(()=>{

//     console.log("componentDidMount");

// },[]);

// //componentDidUpdate useEffect()

// useEffect(()=>{

//     console.log("useEffect Update Name");

// },[name]);

// //componentWillmount useEffect()


// useEffect(()=>{
//     return()=>{
//         console.log("componentWillmount");
//     };
// },[])

  return (
    <div>{name} {age}
    <button onClick={()=>setName("Anguler js")}>NameUpdate</button>
    <button onClick={()=>setObj(26)}>AgeUpdate</button>
    </div>
  )
}

export default Hooks