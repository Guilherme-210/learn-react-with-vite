import InputName from "../../../Components/FormComponents/InputName/index.jsx"
import InputEmail from "../../../Components/FormComponents/InputEmail/index.jsx"
import "./style.css"

export default function FormPage() {
  return (
    <>
      <main>
        <h1>Formulario Mokado no React</h1>
        <form className="Form">
          <InputName
            InputId="name"
            InputText="Name"
            Obrigatory="true"
            PlaceHolder="Digite o seu nome"
          />
          <InputEmail
            InputId="email"
            InputText="Email"
            Obrigatory={true}
            PlaceHolder="Digite o seu e-mail"
          />
        </form>
      </main>
    </>
  )
}
