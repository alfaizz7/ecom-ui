import axios from "axios";
import { useEffect, useState } from "react";
import { appurl } from "./appurl.js";

function Register() {

   const [name , setname]=useState();
   const [email , setem]=useState();
    const [age , setage]=useState();
    const [contact , setcontact]=useState();
    const[output,setoutput]=useState();

    var obj = {"name":name,"email":email,"age":age,"mobile":contact}
  
    var handle = ()=>{
      axios.post(appurl+"/register",obj).then((res)=>{
           setoutput("Register successfully ");
           console.log(res)
           setname("");
           setage("");
           setcontact("");
           setem("");
      }).catch((err)=>{
           console.log(err);
      })
    

            
    }

  return (
     <>

      <div class="contact-page section">
    <div class="container">
      <div class="row">
         <h1>{output}</h1>
         <h3>Register  Here !!! </h3>

        <div class="col-lg-12">
          <form id="contact-form">
            <div class="row">
              <div class="col-lg-12">
                <fieldset>
                  <label for="name">Full Name</label>
                  <input type="name" name="name" value={name} onChange={ e => setname(e.target.value)} placeholder="Your Name..." autocomplete="on" required />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="email">Email </label>
                  <input type="text"  value={email} onChange={ e => setem(e.target.value)} pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="subject">Age</label>
                  <input type="number" name="subject"  value={age} onChange={ e => setage(e.target.value)} placeholder="Age..." autocomplete="on" />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <label for="message">Enter Number </label>
                  <input type="number"  value={contact} onChange={ e => setcontact(e.target.value)} placeholder="Your Mobile Nuber" />
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <button type="button" class="orange-button" onClick= {handle} >Register here </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  </div>

     </>  
     
   
   
   );

}

export default Register;
