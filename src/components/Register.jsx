import React from 'react'

function Register() {
    
    return (
        <div className="container">
           <form>
           <div className="form-group">
    <label >First Name:</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Last Name:</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Email address:</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password:</label>
    <input type="password" className="form-control"  placeholder="Password"/>
  </div>  
  <button type="submit" className="btn btn-primary">Register</button>
</form>
        </div>
    )
}

export default Register
