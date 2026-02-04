document.addEventListener("DOMContentLoaded", loadAnnouncements);

const announcements = [
  "Traffic advisory on Molino Boulevard",
  "Free medical check-up this Friday",
  "City Hall closed during public holiday"
];

function loadAnnouncements() {
  const list = document.getElementById("announcementList");
  announcements.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    li.onclick = () => openModal(text);
    list.appendChild(li);
  });
}

function openModal(text) {
  document.getElementById("modalText").textContent = text;
  document.getElementById("modal").classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

function filterDepartments() {
  const val = document.getElementById("searchDept").value.toLowerCase();
  document.querySelectorAll("#deptList li").forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(val) ? "" : "none";
  });
}

function validateForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email) {
    msg.textContent = "Please complete all fields.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Request submitted successfully!";
  msg.style.color = "green";
}
