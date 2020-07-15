import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripeBtn = () => {
    // Create a variable to hold our publishable key which you can get from Stripe dashboard. This is not a secret and does not need to be placed in an .env file......
    const publishableKey = "pk_test_ZU3mlTy0q00DATc9EyF9A8jX";
    // onToken sends the card info to Stripe and returns a token object 
    const onToken = token => {
        const body = {
            amount: 999,
            token: token
        };

        axios
            .post("http://localhost:8000/payment", body)
            .then(response => {
                console.log(response);
                alert("Payment Success");
            })
            .catch(error => {
                console.log("Payment Error: ", error);
                alert("Payment Error");
            });
    };
    return (
        <StripeCheckout
            label="Go Premium" //Component button text
            name="Business LLC" //Modal Header
            description="Upgrade to a premium account today."
            panelLabel="Go Premium" //Submit a buttin in modal
            amount={999} //Amount in cents $9.99
            token={onToken}
            stripeKey={publishableKey}
            image="https://www.vidhub.co" //Pop-in header image
            billingAddress={false}
        />
    );
};

export default stripeBtn;