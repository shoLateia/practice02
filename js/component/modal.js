export const initializeModal = () => {
    const modal = document.querySelector(".js-modal");
    const openButton = document.querySelector(".js-modal-open-button");
    const closeButton = document.querySelector(".js-modal-close-button");

    if (!modal || !openButton || !closeButton) return;

    const openMenu = () => {
        modal.showModal();
    };

    const closeMenu = () => {
        modal.close();
    };

    openButton.addEventListener("click", (e) => {
        openMenu();
    });

    closeButton.addEventListener("click", (e) => {
        closeMenu();
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeMenu();
        }
    });

    modal.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.close();
        }
    });
};
