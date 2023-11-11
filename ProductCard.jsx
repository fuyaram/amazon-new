import React from 'react';
import './ProductCard.css'; // You can create a separate CSS file for styling

const ProductCard = () => {
  return (
<>

<section style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }} className='oja'>
        <div className="product-card">
    <div className="badge">Hot</div>
    <div className="product-tumb">
      <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
    </div>
    <div className="product-details">
      <span className="product-catagory">Women,bag</span>
      <h4><a className='ui' href="">Women leather bag</a></h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
      <div className="product-bottom-details">
        <div className="product-price"><small>$96.00</small>$230.99</div>
        <div className="product-links">
          <a className='ui' href=""><i className="fa fa-heart"></i></a>
          <a className='ui' href=""><i className="fa fa-shopping-cart"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className="product-card">
    <div className="badge">Hot</div>
    <div className="product-tumb">
      <img src="https://i.pinimg.com/564x/5a/1e/86/5a1e86e1bd6ba371916bb9906ef5ec11.jpg" alt="" />
    </div>
    <div className="product-details">
      <span className="product-catagory">Women,bag</span>
      <h4><a className='ui' href="">Women leather bag</a></h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
      <div className="product-bottom-details">
        <div className="product-price"><small>$96.00</small>$230.99</div>
        <div className="product-links">
          <a className='ui' href=""><i className="fa fa-heart"></i></a>
          <a className='ui' href=""><i className="fa fa-shopping-cart"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className="product-card">
    <div className="badge">Hot</div>
    <div className="product-tumb">
      <img src="https://smallimg.pngkey.com/png/small/305-3056677_211944-aa61g-1000-001-web-doublehero-gucci-black.png" alt="" />
    </div>
    <div className="product-details">
      <span className="product-catagory">Women,bag</span>
      <h4><a className='ui' href="">Women leather bag</a></h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
      <div className="product-bottom-details">
        <div className="product-price"><small>$96.00</small>$230.99</div>
        <div className="product-links">
          <a className='ui' href=""><i className="fa fa-heart"></i></a>
          <a className='ui' href=""><i className="fa fa-shopping-cart"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className="product-card">
    <div className="badge">Hot</div>
    <div className="product-tumb">
      <img src="https://smallimg.pngkey.com/png/small/542-5425179_gucci-handbag-png-vector-transparent-download-gucci-guccissima.png" alt="" />
    </div>
    <div className="product-details">
      <span className="product-catagory">Women,bag</span>
      <h4><a className='ui' href="">Women leather bag</a></h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
      <div className="product-bottom-details">
        <div className="product-price"><small>$96.00</small>$230.99</div>
        <div className="product-links">
          <a className='ui' href=""><i className="fa fa-heart"></i></a>
          <a className='ui' href=""><i className="fa fa-shopping-cart"></i></a>
        </div>
      </div>
    </div>
  </div>
        </div>
    </section>

</>
  
  );
};

export default ProductCard;
