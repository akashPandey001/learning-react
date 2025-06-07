import { useState, useCallback, useEffect, useRef } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

if (numberAllowed) {
  str += "0123456789";
}
if (charAllowed) {
  str += "!@#%&*+_|{}[]()*?/";
}

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  const passwordRef = useRef(null)
 
  const copyToClipBoard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,11)
  },[password])

  return (
<div className="w-full max-w-md mx-auto mt-10 p-6 rounded-lg shadow-2xl bg-gray-800 text-orange-500 space-y-4">
<h1 className="text-2xl font-bold text-center text-white mb-4">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none w-full py-1 px-3 font-mono bg-white text-orange-700 text-xl"
          readOnly
          ref = {passwordRef}
          
        />
        <button onClick= {copyToClipBoard} className="outline-none bg-blue-700 text-white shadow-lg shrink-0 py-0.5 px-3">Copy</button>
      </div>
      <div className="flex items-center font-medium justify-between text-sm">
        <div className="flex item-center gap-x-1">
          <input type="range"
          min = {6}
          max = {100}
          value = {length}
          className="cursor-pointer font-medium text-shadow-amber-600 text-lg"
         onChange={(e) => setLength(parseInt(e.target.value))}

          />
           <label>Length:{length}</label>
        </div>
        <div className="flex item-center font-medium gap-x-1">
          <input type="checkbox" 
          defaultChecked = {numberAllowed}
          id="numberInput"
          onChange={()=>{setNumberAllowed((prev)=>
          !prev
          )}}
          />
            <label htmlFor="numberInputs">Numbers</label>
        </div>
          <div className="flex item-center font-medium gap-x-1">
          <input type="checkbox" 
          defaultChecked = {charAllowed}
          id="charInput"
          onChange={()=>{setCharAllowed((prev)=>
          !prev
          )}}
          />
            <label htmlFor="charInputs">characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
