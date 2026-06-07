import { useState, useCallback, useEffect } from "react"
import { Layout } from "./components/Layout"

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)

  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

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
      const randomIndex = Math.floor(Math.random() * chars.length)
      generatedPassword += chars[randomIndex]
    }
    setPassword(generatedPassword)
    setCopied(false)
       

  }, [length, numberAllowed, specialCharAllowed])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const copyToClipboard = async () => {
    if (!password) return
    try {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard api blocked on some browsers without https
    }
  }

  return (
    <Layout>
    <div className="flex flex-1 items-center justify-center py-8">
      <div className="w-full max-w-md bg-zinc-900 rounded-xl shadow-lg p-6 space-y-5">
        <h1 className="text-white text-center text-2xl font-semibold">
          Password Generator
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="your password"
            className="flex-1 bg-zinc-800 text-orange-400 px-3 py-2 rounded outline-none"
          />
          <button
            type="button"
            onClick={copyToClipboard}
            className="bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-2 rounded text-sm shrink-0"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-zinc-300 flex justify-between">
            <span>Length</span>
            <span>{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-orange-500"
          />
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            Numbers
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={specialCharAllowed}
              onChange={() => setSpecialCharAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            Symbols
          </label>
        </div>

        <button
          type="button"
          onClick={generatePassword}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition-colors"
        >
          Generate
        </button>
      </div>
    </div>
    </Layout>
  )
}

export default App
