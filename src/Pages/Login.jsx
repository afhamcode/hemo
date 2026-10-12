import { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
   
     const [showPassword, setShowPassword] = useState(false);
     const handleSubmit = (e) => {
     e.preventDefault();
     console.log("Login form submitted");
     };
   


     return (
      <div className='login-page'>

                      <div className='login-header'>
                       <h1>Welcome Back To Hemo</h1>
                       </div>
                      <form onSubmit={handleSubmit}>
                         <div className='login-inputs'>
                        <label htmlFor="email">Email:</label>
                         <input type="email" id='email' name='email' required />
                        <label htmlFor="password">Password:</label>
                          <input
                           type={showPassword ? "text" : "password"}
                           name="password"
                           id='password'
                           required
                         />
                         <button
                                  type="button"
                                 onClick={() => setShowPassword(!showPassword)}
                                   >
                                    {showPassword ? "Hide" : "Show"}
                         </button>
                        <button type="submit">Login</button>
                        <p>dont have account ?<Link to="/register">Register</Link></p>
                       </div>
                      </form>


    </div>
  )
}

export default Login