 import './App.css';
 import { useState } from 'react';

 function App() {
  // const navigate = useNavigate();


  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [contact, setcontact] = useState('');
  const [output, setoutput] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const userDetails = { email: email, password: password };

    axios.post("http://your-api-url/login", userDetails).then((response) => {
        const user = response.data.userDetails;

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("password", response.data.password);
        localStorage.setItem("contact", response.data.contact);
        localStorage.setItem("info", user.info);
       
             
        setoutput("Login successfully");
        // navigate("/dashboard"); // Navigate after successful login
      })
                      
         
       .catch((error) => {
        setname("");
        setemail("");
        setpassword("");
        setoutput("Invalid user or please verify your account");
      });
    }

    
  return (
    <>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
      
        {/* <input type="text"  value={Name} onClick={(a)=>setname(a.target.value)}placeholder='Name'/> */}
                <input type="text" value={name} onChange={(n) => setname(n.target.value)} placeholder="Name" required />
<br /> <br />
        <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" required />
       <br /> <br /> <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" required />
       <input type="file" placeholder='file' />
       <br /> <br /> <button type="submit"> Submit </button>
          
        
      </form>
      <p>{output}</p>
    </div>
    </>
  );
 }
 

  export default App;
 

  






//     <>

//       <form >  
//         <label htmlFor="Text">Name</label>
//       <input type="text" /> <br />
      
//       <label htmlFor="">Email </label> 
//       <input type="text"/> <br />
    
//         <label For="text" sttle>Password </label>
//        <input type="text"/><br />

// <label>Contact </label> 
// <input type="text" /> <br />


// <input type="button" value="onclick"/>
//       </form>
      
      
//       </>
//   )
// }


// export default App;
