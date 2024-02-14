import {
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { Button, ButtonGroup,HStack } from "@chakra-ui/react";
import {FaFacebook,FaTwitter,FaGoogle} from 'react-icons/fa'
import { Link } from "react-router-dom";
// import '../services/auth';
import { signUp } from "../services/auth";

function Register() {
  const [email, setInput] = useState("");
  const [password, setInput2] = useState("");
  const [name, setInput3] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleInputChange2 = (e) =>
  { setInput2(e.target.value);}
  const handleInputChange3 = (e) =>{setInput3(e.target.value);}
  const RegisterFormSubmit=()=>{

    const data={
      name:name,
      password:password,
      email:email
    }
    console.log(data);
    signUp(data);

  }
  return (
    // Add a div element with some styles
    <div  style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
    <div
      style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        height: "65vh",
        width: "70vh",
        boxShadow:"0px 10px 10px gray"
      }}
    >
      <FormControl style={{ width: 400, height: 400}}>
        <FormLabel >Email</FormLabel>
        <Input type="email" value={email} onChange={handleInputChange} placeholder='Email'/>
        <FormLabel>First name</FormLabel>
        <Input placeholder='First name' value={name} onChange={handleInputChange3} />
        <FormLabel>Last name</FormLabel>
        <Input placeholder='Last name' />
        <FormLabel>Password</FormLabel>


        <Input type="Password" value={password} onChange={handleInputChange2} placeholder='Password'/>
        <hr />
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Link to='/home'><Button colorScheme="teal" size="sm" onClick={RegisterFormSubmit}>
          
          Register 
        </Button>
          </Link>
        <span>&nbsp;&nbsp;
        <>or</>
        </span>
        </div>
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"center", paddingTop:"1%"}}>
        <HStack>
        <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
          Facebook
        </Button>
        <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
          Twitter
        </Button>
        <Button colorScheme='orange' leftIcon={<FaGoogle />}>
          Google
        </Button>
        </HStack>
        </div>
      </FormControl>
    </div>
    </div>
  );
}

export default Register;
