import React from 'react'
import './cart.css'
const Cart = (props) => {


  
    return (
        <div className={`containerr bg-${props.mode}`}>
            <div className="box">
                <div className={`item bg-${props.mode == 'dark' ? 'dark' : 'light'}`}>
                    <div className={`product bg-${props.mode == 'dark' ? 'dark' : 'light'}`}>
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                {/* <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div> */}
                {/* <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div>
                <div className="item">
                    <div class="product">
                        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70" alt="" />
                        <h3>Product 1</h3>
                        <p>Price: $10</p>
                        <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
                    </div>
                </div> */}
            </div>

            

        </div>
    )
}

export default Cart
