import React, { Component } from 'react'
import products from './products.json';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      
      cartItem:[],

    }
  }

addtoCart=(prod)=>{
  console.log("props",prod);
  this.setState({cartItem : [...this.state.cartItem,prod]})
}

  render() {
    return (
      <div>
        {this.state.name}
        {products.map((prod,index)=>(
          <div key={index}>
            <h2>{prod.name}</h2>
            <button onClick={()=> this.addtoCart(prod)}>Add to Cart</button>
          </div>
         ))}

        <h1>CartItem</h1>
        {this.state.cartItem.map((prod,index)=>(
          <div key={index}>
            <h1>{prod.name}</h1>
            <button onClick={()=> this.cartItem}>cart</button>
          </div>
        ))}
      </div>
    )
  }
}


// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:"react js",
//       age:2013,
//       obj:{
//         name:'prodA',
//         id:1,
//         name:'prodB',
//         id:2
//       },
//     }
//   }
   
// changeName=function(){
//   this.setState({name:'arunkumar' ,age:2014});
// }
//   render() {
//     console.log(this);
//     return (
//       <div>{this.state.name} {this.state.age}
//       <Header age={this.state.age} />
//       <button onClick={this.changeName.bind(this)}>click</button>

//       </div>
//     )
//   }
// }



// import React from 'react'
// import './App.scss';
// import Header from './Header';
// import products from './products.json';


// function App() {
//   const obj={
//     name:"arun",
//     age:23
//   }

//   const getName=(data)=>{
//     console.log(data,"data");

//   }
//   return (
//     <React.Fragment>
//     <div className='container'>
//         <div className='link'>
//     <a href='#home' className='a1'>Home</a>
//     <a href='#logo' className='a2'>logo</a>
//     <a href='#cart' className='a3'>cart</a>
//     <a href='#p' className='a4'>P</a>
//     </div>
//     </div>


// <div className='produ'>
//   <h1 className='letter'>welcome to all</h1>
//   <h2 className='letter'>comeing soon</h2>
// </div>



//     <select>
//       <option>Addtocart</option>
//       <option>Account</option>
//       <option>likeproducts</option>
//     </select> 

//     <Header/>
    
//     <Header name={"react js"} obj={obj} get={getName}/>
//     </React.Fragment>
//   )
// }

// export default App