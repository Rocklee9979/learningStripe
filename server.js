
const express = require('express');
const app = express();

require('dotenv').config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.listen(3000, () => {
    console.log("running on port 3000");
});