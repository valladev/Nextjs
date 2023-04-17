export default function numeroDisplay(props) {
   return (
      <div style={{
         display: "flex",
         justifyContent: "center",
         margin: "10px",
         alignItems: "center",
         height: "100px",
         width: "100px",
         borderRadius: "100px",
         background: "#222",
         color: "#fff",
         fontSize: "2rem"
      }}>
         {props.numero}
      </div>
   )
}