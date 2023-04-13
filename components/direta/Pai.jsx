import Filho from "./Filho"

export default function pai(props) {
   return (
      <div>
         <Filho nome={"Joao"} familia={props.familia}/>
         <Filho {...props} nome={"Joana"} />
      </div>
   )
};
