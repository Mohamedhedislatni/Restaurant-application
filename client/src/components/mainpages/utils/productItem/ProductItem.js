 import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product , isAdmin, deleteProduct, handleCheck }) {

   return (
//          <div className="product_card">
//          {
//                 isAdmin && <input type="checkbox" checked={product.checked}
//                  onChange={() => handleCheck(product._id)} />
//             } 
//               <img src={product.images.url} alt=""  className="zoom-colonne"/> 

//             <div className="product_box">
//                  <h2 title={product.title}>{product.title}</h2>
//                  <p>{product.description}</p>
//                  <span>${product.price}</span>
//              </div>

            
//  <BtnRender product={product} deleteProduct={deleteProduct} /> 
//          </div>

<div className="body">

<section>
        <div className="card">
          <div className="box">
          {
               isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
           } 
            <div className="imgBx">
            <img src={product.images.url} alt=""/> 
            </div>
            <div className="contentBx">
              <div>
              <h2 title={product.title}>{product.title}</h2>
              <p>{product.description}</p>
               <span>{product.price}Dt</span>
               <BtnRender product={product} deleteProduct={deleteProduct} />
              </div>
              
            </div>
          </div>
        </div>
      </section>
</div>
  )
}

export default ProductItem


