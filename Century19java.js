document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            const book = this.closest(".book");
            const price = book.querySelector(".book-price").textContent.replace("$", "");
            openPayment(parseFloat(price));
        });
    });
});

function openPayment(price) {
    document.getElementById("totalAmount").innerText = `$${price.toFixed(2)}`;
    document.getElementById("paymentModal").style.display = "block";
}

function closePayment() {
    document.getElementById("paymentModal").style.display = "none";
}

function confirmPayment() {
    let method = document.getElementById("paymentMethod").value;
    alert("Payment successful using " + method);
    closePayment();
}
