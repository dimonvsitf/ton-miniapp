const TON_WALLET_ADDRESS = "UQA5RoNe7YwTmCaFZpLIkj_NeK01mhz-IaRgZcVq9Ul9IhKH"; // My TON address

// Initialize TON Connect
const tonConnectUI = new TONConnectUI({
    manifestUrl: "https://dimonvsitf.github.io/ton-miniapp/tonconnect-manifest.json" // actual hosted URL
});

// Handle Wallet Connection
document.getElementById("connectWallet").addEventListener("click", async () => {
    try {
        await tonConnectUI.connectWallet();
        document.getElementById("payBtn").style.display = "block"; // Show Pay button on success
    } catch (error) {
        alert("Wallet connection failed: " + error.message);
    }
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

