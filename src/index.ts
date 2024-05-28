import express from 'express';

let ETH_BALANCE = 200;
let USDC_BALANCE = 1000;

const app = express();

app.use(express.json());

app.post("/add-liquidity", (req, res) => {
    // Add liquidity
    const product = ETH_BALANCE * USDC_BALANCE;
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE - quantity;
    const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const paidAmount = updatedUsdcBalance - USDC_BALANCE;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `Liquidity added successfully, you paid an amount of: ${paidAmount}`,
    });
});

app.post("/buy-assets", (req, res) => {
    // Buy assets
    const quantity = req.body.quantity;
    const updatedUsdcBalance = USDC_BALANCE - quantity;
    const updatedEthQuantity = ETH_BALANCE * ;
    const paidAmount = updatedEthBalance - ETH_BALANCE;

    ETH_BALANCE = updatedEthBalance;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `you paid ${paidAmount} USDC and bought ${quantity} ETH`,
    });
});

app.post("/sell-assets", (req, res) => {
    // Sell assets
});

app.post("/quote", (req, res) => {
    // Get quote
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});