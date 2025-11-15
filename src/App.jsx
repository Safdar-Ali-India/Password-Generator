import { useState, useCallback } from "react"

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)

  const [password, setPassword] = useState("")

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) {
      chars += "0123456789"
    }
    if (specialCharAllowed) {
      chars += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    }
   
    let generatedPassword = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length + 1)
      generatedPassword += chars[randomIndex]
    }
    setPassword(generatedPassword)
    

  }, [length, numberAllowed, specialCharAllowed, setPassword])

  return (
    <>
      <h1 className="text-white text-center text-4xl">Safdar's Password Generator</h1>
    </>
  )
}

export default App
