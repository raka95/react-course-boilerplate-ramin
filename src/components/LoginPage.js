import React from 'react';
import {history} from "../routers/AppRouter";


export const LoginPage=()=>{
    return (
        <div className="box-layout"> 
            <form onSubmit={()=>history.push('/register')} className=" box-layout__2">
                <h1 className="box-layout__title">LogIn Page</h1>
                <input className="text-input" placeholder="Enter your Email Address" required={true}/>
                <input className="text-input" placeholder="Enter Password" required={true}/> 
                <button className="button" > Login </button>
            </form>
        </div>
    );
};

export default LoginPage;