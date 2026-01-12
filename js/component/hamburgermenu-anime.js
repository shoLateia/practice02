export const initializeHamburgerMenuAnime = () => {
    const menu = document.querySelector(".js-hamburger-menu--anime");
    const openButton = document.querySelector(
        ".js-hamburger-open-button--anime"
    );
    const closeButton = document.querySelector(
        ".js-hamburger-close-button--anime"
    );

    const animeOptions = {
        duration: 300,
        easing: "ease",
    };

    if (!menu || !openButton || !closeButton) return;

    const openMenu = () => {
        document.body.style.overflow = "hidden";
        menu.showModal();
        menu.animate([{ opacity: 0 }, { opacity: 1 }], animeOptions);
    };

    const closeMenu = () => {
        document.body.style.overflow = "";
        const closing = menu.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            animeOptions
        );
        closing.onfinish = () => {
            menu.close();
        };
    };

    document.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            e.preventDefault();
            closeMenu();
        }
    });

    openButton.addEventListener("click", openMenu);

    closeButton.addEventListener("click", closeMenu);
};
