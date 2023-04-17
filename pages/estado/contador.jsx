import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function Contador() {

   const estilo = {
      width: "100vh",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      fontSize: "30px",

   }

   const buttons = {
      width: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   }

   const [numero, setNumero] = useState(0)
   const ClickUp = () => setNumero(numero + 1)
   const ClickDown = () => setNumero(numero - 1)

   return (
      <>
         <div style={estilo}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero}/>
         </div>
         <div style={buttons}>
            <button style={{margin: "10px", 
               border: "none", 
               borderRadius: "100px", 
               fontSize: "40px"}} 
               onClick={ClickDown}>
               -
            </button>

            <button style={{margin: "10px", 
               border: "none", 
               borderRadius: "100px", 
               fontSize: "40px"}} 
               onClick={ClickUp}>
               +
            </button>
         </div>
      </>
   )
}