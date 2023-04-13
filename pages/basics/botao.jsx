function click() {
   console.log('click')
}

export default function botao() {
   function click2() {
      console.log("click2")
   }

   function evento(e) {
      console.log(e)
   }

   return (
      <div>
         <button 
            style={{border: "1px solid #ffff", padding: "10px", margin: "10px", cursor: "pointer"}}
            onClick={click}>
            click
         </button>

         <button 
            style={{border: "1px solid #ffff", padding: "10px", margin: "10px", cursor: "pointer"}}
            onClick={click2}>
            click2
         </button>

         <button 
            style={{border: "1px solid #ffff", padding: "10px", margin: "10px", cursor: "pointer"}}
            onClick={function() {
               console.log("click3")
            }}>
            click3
         </button>

         <button 
            style={{border: "1px solid #ffff", padding: "10px", margin: "10px", cursor: "pointer"}}
            onClick={() => console.log("click4")}>
            click4
         </button>

         <button 
            style={{border: "1px solid #ffff", padding: "10px", margin: "10px", cursor: "pointer"}}
            onClick={evento}>
            click5
         </button>

         <button 
            style={{border: "1px solid #ffff", padding: "10px", margin: "10px", cursor: "pointer"}}
            onClick={e => console.log(e.altKey)}>
            clickV2
         </button>

         <div>
            <input
               style={{border: "1px solid #ffff", padding: "10px", margin: "10px", cursor: "pointer"}}
               type="text" 
               onChange={e => console.log(e.target.value)}>
            </input>
         </div>

      </div>
   )
   
};
