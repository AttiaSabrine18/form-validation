import React , { useState } from 'react'
import './Form.css'
import Validation from'./Validation'
const Form = () => {
    const [InputsValues , setInputsValues]= useState({
        username:'',
        email:'',
        date:'',
        password:'',
        cpassword:''

    });

    const [ errs , seterrs ] = useState({})

    const handleInput = (e)=>{
        setInputsValues(()=>({...InputsValues, [e.target.name]:e.target.value}))
    }
    const SubmitData = (e) =>{
        e.preventDefault();
       seterrs(Validation(InputsValues));
    }
  return (
  <header className="container form-body">
      <div className="section">
        <div className="title-text text-center">
            <h1> - Registre here -  </h1>
        </div>
        <form action="" onSubmit={SubmitData}>
            <div className="row">
                
                  <div className="col">
                  <label >Username</label>
                      <input type="text" className="form-control "  placeholder=" Enter your username" name='username' value={InputsValues.username} onChange={handleInput}/>
                      {errs.username && <h6 className="text-danger">*{errs.username}</h6>}
                 </div>
                 <div className="col">
                <label >Email address</label>
                                <input type="email" className="form-control"  placeholder="Enter your adress Email" name='email' value={InputsValues.email} onChange={handleInput}/>
                   {errs.email && <h6 className="text-danger">*{errs.email}</h6>}
                  </div>
            </div>                   
                              <label >Data of birth</label>
                                <input type="date" className="form-control"  placeholder="Enter your birth of date "  name='date'/>
                           
                             <label>Password</label>
                                <input type="password" className="form-control" placeholder=" Enter your Password"  name='password' value={InputsValues.password} onChange={handleInput}/>
                                {errs.password && <h6 className="text-danger">*{errs.password}</h6>}
                            <label>Confirm Password</label>
                               <input type="password" className="form-control" placeholder="Confirm your Password" value={InputsValues.cpassword} name='cpassword'onChange={handleInput}/>
                               {errs.cpassword && <h6 className="text-danger">*{errs.cpassword}</h6>}
                            
                            
                               <button type="button" className="registre-btn" onClick={SubmitData}>Registre</button>
                   
        </form>
               
        
        </div>
    </header>
  )
}

export default Form