import express from 'express';
import bodyParser from 'body-parser';

let ETH_BALANCE = 100;
let USDC_BALANCE = 1000;

const app = express();
app.use(bodyParser.json());

app.post("/buy-assets", (req, res) => {
    const quantity = Number(req.body.quantity);
    if (isNaN(quantity) || quantity <= 0 || quantity > ETH_BALANCE) {
        return res.status(400).json({ message: "Invalid quantity" });
    }

    const updatedEthQuantity = ETH_BALANCE - quantity;
    const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const paidAmount = updatedUsdcBalance - USDC_BALANCE;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `You paid ${paidAmount} USDC and bought ${quantity} ETH`,
    });
});

app.post("/sell-assets", (req, res) => {
    const quantity = Number(req.body.quantity);
    if (isNaN(quantity) || quantity <= 0 || quantity > ETH_BALANCE) {
        return res.status(400).json({ message: "Invalid quantity" });
    }

    const updatedEthQuantity = ETH_BALANCE + quantity;
    const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const gottenUSDC = USDC_BALANCE - updatedUsdcBalance;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `You sold ${quantity} ETH and received ${gottenUSDC} USDC`,
    });
});

app.post("/quote", (req, res) => {
  
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});