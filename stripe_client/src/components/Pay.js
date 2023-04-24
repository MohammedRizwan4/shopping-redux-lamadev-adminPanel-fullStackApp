import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY = "pk_test_51MEvr9SAD5fCbF42fx0tWu3VrDhpHL5hYcrwVELVrvchzVHAUmcJaIScFR92skBDjYJxpHF79erS3VuiFgLcFbQU005zviLzo6";

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {

        const makeRequest = async (token) => {
            const body = {
                tokenId: stripeToken.id,
                amount: 2000
            }
            const header = {
                "Content-Type": "application/json"
            }
            return await fetch(`http://localhost:5000/api/checkout/payment`, {
                method: "POST",
                headers: header,
                body: JSON.stringify(body)
            }).then(response => {
                console.log(response)
            })
                .catch(err => console.log(err))
        }

        stripeToken && makeRequest()
    }, [stripeToken]);

    return (
        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <StripeCheckout
                name="Lama Shop"
                image="https://lh3.googleusercontent.com/ogw/AOh-ky1cMNAJwKhzyvT8GLSoDZWnFbteMXFL6rkVGwYMIA=s64-c-mo"
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        "width": 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "Pointer"
                    }}>Pay Now</button></StripeCheckout>
        </div>
    );
}

export default Pay;
