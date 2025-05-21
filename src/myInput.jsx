import { useContext } from "react";
import { LoanInputContexts } from "./contexts/LoanFormInputContext";
import { UserContext } from "./contexts/UserContext";

export default function MyInput() {
  const inputContext = useContext(LoanInputContexts);
  const userData = useContext(UserContext);

  return (
    <div>
      <label>
        {userData.name} {inputContext.labelTitle}
      </label>
      <input
        value={inputContext.value}
        onChange={(event) => {
          inputContext.handleChange(event.target.value);
        }}
      />
    </div>
  );
}
