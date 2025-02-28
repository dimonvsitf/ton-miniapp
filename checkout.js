const TON_WALLET_ADDRESS = "UQA5RoNe7YwTmCaFZpLIkj_NeK01mhz-IaRgZcVq9Ul9IhKH"; // My TON address

// Initialize TON Connect
const tonConnectUI = new TONConnectUI({
    manifestUrl: "https://yourdomain.com/tonconnect-manifest.json" // Replace with actual hosted URL
});

// Handle Wallet Connection
document.getElementById("connectWallet").addEventListener("click", async () => {
    await tonConnectUI.connectWallet();
    document.getElementById("payBtn").style.display = "block";
});

// Handle Payment
document.getElementById("payBtn").addEventListener("click", async () => {
    try {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60,
            messages: [
                {
                    address: TON_WALLET_ADDRESS,
                    amount: "100000000", // 100 USDT in nanotons (adjust if needed)
                }
            ]
        };

        await tonConnectUI.sendTransaction(transaction);
        alert("Payment Sent! Check your wallet.");
    } catch (error) {
        alert("Payment Failed: " + error.message);
    }
});
