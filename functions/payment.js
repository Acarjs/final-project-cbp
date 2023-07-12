//domain/.netlify/functions/payment

//1
require('dotenv').config()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shippingFee, totalAmount } = JSON.parse(event.body)

    const calculateOrderAmount = () => {
      return shippingFee + totalAmount
    }

    //2
    try {
      // this is where we will connect to stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'eur',
      })
      return {
        // this is what I send back to StripeCheckout.jsx. if everything is correct I should get client_secret
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      }
    } catch (error) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: error.message }),
      }
    }
  }
  return {
    statusCode: 200,
    body: 'Payment',
  }
}
