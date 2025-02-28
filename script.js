document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("app").style.display = "none";
    document.getElementById("formContainer").style.display = "block";
});

function nextStep(step) {
    document.getElementById(`step${step - 1}`).style.display = "none";
    document.getElementById(`step${step}`).style.display = "block";
}

function prevStep(step) {
    document.getElementById(`step${step + 1}`).style.display = "none";
    document.getElementById(`step${step}`).style.display = "block";
}

document.getElementById("checkoutBtn").addEventListener("click", function () {
    alert("Proceeding to payment...");
    window.location.href = "checkout.html";
});
