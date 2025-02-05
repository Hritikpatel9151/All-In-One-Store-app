import React from 'react'

const SignUp = () => {
  return (
    <div>
        <h1>Sign Up</h1>
       
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" />
        </label>
        <br />
        <label>
            
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignUp
