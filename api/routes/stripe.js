const router = require('express').Router();
const stripe = require('stripe')('sk_test_51MG5mMSAjIDYdsb42ais3kMYuPNI1Rm8mtXndywsF77nujsxeKbOO0geDGj880pk91FLXURfg1xRcSXrjcTtOFdp008mcdMrbL')

router.post("/payment", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000',
        cancel_url: 'http://localhost:3000/cart',
    });

    res.json({ url: session.url })
});

module.exports = router;

