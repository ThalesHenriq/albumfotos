document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const albumContainer = document.getElementById("album-container");
  const gallery = document.querySelector(".gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close-btn");

  startBtn.addEventListener("click", () => {
    albumContainer.style.display = "block";
    startBtn.parentElement.style.display = "none";
  });

  const images = [
    { src: "img/foto1.jpg", name: "foto1.jpg" },
    { src: "img/foto2.jpg", name: "foto2.jpg" },
    { src: "img/foto3.jpg", name: "foto3.jpg" },
    { src: "img/foto4.jpg", name: "foto4.jpg" },
    { src: "img/foto5.jpg", name: "foto5.jpg" },
    { src: "img/foto6.jpg", name: "foto6.jpg" },
    { src: "img/foto7.jpg", name: "foto7.jpg" },
    { src: "img/foto8.jpg", name: "foto8.jpg" },
    { src: "img/foto9.jpg", name: "foto9.jpg" },
    { src: "img/foto10.jpg", name: "foto10.jpg" },
    { src: "img/foto11.jpg", name: "foto11.jpg" },
    { src: "img/foto12.jpg", name: "foto12.jpg" },
    { src: "img/foto13.jpg", name: "foto13.jpg" },
    { src: "img/foto14.jpg", name: "foto14.jpg" },
    { src: "img/foto15.jpg", name: "foto15.jpg" },
    { src: "img/foto16.jpg", name: "foto16.jpg" },
    { src: "img/foto17.jpg", name: "foto17.jpg" },
    { src: "img/foto18.jpg", name: "foto18.jpg" },
    { src: "img/foto19.jpg", name: "foto19.jpg" },
    { src: "img/foto20.jpg", name: "foto20.jpg" },
    { src: "img/foto21.jpg", name: "foto21.jpg" },
    { src: "img/foto22.jpg", name: "foto22.jpg" },
    { src: "img/foto23.jpg", name: "foto23.jpg" },
    { src: "img/foto24.jpg", name: "foto24.jpg" },
    { src: "img/foto25.jpg", name: "foto25.jpg" },
    { src: "img/foto26.jpg", name: "foto26.jpg" },
    { src: "img/foto27.jpg", name: "foto27.jpg" },
    { src: "img/foto28.jpg", name: "foto28.jpg" },
    { src: "img/foto29.jpg", name: "foto29.jpg" },
    { src: "img/foto30.jpg", name: "foto30.jpg" },
  ];

  images.forEach((image) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.name;
    img.addEventListener("click", () => {
      lightboxImg.src = image.src;
      lightbox.style.display = "flex";
    });

    const downloadBtn = document.createElement("a");
    downloadBtn.href = image.src;
    downloadBtn.download = image.name;
    downloadBtn.classList.add("download-btn");
    downloadBtn.textContent = "Download";

    item.appendChild(img);
    item.appendChild(downloadBtn);
    gallery.appendChild(item);
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg && e.target !== closeBtn) {
      lightbox.style.display = "none";
    }
  });
});
