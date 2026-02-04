// ========== Dynamic News ==========
const newsData = [
    "Bacoor City launches new waste management program.",
    "Free medical check-up available this Friday at City Hall.",
    "Traffic advisory for Molino Blvd due to road repair.",
];

function loadNews() {
    const newsContainer = document.getElementById("newsContainer");
    if (newsContainer) {
        newsData.forEach(item => {
            let div = document.createElement("div");
            div.className = "card";
            div.innerText = item;
            div.onclick = () => showModal(item);
            newsContainer.appendChild(div);
        });
    }
}

// ========== Modal ==========
function showModal(message) {
    document.getElementById("modalText").innerText = message;
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// ========== Department Search ==========
function filterDepartments() {
    let input = document.getElementById("searchDept").value.toLowerCase();
    let cards = document.querySelectorAll(".dept-card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(input) ? "block" : "none";
    });
}

// ========== Form Validation ==========
function validateForm(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert("Inquiry submitted successfully!");
    localStorage.setItem("lastUser", name);
    document.getElementById("inquiryForm").reset();
}

// ========== LocalStorage Preference ==========
function loadUser() {
    let lastUser = localStorage.getItem("lastUser");
    if (lastUser) {
        document.getElementById("welcomeUser").innerText =
            "Welcome back, " + lastUser + "!";
    }
}

window.onload = function () {
    loadNews();
    loadUser();
};
