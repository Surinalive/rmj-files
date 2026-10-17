const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function removeActive() {
  for (tab of tabs) {
    tab.classList.remove("active");
  }
  for (panel of panels) {
    panel.classList.remove("active");
  }
}

for (const tab of tabs) {
  tab.addEventListener("click", (e) => {
    removeActive();
    tab.classList.add("active");
    document.getElementById(tab.dataset.panel).classList.add("active");
  });
}
