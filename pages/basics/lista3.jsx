function addSpan(final) {
   const list = []
   for(let i = 1; i <=final; i++) {
      list.push(<span>{i},</span>)
   }
   return list
}

export default function lista3() {
   return (
      <div>
         {addSpan(10)}
      </div>
   )
};
