export default function Filho(props) {
   return (
      <div>
         <h1>Filho</h1>
         <button onClick={props.funcao}>Botao1</button>
         <button onClick={() => props.funcao("oiiii", "show", 29)}>Botao2</button>
      </div>
   )
};
