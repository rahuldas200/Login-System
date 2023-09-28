import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Link to={"/login"}>
            <button>Login</button>
        </Link>
        <Link to={"/register"}>
            <button className='p-4' href="/register">Register</button>
        </Link>
    </div>
  )
}

export default Home;
