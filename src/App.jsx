import { useState, useCallback } from "react";


 

function App() {
 const [length, setLength] = useState(10);
 const [numberAllowed, setNumberAllowed] =useState(false);
 const [specialCharAllowed, setSpecialCharAllowed] =useState(false);

 const [password, setPassword] = useState('');

 const generatePassword = useCallback( () => {}, [length,numberAllowed, specialCharAllowed, setPassword ] )  

  return (
    <>
     <h1 className="text-white text-center text-4xl">Safdar's Password Generator</h1>
    </>
  )
} 
 
export default App
