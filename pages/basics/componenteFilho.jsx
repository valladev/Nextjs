import Item from '../../components/Item'
import Lista from '../../components/Lista'

export default function componenteFilho() {
   return (
      <div>
         <Lista>
            <Item conteudo="Item #01"/>
            <Item conteudo="Item #02"/>
            <Item conteudo="Item #03"/>
            <Item conteudo="Item #04"/>
         </Lista>
      </div>
   )
};
