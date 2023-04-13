import If from "../../components/If";

export default function condicional2() {
   const numero = 5
   return (
      <div>
         <If numero={numero % 2 === 0}><h1>O numero {numero} é par</h1></If>
         <If numero={numero % 2 === 1}><h1>O numero {numero} é impar</h1></If>
      </div>
   )
};
