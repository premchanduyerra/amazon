import React from 'react'
import './CheckoutProduct.css'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: actionTypes.REMOVE_TO_BASKET,
            id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))
                    }
                </div>
                {
                    !hideButton && (<button
                        onClick={removeFromBasket}
                    >remove from basket</button>)
                }

            </div>
        </div>
    )
}

export default CheckoutProduct
