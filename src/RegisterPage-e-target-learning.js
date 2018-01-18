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
        const Fname=e.target.elements.Fname.value;
        const familyName=e.target.elements.familyName.value;
        const email=e.target.elements.email.value;
        const country=e.target.elements.country.value;
        const tell=e.target.elements.tell.value;
        const address=e.target.elements.address.value;
        if(Fname&&familyName&&email&&country&&tell&&address){
            this.setState(()=>({
                success:"Successfully registered"
            }));
            setTimeout(()=>history.push('/'),5000);
        }
        
        
        console.log(Fname);
        // history.push('/register');
    }
    render=()=>{
        return(
        <div>
            <form onSubmit={this.Register} className="form">
                {!!this.state.success&& <p>{this.state.success}</p>}
                {!!this.state.error && <p>{this.state.error}</p>}
                <div >
                    <label>First Name</label>
                    <input required={true} name="Fname"/>
                </div>
                <div>
                    <label>Family Name</label>
                    <input required={true} name='familyName'/>
                </div>
                <div>
                    <label>Email Add.</label>
                    <input required={true} name='email'/>
                </div>
                <div>
                    <label>Country</label>
                    <input required={true} name='country'/>
                </div>
                <div>
                    <label>Tell</label>
                    <input required={true} name='tell'/>
                </div>
                <div>
                    <label>Company</label>
                    <input />
                </div>
                <div>
                    <label>Address</label>
                    <input required={true} type="text" name='address'/>
                </div>
                <div>
                <button >Register</button>
                </div>
            </form>
            <button onClick={()=>history.push('/')}>Go Back</button>
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