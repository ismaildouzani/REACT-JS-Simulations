import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import LoanForm from "./LoanForm";
import { UserContext } from "./contexts/UserContext";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <UserContext.Provider 
    value= {{userName: "ismail", name: "ismail", email: ""}}
      >

      <div className="App" style={{marginTop: "50px"}}>
        <LoanForm />
      </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
