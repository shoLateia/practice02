export const initializeHamburgerMenu = () => {
    const menu = document.querySelector(".js-hamburger-menu");
    const openButton = document.querySelector(".js-hamburger-open-button");
    const closeButton = document.querySelector(".js-hamburger-close-button");

    if (!menu || !openButton || !closeButton) return;

    openButton.addEventListener("click", (e) => {
        document.body.style.overflow = "hidden";
        menu.showModal();
    });

    closeButton.addEventListener("click", (e) => {
        document.body.style.overflow = "";
        menu.close();
    });
};
