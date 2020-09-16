import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';
function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();
    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.email)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
            console.log(orders);
        }
        else {
            setOrders([])
        }

    }, [user])
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_order">
                {
                    orders?.map(order => (
                        <Order order={order} />
                    ))
                }

            </div>
        </div>
    )
}

export default Orders
