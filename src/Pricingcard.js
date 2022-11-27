

function Card({product,addToCart,cartItems}) {
  return (
    <div class="col-lg-4 " style={{marginTop:15+"px"}}>
    
       <div class="card text-center" >
             <img src={product.img}></img>
             <div class="card-body">
             <h3 class="card-title">{product.name}</h3>
             
             <div class="text-muted">{product.storage}</div>
             <h5 class="text">₹{product.price}.00</h5>
             <h6 ><span class="text-muted text-decoration-line-through">{product.realPrice}</span> <span class="off">{product.off}</span></h6>
             </div>                      
             <div class="card-footer">
             <button disabled={cartItems.some(obj=>obj.id===product.id)} onClick={()=>addToCart(product)} className="btn btn-primary">{cartItems.some(obj=>obj.id===product.id)?"Added to Cart":"Add to Cart"}</button>
            </div></div></div>
  );
}
export default Card;