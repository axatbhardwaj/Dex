import express from 'express';

let ETH_BALANCE = 200;
let USDC_BALANCE = 1000;

const app = express();

app.use(express.json());

// app.post("/add-liquidity", (req, res) => {

// });

app.post("/buy-assets", (req, res) => {
    // Buy assets
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE - quantity;
    const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const paidAmount = updatedUsdcBalance - USDC_BALANCE;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `you paid ${paidAmount} USDC and bought ${quantity} ETH`,
    });
});

app.post("/sell-assets", (req, res) => {
    // Sell assets
    const quantity = req.body.quantity;
    const updatedUsdcBalance = ETH_BALANCE - quantity;
    const updatedEthQuantity = ETH_BALANCE * USDC_BALANCE / updatedUsdcBalance;
    const paidAmount = updatedEthQuantity - ETH_BALANCE;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `you paid ${paidAmount} USDC and bought ${quantity} ETH`,
    });
});

app.post("/quote", (req, res) => {
    // Get quote
    res.json({ message: "quote" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});