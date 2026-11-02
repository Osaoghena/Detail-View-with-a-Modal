const images = [
  { src: "https://picsum.photos/id/10/500/350", caption: "Mountain lake at dawn" },
  { src: "https://picsum.photos/id/29/500/350", caption: "Forest trail in autumn" },
  { src: "https://picsum.photos/id/33/500/350", caption: "City skyline at night" },
  { src: "https://picsum.photos/id/42/500/350", caption: "Desert dunes" },
  { src: "https://picsum.photos/id/48/500/350", caption: "Old stone bridge" },
  { src: "https://picsum.photos/id/54/500/350", caption: "Coastline cliffs" },
  { src: "https://picsum.photos/id/64/500/350", caption: "Snowy pine forest" },
  { src: "https://picsum.photos/id/76/500/350", caption: "Rolling green hills" },
  { src: "https://picsum.photos/id/96/500/350", caption: "Foggy harbor" }
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const largeImage = document.getElementById("largeImage");
const caption = document.getElementById("caption");

let currentIndex = 0;

//thumbnails from the array
images.forEach((image, index) => {
  const thumbnail = document.createElement("button");
  thumbnail.className = "thumbnail";
  thumbnail.dataset.index = index;
  thumbnail.setAttribute("aria-label", image.caption);

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.caption;

  thumbnail.appendChild(img);
  gallery.appendChild(thumbnail);
});

//show image in the modal
function showImage(index) {
  currentIndex = (index + images.length) % images.length;

  largeImage.src = images[currentIndex].src.replace(
    "/500/350", "/1200/840"
  );

  largeImage.alt = images[currentIndex].caption;
  caption.textContent = images[currentIndex].caption;
}

//open modal using one gallery listener
gallery.addEventListener("click", function(event) {
  const thumbnail = event.target.closest(".thumbnail");

  if (thumbnail) {
    showImage(Number(thumbnail.dataset.index));
    modal.classList.add("open");
  }
});

//close button
document.getElementById("close").addEventListener("click", function() {
  modal.classList.remove("open");
});

//close by clicking background
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.classList.remove("open");
  }
});
