import react, { useState } from 'react';

function OnChange(){
    
    const [name, setName] = useState("guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [shipping, setShipping] = useState("");

    let handleNameChange = (event) =>{
        setName(event.target.value);
    };

    let handleQuantityChange = (event) =>{
        setQuantity(event.target.value);
    };

    let handleCommentChange = (event) =>{
        setComment(event.target.value);
    };

    let handlePaymentMethodChange = (event) =>{
        setPaymentMethod(event.target.value);
    };
        
    let handleShippingChange = (event) =>{
        setShipping(event.target.value);
    };

    return(
        <>
         <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your delivery instructions..."/>
            <p>Comment: {comment}</p>

            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="">Select an option</option>
                <option value="credit card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="Gpay">Gpay</option>
                <option value="cash on delivery">Cash on Delivery</option>
            </select>
            <p>Payment Method: {paymentMethod}</p>

            <label>
                <input type="radio" value="Pick up"
                        checked={shipping === "Pick up"} 
                        onChange={handleShippingChange}
                        />
                Pick up
            </label><br/>
            <label>
                <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"} 
                        onChange={handleShippingChange}
                        />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

         </div>
        </>
    );

}

export default OnChange;