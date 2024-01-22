import {  useSelector,useDispatch} from "react-redux";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./Product.css"

function ProductsUi(){
    const [itemname,setitemname] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userdata = useSelector(store=>store.Userdata.data)
        console.log(userdata)
    const CartUserdata = useSelector(store=>store.Userdata.cartData)
    const [totalcart, setTotalcart] = useState("");
    useEffect(()=>{
        setTotalcart(CartUserdata.length)
    },[CartUserdata])
    console.log("CartUserdata",CartUserdata)
     const Addtocart = (event,id)=>{
        event.stopPropagation()
        const finditem = ((userdata) && userdata.find((item)=>item.id==id))
        console.log("id",id,finditem)
        dispatch({
            type:"addCart",
            payload:{
                data:[...CartUserdata,finditem]
            }
        })
     } 
     const managecart=()=>{
        setTotalcart("")
        navigate("/cart")
     }
    return<div>
        <div className="Searchdiv">
            <div  className="Searchdiv1">
                <div style={{width:"35%"}} className="E-com">E-COMMERCE</div>
                <div style={{width:"75%"}}>
                    <input type="Search" onChange={(e)=>setitemname(e.target.value)} placeholder="Search.."></input>
                </div>
            </div>
            <div className="Searchdiv2">
                <div className="E-com">LogIn </div>
                <div className="E-com"> <i  className="fa-solid fa-cart-shopping" onClick={()=>managecart()}>{CartUserdata && CartUserdata.length>0 && <span className="cartSpan">{totalcart}</span>}</i>Cart</div>
            </div>
        </div>
        <div className="container-fluid mb-3  w-100">
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2dc3aafcc8afbaf8.jpg?q=20"  width="100%" alt="ecomerce"></img>
                </Carousel.Item  >
                <Carousel.Item>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b91142ce378acb54.jpg?q=20"  width="100%" alt="ecomerce"></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dd7f425c6a2fa49a.jpg?q=20"  width="100%" alt="ecomerce"></img>
                </Carousel.Item >
            </Carousel>
        </div>
        <div className="mainItemCOntainer">
          {userdata && userdata.map((item)=>{
                if((itemname ==='' || item.title.toString().toLowerCase().includes(itemname.toLowerCase()))){
                    return<div key={item.id} className="itemContainer" onClick={()=>navigate(`/product/${item.id}`)}>
                    <img src={item.images[0]} height="250px" width="100%" alt="itemImage"></img>
                    <div> Title: {item.title}</div>
                    <div> Price: {item.price}</div>
                    <div>Discount: {item.discountPercentage}%</div>
                    <button className="adbtn" onClick={(event)=>Addtocart(event,item.id)}>Add to cart</button>
                </div>
                } 
                return null
            })}
            {userdata && userdata.filter((item)=>{
                return ((itemname ==='' || item.title.toString().toLowerCase().includes(itemname.toLowerCase()))) 
            }).length===0 &&(
                <div>Note found</div>
            )}
        </div>
    </div>
}
export default ProductsUi;