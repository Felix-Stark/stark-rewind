import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
      const navigate = useNavigate();
      const BASE_URL = 'http://localhost:8888';

      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [loginUsername, setLoginUsername] = useState('');
      const [loginPassword, setLoginPassword] = useState('');
    
      async function signUpUser() {
        
        console.log('hej')
        const account: object = {
          username: username,
          password: password
        }
        const response = await fetch(`${BASE_URL}/signup`, {
            method: 'POST',
            body: JSON.stringify(account),
            headers: { 'Content-Type': 'application/json' }
          })
          const data = await response.json();
          console.log(data)
      }
    
      async function loginUser() {
        console.log('hello')
        const account: object = {
          username: loginUsername,
          password: loginPassword
        };
        const response = await fetch(`${BASE_URL}/login`, {
          method: 'POST',
          body: JSON.stringify(account),
          headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json();
        console.log(data)
        if (data.success) {
          localStorage.setItem('user', data.user);
          localStorage.setItem('interests', JSON.stringify(data.interests));
          navigate('/start', {state: {user: data.user}})
    
        }
      }
    
      return (
        <div className="App">
          <h1>Sign up / Log in</h1>
    
            <section>
            <label htmlFor="username">Choose username</label>
              <input id='username' type="text" placeholder='USERNAME' onChange={(e)=> setUsername(e.target.value)} />
              <label htmlFor="password">Choose password</label>
              <input id='password' type="password" placeholder='PASSWORD' onChange={(e)=> setPassword(e.target.value)} />
              <button onClick={signUpUser}>Sign up</button>
            </section>
    
            <section>
              <label htmlFor="loginusername">Username</label>
              <input id='loginusername' type="text" placeholder='USERNAME' onChange={(e)=> setLoginUsername(e.target.value)} />
              <label htmlFor="loginpassword">Password</label>
              <input id='loginpassword' type="password" placeholder='PASSWORD' onChange={(e)=> setLoginPassword(e.target.value)} />
              <button onClick={loginUser}>Login</button>
            </section>
    
        </div>
      )
}