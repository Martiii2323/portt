const modal = document.getElementById("imageModal");
const profilePhoto = document.getElementById("profilePhoto");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

profilePhoto.onclick = function () {
    modal.style.display = "flex";
    modalImage.src = this.src;
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};