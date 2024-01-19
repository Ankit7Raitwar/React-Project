import { useState, useCallback, useEffect, useRef } from 'react'



function App() {

  // all parameter use in ui change
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook : it use to conect two componet or function
  const passwordRef = useRef(null)

  // useCallback : it is optimize solution it is store cache memory and use new paramiter
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  // it is a dependecy in useCallback fun. if change then change  pass
  }, [length, numberAllowed, charAllowed, setPassword])

  // ONclick function If click copy button then run 
  const copyPasswordToClipboard = useCallback(() => {
    // passwordRef: conect button and input text  if onclick fun. run then input text select();
    passwordRef.current?.select();
    // definde the range copy select
    passwordRef.current?.setSelectionRange(0, 999);
    // Window : is browser side methode to copy text
    window.navigator.clipboard.writeText(password)
  }, [password])


  // useEffect : it is used to call the function with some paramiter. if paramiter change then function run
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-2 py-3 my-8 bg-gray-800 text-orange-500 mt-6 ">
      <h1 className='text-white text-center my-4'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-6">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-5"
            placeholder="Password"
            readOnly
        // pass the ref to function and connect button element
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2 mb-6'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={4}
        max={20}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App