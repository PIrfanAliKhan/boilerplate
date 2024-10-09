import { useState } from "react";
const Home = () => {
    const [inputname, setname] =useState("");
    const [inputusername, setusername] =useState("");
  const [inputemail, setemail] = useState("");
  const [error, seterror] = useState("");
  const [inputnum, setnum] =useState("");

  const handlesubmit= (e)=>{
    e.preventDefault();
    if(!inputemail.includes('@'&&'.com')){
        seterror("give email correctly");
    }
    else if(inputname.length<1){
        seterror("Feild is requred")
    }
    else if(inputusername.includes(' ')){
      seterror("remove space");
    }
    else if(inputnum.length<10 || inputnum.length>10){
        seterror("invalide mobile number")
    }
    else{
        seterror("");
        setemail("");
        setnum("");
        setusername("");
        setname("");
        console.log("form submited:",{inputemail, inputpwd})
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <div>
            <input type="text" placeholder="Name" value={inputname} onChange={(e)=>setname(e.target.value)} />
            <span>{}</span>
        </div>
        <div>
            <input type="text" placeholder="Username" value={inputusername} onChange={(e)=>setusername(e.target.value)} />
            <span>{}</span>
        </div>
        <div>
          <input
          type="text"
          value={inputemail}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />
          <span>{}</span>
        </div>
        <div>
            <input type="number" placeholder="Mobile number" value={inputnum} onChange={(e)=>setnum(e.target.value)} />
            <span>{}</span>
        </div>
        <div>
            {error ?<p style={{color:"red"}}>{error}</p>:<></>}
          <button>submit</button>
        </div>
      </form>
    </>
  );
};

export default Home;
