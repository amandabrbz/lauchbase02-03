const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card");
const closeModal = document.querySelector(".close-modal");
const maxModal = document.querySelector(".max-modal");
const minModal = document.querySelector(".min-modal");

for (let card of cards) {
  card.addEventListener("click", function () {
    modalOverlay.classList.add("active");

    if (modal.classList.contains("maxport")) {
      modal.classList.remove("maxport");
    }

    const videoID = card.getAttribute("id");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://rocketseat.com.br/${videoID}`;
  });
}

closeModal.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});

maxModal.addEventListener("click", function () {
  modal.classList.add("maxport");
});

minModal.addEventListener("click", function () {
  modal.classList.remove("maxport");
});
