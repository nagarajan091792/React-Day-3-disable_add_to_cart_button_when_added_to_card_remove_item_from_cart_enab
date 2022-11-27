import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Pricingcard";
import Title from "./title"
import { useState } from "react";

function App() {
  
  let addToCart  = (product)=>{
    setCartItems([...cartItems,product])
  }
  let removeFromCart = (product)=>{
    const indexVal = cartItems.findIndex(obj=>obj.id===product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems])
  }
  const [products,setProducts]=useState(
    [
      { 
        id :1,
        img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1657765696139/ee9431e6452f96b860a10c9dc0aeaacc.png',
        name : 'Vivo T1x',
        storage : '4GB + 64GB',
        price : 11999,
       
        realPrice:'₹16,990.00',
        off:'29% OFF'
        
      },{ 
        id :2,
        img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1641264341555/0787386c60d0b0fdc1f63fdb1f58c37b.png',
        name : 'Vivo V23 Pro',
        storage : '12GB + 256GB',
        price : 43990,
       
        realPrice:'₹45,990.00',
        off:'4% OFF'

        
        
      },{ 
        id :3,
        img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1651894681581/aec8b54195865235ae9b1b9a83bb01bb.png',
        name : 'Vivo X80 Pro',
        storage : '12GB + 256GB',
        price : 79999,
       
        realPrice:'₹86,999.00',
        off:'8% OFF'

       
        
      },{ 
        id :4,
        img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1660563273753/1d426c79ed0e3f2c70482fcbf8915d00.png',
        name : 'Vivo Y35',
        storage : '8GB + 128GB',
        price : 18499,
       
        realPrice:'₹22,999.00',
        off:'19% OFF'
        

       
        
      },{ 
        id :5,
        img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1624505394290/e20250801f0bb5a206e95c7a14da1e8f.png',
        name : 'Vivo V21e',
        storage : '8GB + 128GB',
        price : 23990,
       
        realPrice:'₹27,990.00',
        off:'14% OFF'
        
      },{ 
        id :6,
        img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1643352967712/affa1740874f74be66fbfd8268777893.png',
        name : 'Vivo T1 44W',
        storage : '4GB + 128GB',
        price : 14499,
       
        realPrice:'₹19,990.00',
        off:'27% OFF'

        
        
      },{ 
        id :7,
        img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1663840989894/496ff8b0a9e1b18d0063d858b28a2e1a.png',
        name : 'Vivo Y16',
        storage : '3GB + 32GB',
        price : 9999,
       
        realPrice:'₹13,990.00',
        off:'28% OFF'
        
      },{ 
        id :8,img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1650440287317/a06d9eab049e6da645a81661fa66d1d5.png',
        name : 'Vivo T1 Pro 5G',
        storage : '8GB + 128GB',
        price : 24999,
       
        realPrice:'₹30,990.00',
        off:'19% OFF'

        
      },{ 
        id :9,img:'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1649902748402/3acf97f6e15af012921edf5ebdec32d5.png',

        name : 'Vivo Y01',
        storage : '2GB + 32GB',
        price : 7999,
       
        realPrice:'₹12,999.00',
        off:'38% OFF'
        
      },
      
      
    ]
  )
  const [cartItems,setCartItems]=useState([])

  return (
    <div><header class="bg-dark py-1">
    <div class="container px-3 px-lg-5 my-3">
        <div class="text-center text-white">
            <h1 class="display-6 fw-bolder">VIVO E-Store</h1>
            <p class="lead fw-normal text-white-50 mb-0">
 Vivo (T Series X Series V Series Y Series) </p>
        </div>
    </div>
</header>

    <div className="container">
      
      <div className="row">
        <div className="col-lg-8 ">
          <div className="row">
            {
              products.map((product,index) =>{
                return <Card key={index} product={product} addToCart={addToCart} cartItems={cartItems}/>
              })
            }
          
           
           
          </div>
        </div>
        <div className="col-lg-4">
          <Title cartItems={cartItems} removeFromCart={removeFromCart}></Title>
        </div>
      </div>
    </div></div>
  );
}
export default App;
