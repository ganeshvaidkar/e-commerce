import { useSelector } from "react-redux";
import "./Product.css"
import { useParams, Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";


function ProductDetails() {
    const userdata = useSelector(store => store.Userdata.data);
    // console.log(userdata)
    const { productId } = useParams();
    const productInfo = ((userdata) && userdata.find((item) => item.id == productId))
    // console.log(productInfo)
    return <div>
        <div className="Homelink"><Link className="link" to="/">Home</Link>
            <Link className="link" to="/cart">CartDetails</Link>
        </div>
        <div className="mainItemDetailsDiv">
            <div className="itemDetailCon">
                <div className="itemDetailcard">
                    <Carousel>
                        {productInfo && productInfo.images.map((curELe, ind) => {
                            return <Carousel.Item interval={1500} key={ind + "index"}>
                                <div >
                                    <img src={curELe} alt="productss" height="350px" width="100%"></img>
                                </div>
                            </Carousel.Item>
                        })}

                    </Carousel>
                    {productInfo && <div>
                        <div> Title: {productInfo.title}</div>
                        <div> Price: {productInfo.price}</div>
                        <div>Discount :{productInfo.discountPercentage}%</div>
                    </div>}
                </div>
            </div>
            <div className="itdetailSecondDiv">
                {productInfo && <div>
                    <div> Category: {productInfo.category}</div>
                    <div> Brand: {productInfo.brand}</div>
                    <div>Discription :{productInfo.description}</div>
                    <div>Rating: {productInfo.rating}</div>
                    <div>Stock: {productInfo.stock}</div>
                </div>}
            </div>
        </div>


    </div>
}
export default ProductDetails;
