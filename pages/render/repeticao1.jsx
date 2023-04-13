export default function repeticao1() {
   const listaAprovados = [
      "Joao",
      "Lucas",
      "Ana",
      "Barboza",
   ]

   function renderizarLista() {
      return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
   }

   return (
      <ul>
         {renderizarLista()}
      </ul>
   )
};



// for (let i = 0; i < listaAprovados.lenght; i++) {
//    itens.push(<li>{listaAprovados[i]}</li>)
//    console.log("oi")
// }
// return itens