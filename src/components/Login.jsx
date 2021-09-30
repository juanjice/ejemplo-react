import React,{useState} from 'react'
import validator from 'validator';
import {Link} from 'react-router-dom'
function Login() {

    const [email,setEmail] =useState("");
    const [pasword,setPassword] =useState("");
    const [error,setError]=useState(null);

    const login=(e)=>{
        e.preventDefault();
        setError(null);        
        isEmailValid();        
        isRegistered();
    }
    const isEmailValid=()=>{        
        let isvalid=validator.isEmail(email);
        if(!isvalid){
            setError("Email no valido");
        }        
    }    
    const isRegistered=()=>{
       /* axios.get(`https://servicioejemplo/${email}`).then((res)=>{
            if(res.user==null){
                setError("No existe el usuario")
            }
        })**/
    }

    
    return (
        <div className="container">

            <form >
            <label  className="form-label"
             >Email address:</label>
            <input type="email" className="form-control"  placeholder="name@example.com"
            onChange={(e)=> setEmail(e.target.value)}/>            
            <br />            
            <label  className="form-label">Password:</label>
            <input className="form-control" type="password" 
            onChange={(e)=>setPassword(e.target.value)} /> 
            <button type="button" className="btn btn-primary" onClick={(e)=>{login(e)}}>
             Login
            </button>
            <br />
            <Link to="/register">
            <button type="button" className="btn btn-dark ">
             Register
            </button>
            </Link>
            </form>
                    
            {
            error ? <div className="alert alert-danger" role="alert">
            {error}
            </div> : <div></div>
            }
        </div>
    )
}

export default Login
