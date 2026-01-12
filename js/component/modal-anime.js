export const initializeModalAnime = () => {
    const modal = document.querySelector(".js-modal--anime");
    const openButton = document.querySelector(".js-modal-open-button--anime");
    const closeButton = document.querySelector(".js-modal-close-button--anime");

    if (!modal || !openButton || !closeButton) return;

    const animeOptions = {
        duration: 200,
        easing: "ease",
        fill: "forwards",
    };

    const openMenu = () => {
        modal.showModal();
        modal.animate(
            [
                { opacity: 0, scale: 0.98 },
                { opacity: 1, scale: 1 },
            ],
            animeOptions
        );
    };

    const closeMenu = () => {
        const closing = modal.animate(
            [
                { opacity: 1, scale: 1 },
                { opacity: 0, scale: 0.98 },
            ],
            animeOptions
        );

        closing.onfinish = () => {
            modal.close();
        };
    };

    openButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeMenu();
        }
    });

    modal.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            e.preventDefault();
            closeMenu();
        }
    });
};
