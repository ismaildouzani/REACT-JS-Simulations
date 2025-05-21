import MyInput from "./myInput";
export default function MyComponent({
  valueComponent,
  handleChangeComponent,
  inputName,
}) {
  return (
    <>
      <h1>This is header of the Component</h1>
      <MyInput
        inputName={inputName}
        handleChange={handleChangeComponent}
        value={valueComponent}
      />
      <h1>This is footer of the Component</h1>
    </>
  );
}
