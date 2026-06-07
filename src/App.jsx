import { useState, useCallback, useEffect, useRef } from "react"
import { Layout } from "./components/Layout"

function PasswordGenerator() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)
  const copyTimerRef = useRef(null)

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numberAllowed) chars += "0123456789"
    if (specialCharAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-="

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

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
    }
  }, [])

  const copyToClipboard = async () => {
    if (!password) return
    try {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
      copyTimerRef.current = setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard blocked without secure context
    }
  }

  return (
    <div className="flex flex-1 items-center justify-center py-8">
      <section
        className="w-full max-w-md rounded-xl bg-zinc-900 p-6 shadow-lg space-y-5"
        aria-labelledby="generator-heading"
      >
        <h1 id="generator-heading" className="sr-only">
          Password Generator
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value={password}
            placeholder="your password"
            aria-label="Generated password"
            className="flex-1 min-w-0 bg-zinc-800 text-orange-400 px-3 py-2 rounded outline-none font-mono text-sm"
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
          <label htmlFor="length-slider" className="text-sm text-zinc-300 flex justify-between">
            <span>Length</span>
            <span>{length}</span>
          </label>
          <input
            id="length-slider"
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
      </section>
    </div>
  )
}

function App() {
  return (
    <Layout>
      <PasswordGenerator />
    </Layout>
  )
}

export default App
