import Portifolio from "../../../Components/Portifolio/index.jsx"

export default function MainPage() {
  return (
    <>
      <main>
        <Portifolio
          Avatar="/src/assets/avatar-pamcred/avatar-pamcred.jpg"
          AvatarAlt="Avatar da empresa Pamcred Soluções Financeiras"
          Name="Pamcred Soluções Financeiras"
          Bio="Minha bio de exemplo"
          Email="+55 (12) 12345-1234"
          Phone="emailexemplo@gmail.com"
          GithubURL="https://github.com/Guilherme-210/learn-react-with-vite/blob/main/src/pages/Exercicios/Exercicio-3/index.jsx"
          LinkedinURL="#"
          TwitterURL="#"
        />
      </main>
    </>
  )
}
