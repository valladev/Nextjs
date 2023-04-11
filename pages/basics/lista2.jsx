function addSpan() {
   const list = [
      <span>1</span>,
      <span>2</span>,
      <span>3</span>,
      <span>4</span>,
      <span>5</span>,
      <span>6</span>,
      <span>7</span>
   ]
   return list
}

export default function lista2() {
   return (
      <div>
         {addSpan()}
      </div>
   )
};
