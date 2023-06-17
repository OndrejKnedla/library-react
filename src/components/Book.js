import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
    return (
        <div className="one-book">
            <img src={props.image} alt="" />
            <h2 className="main-heading">{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam architecto animi velit, nostrum impedit eum a 
                molestias hic odio error veritatis, dignissimos vel modi, 
                perspiciatis odit commodi quae libero sint?</p>
            <OrderButton/>
        </div>
    )
}

export default Book