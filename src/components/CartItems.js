import { Link } from "react-router-dom";
import "./Product.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
function CartItems(){
    const dispatch = useDispatch();
    const [totalPrice,settotalPrice] = useState("");
    const [totalItem,settotalItem] = useState("");
    const CartUserdata = useSelector(store=>store.Userdata.cartData)
    // console.log(CartUserdata)
    useEffect(()=>{
        let p = 0;
        let q = 0;
        if(CartUserdata){
            for(let i=0;i<CartUserdata.length;i++){
                q += 1;
                p += CartUserdata[i].price;
            }
        }
        settotalPrice(p);
        settotalItem(q);
    },[CartUserdata])
    const delItem =(event,index)=>{
        event.stopPropagation()
        const filterItem = CartUserdata.filter((item,indx)=>{
            return index !== indx})
        dispatch({
            type:"delItem",
            payload:{
                data:filterItem
            }
        })
        console.log(filterItem)
    }
    return <div>
        <div className="Homelink">
            <Link className="link" to="/">Home</Link>
        </div>
        <div className="mainItemCOntainerCart">
        {
            CartUserdata.map((item,index)=>
            <div key={index} className="itemContainer">
                <img src={item.images[0]} height="250px" width="100%" alt="itemImage"></img>
                    <div> Title: {item.title}</div>
                    <div> Price: {item.price}</div>
                    <div>Discount: {item.discountPercentage}%</div>
                    <button className="adbtn" onClick={(event)=>delItem(event,index)}>Remove</button>
            </div>)
        }
        </div>
        { CartUserdata && CartUserdata.length>0 && <div className="resultdiv">
            <div>Total Item: {totalItem} </div>
            <div> Total Price: {totalPrice}</div>
        </div>}
    </div>
}
export default CartItems;