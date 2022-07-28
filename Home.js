import React from 'react'

function Home() {
  return (
    <div>
        <h1>Welcome to React Router!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        {/* <h2>{setInterval(() => {
          new Date().toLocaleTimeString()
        },1000)}</h2> */}
    </div>
  )
}

export default Home
