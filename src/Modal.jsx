import "./FormStyles.css";
export default function Modal({ isVisible, errorMessage = null, age=null }) {
  if (isVisible) {
    return (
      <div id="modal" style={{ fontSize: "7px", height: "100%" }}>
        <div id={age < 18 || age > 120 ? "modal-content-red" : "modal-content"}>
          {/* <h1>The Form Has Been Submitted Successfully</h1> */}
          <h1 style={{color: errorMessage ? "white" : "white"}}>
            {errorMessage
              ? errorMessage
              : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
