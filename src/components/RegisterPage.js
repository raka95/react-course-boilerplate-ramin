import React from "react";
import {history} from "../routers/AppRouter";

export class RegisterForm extends React.Component{
    state={
        error:undefined,
        errorText:undefined,
        success:undefined
    }
    // const error="Please check your entries!";
    Register=(e)=>{
        e.preventDefault();
        this.setState(()=>({
            success:"Successfully registered"
           }));
        setTimeout(()=>history.push('/'),5000);
    }
    render=()=>{
        return(
        <div className="box-layout">
            <form className="box-layout__2 box-layout__2--2" onSubmit={this.Register} >
                {!!this.state.success&& <p>{this.state.success}</p>}
                {!!this.state.error && <p>{this.state.error}</p>}
                <div className="input-group3">
                    <h1 >Please enter your information</h1>
                </div>
                <div className="input-group2">
                    <label >First Name</label>
                    <input required={true} />
                </div>
                <div className="input-group2">
                    <label>Family Name</label>
                    <input required={true} />
                </div>
                <div className="input-group2">
                    <label>Email Add.</label>
                    <input required={true} />
                </div>
                <div className="input-group2">
                    <label>Country</label>
                    <input required={true}/>
                </div>
                <div className="input-group2">
                    <label>Tell</label>
                    <input required={true}/>
                </div>
                <div className="input-group2">
                    <label>Company</label>
                    <input />
                </div>
                <div className="input-group2">
                    <label>Address</label>
                    <input required={true} type="text"/>
                </div>
                <div  className=" button-group4">
                <button className="button button--2">Register</button>
                </div>
            </form>
        </div>
    );}


// export const RegisterForm=(props)=>{
//     const error="Please check your entries!";
//     // const success="You successfully registered";
//     // register=()=>{
//     //     if()
//     // }
// //   return (<p>{error}</p>);
//     const Register=()=>{
//         const Fname=e.target.Fname.FFname;
        
//         history.push(`/${Fname}`);

//     };
//     return(<div>
//         <form onSubmit={Register} className="form">
//             <div name="Fname">
//                 <label>First Name</label>
//                 <input required={true} name="FFname"/>
//             </div>
//             <div>
//                 <label>Family Name</label>
//                 <input />
//             </div>
//             <div>
//                 <label>Email Add.</label>
//                 <input />
//             </div>
//             <div>
//                 <label>Country</label>
//                 <input />
//             </div>
//             <div>
//                 <label>Tell</label>
//                 <input />
//             </div>
//             <div>
//                 <label>Company</label>
//                 <input />
//             </div>
//             <div>
//                 <label>Address</label>
//                 <input type="text"/>
//             </div>
//             <button >Register</button>
//         </form>
//         <button onClick={()=>history.push('/')}>Go Back</button>
//         </div>
//     );

    // return(
    //     <div >
    //         <div>
    //             {/* <label >First Name</label> */}
    //             <input placeholder="Enter Your Name" required={true} />
    //         </div>
    //         <div>
    //             {/* <label>Family Name </label> */}
    //             <input required={true} />
    //         </div>
    //         <div>
    //             {/* <label>Email Add. </label> */}
    //             <input required={true}/>
    //         </div>
    //         <div>
    //             {/* <label>Tell. </label> */}
    //             <input required={true}/>
    //         </div>
    //         <div>
    //             {/* <label>Company</label> */}
    //             <input />
    //         </div>
    //         <button onClick={this.register}> Register</button>
    //         <button onClick={()=>history.pushState('/')}> Go back</button>
    //     </div>
    // )
};
export default RegisterForm;