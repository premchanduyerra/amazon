import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    src="https://www.websitestoimpress.com/blog/wp-content/uploads/2018/11/AmazonAdvertising._V280400344_.png"
                    alt=""
                    className="chectout_add" />
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">
                    This is basket</h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}

            </div>
            <div className="checkout_right">

                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
