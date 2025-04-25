import InputName from "../../../Components/FormComponents/InputName/index.jsx"
import InputEmail from "../../../Components/FormComponents/InputEmail/index.jsx"
import InputPassword from "../../../Components/FormComponents/InputSenhas/index.jsx"
import ValidatePassword from "../../../Components/FormComponents/InputSenhas/ValidatePassword.jsx"
import "./style.css"

export default function FormPage() {
  return (
    <>
      <main>
        <h1>Mokado Form in React</h1>
        <form className="Form">
          <InputName InputId="name" inputLabel="Name" Obrigatory="true" />
          <InputEmail InputId="email" inputLabel="Email" Obrigatory={true} />
          <InputPassword InputId="Password" inputLabel="Password" />
          <ValidatePassword
            InputId="ValidatePassword"
            inputLabel="Validate Password"
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}
