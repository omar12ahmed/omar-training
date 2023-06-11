(function () {
    console.log("Hello World!");

    // Get the main element and change it's background color to another colour

    // Create the lightbox container
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    // Function to open the lightbox and display the image
    function openLightbox(imageUrl) {
        const image = document.createElement("img");
        image.src = imageUrl;

        const closeBtn = document.createElement("span");
        closeBtn.classList.add("close");
        closeBtn.innerHTML = "Close";

        lightbox.innerHTML = "";
        lightbox.appendChild(image);
        lightbox.appendChild(closeBtn);

        lightbox.style.display = "flex";

        closeBtn.addEventListener("click", closeLightbox);
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.display = "none";
    }

    // Add event listeners to all anchor tags and img tags with .lb class
    const lbElements = document.querySelectorAll("a.lb, img.lb");

    let hoverTimeout;

    lbElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            hoverTimeout = setTimeout(() => {
                if (element.tagName === "A") {
                    const imageUrl = element.href;
                    openLightbox(imageUrl);
                } else if (element.tagName === "IMG") {
                    const imageUrl = element.src;
                    openLightbox(imageUrl);
                }
            }, 2000);
        });

        element.addEventListener("mouseleave", () => {
            clearTimeout(hoverTimeout);
        });

        element.addEventListener("click", (event) => {
            event.preventDefault();
            clearTimeout(hoverTimeout);

            if (element.tagName === "A") {
                const imageUrl = element.href;
                openLightbox(imageUrl);
            } else if (element.tagName === "IMG") {
                const imageUrl = element.src;
                openLightbox(imageUrl);
            }
        });
    });
})();
