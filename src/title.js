function Title({cartItems,removeFromCart}) {
  return (
    <>
    <h3>Cart</h3>
    {
      cartItems.length ===0 ? <div>No Items in Cart</div> : 
      <>
      <ol className="list-group list-group-numbered">
      {
        cartItems.map((item,index)=>{
          return  <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
          <div className=" me-auto">
            <div className="fw-bold">{item.name}</div>
            {item.price}
          </div>
          <button onClick={()=>{removeFromCart(item)}} className="badge bg-primary rounded-pill">x</button>
        </li>
        })
      }
   
    
  </ol>
  <h3>
    
    Total Rs. {
    cartItems.reduce((start,end)=>{
      return start = start+end.price

    },0)
    
    }

  </h3>
  </>
    }
    
  </>
  );
}
export default Title;
