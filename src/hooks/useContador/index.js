import { useState } from "react"

export default function useContador(valorInicial = 0) {
  const [contadorCustom, setContador] = useState(valorInicial)

  const incrementarCustom = () => setContador((prev) => prev + 1)
  const decrementarCustom = () => setContador((prev) => prev - 1)
  const resetarCustom = () => setContador(valorInicial)

  return { contadorCustom, incrementarCustom, decrementarCustom, resetarCustom }
}
