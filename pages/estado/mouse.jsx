import { useState } from "react"

export default function mouse() {
   const [x, setX] = useState(0)
   const [y, setY] = useState(0)

   // const arrayY = useState(0)
   // let y = arrayY
   // const alterarY = arrayY[1]

   const estilo = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItens: "center",
      backgroundColor: "#222",
      color: "#fff",
      height: "100vh"
   }

   function quandoMover(ev) {
      setX(ev.clientX)
      setY(ev.clientY)
   }

   return (
      <div style={estilo} onMouseMove={quandoMover}>
         <span>Eixo X: {x}</span>
         <span>Eixo Y: {y}</span>
      </div>
   )
};
