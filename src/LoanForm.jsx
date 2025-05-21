import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";
import MyComponent from "./MyComponent";
import { LoanInputContexts } from "./contexts/LoanFormInputContext";
import { UserContext } from "react";
import { useContext } from "./contexts/UserContext";


export default function LoanForm() {

  const userData = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const initialName = userData.name;
  const [loanInput, setLoanInput] = useState({
    name: initialName,
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault(); 
    setErrorMessage(null);
    const { age, phoneNumber } = loanInput;
    if (age < 18 || age > 100) {
      setErrorMessage("THE AGE IS NOT ALLOWED");
      setShowModal(true);
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("THE PHONE NUMBER IS NOT ALLOWED");
    }
    setShowModal(true);
  }

  const btnIsDisabled =
    loanInput.name == "" || loanInput.phoneNumber == "" || loanInput.age == "";

  function handleDiverClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  function handlePhoneNumberInputChange(value) {
    setLoanInput({ ...loanInput, phoneNumber: value });
  }

  function handleNameInputChange(value) {
    setLoanInput({ ...loanInput, name: value });
  }

  function handleAgeInputChange(value) {
    setLoanInput({ ...loanInput, age: value });
  }

  return (
    <div
      onClick={handleDiverClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <h1 style={{ color: "white" }}>Hello world {userData.name}</h1>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr />
        <MyComponent />
        <LoanInputContexts.Provider
          value={{
            value: loanInput.name,
            handleChange: handleNameInputChange,
            labelTitle: "Name",
          }}
        >
          <MyComponent />
          <LoanInputContexts.Provider
            value={{
              value: loanInput.phoneNumber,
              handleChange: handlePhoneNumberInputChange,
              labelTitle: "Phone Number",
            }}
          >
            <MyComponent />
          </LoanInputContexts.Provider>

          <LoanInputContexts.Provider
            value={{
              value: loanInput.age,
              handleChange: handleAgeInputChange,
              labelTitle: "Age",
            }}
          >
            <MyComponent />
          </LoanInputContexts.Provider>
        </LoanInputContexts.Provider>
        5<label style={{ marginTop: "30px" }}>Are you an employee?:</label>
        <input
          type="checkbox"
          value={loanInput}
          onChange={(event) => {
            setLoanInput({ ...loanInput, isEmployee: event.target.checked });
          }}
        />
        <label>Salary</label>
        <select
          value={loanInput.salaryRange}
          onChange={(event) =>
            setLoanInput({ ...loanInput, salaryRange: event.target.value })
          }
        >
          <option>Less then 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000$</option>
        </select>
        <button
          className={btnIsDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
          disabled={btnIsDisabled}
          id="submit-loan-btn"
        >
          submit
        </button>
      </form>

      <Modal
        errorMessage={errorMessage}
        isVisible={showModal}
        age={loanInput.age}
      />
    </div>
  );
}
