import React, { useContext, useEffect, useState } from 'react';
import "./MyOrder.css";
import { StoreContext } from '../../context/StoreContextProvider';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrder = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async(req,res) =>{
        const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}})
        setData(response.data.data);
        //console.log(response.data.data);
    }

    useEffect(()=>{
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders'>
        <h2>My orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel_icon}/>
                        <p>{order.item.map((item,index)=>{
                            if(index === order.item.length-1){
                                return item.name+"X"+item.quantity
                            }
                            else{
                                return item.name+"X"+item.quantity+ ","
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items :{order.item.length}</p>
                    </div>
                )
            })}
        </div>

      
    </div>
  )
}

export default MyOrder
