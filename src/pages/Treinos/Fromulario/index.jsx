import InputName from "../../../Components/FormComponents/InputName/index.jsx"
import InputEmail from "../../../Components/FormComponents/InputEmail/index.jsx"
import InputPhone from "../../../Components/FormComponents/InputPhone/index.jsx"
import InputBirth from "../../../Components/FormComponents/InputBirth/index.jsx"
import InputPassword from "../../../Components/FormComponents/InputSenhas/InputPassword.jsx"
import ValidatePassword from "../../../Components/FormComponents/InputSenhas/ValidatePassword.jsx"
import "./style.css"
import Button from "../../../Components/ComponentsButtons/Button/index.jsx"

export default function FormPage() {
  return (
    <>
      <main>
        <h1>Mokado Form in React</h1>
        <form className="Form">
          <InputName InputId="name" inputLabel="Name" Obrigatory={null} />

          <InputEmail InputId="email" inputLabel="Email" Obrigatory={true} />

          <InputPhone InputId="phone" inputLabel="Phone" Obrigatory={true} />

          <InputBirth
            InputId="birth"
            inputLabel="Date of birth"
            Obrigatory={true}
          />

          <InputPassword
            InputId="Password"
            inputLabel="Password"
            minLength="8"
          />

          <ValidatePassword
            InputId="ValidatePassword"
            inputLabel="Validate Password"
            minLength="8"
          />

          <Button
            Title="submmit"
            Id="submmit"
            Content="submmit"
            Type="submmit"
            ClassName="LinkButton"
          />
        </form>
      </main>
    </>
  )
}
