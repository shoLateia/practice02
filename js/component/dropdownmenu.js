export const initializeDropdownMenu = () => {
    const button = document.querySelector(".js-button");
    const menu = document.querySelector(".js-menu");

    if (!button || !menu) return;

    const closeMenu = () => menu.classList.remove("is-active");

    button.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("is-active");
    });

    document.addEventListener("click", (e) => {
        if (menu.classList.contains("is-active") && !menu.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (menu.classList.contains("is-active") && e.key === "Escape") {
            closeMenu();
        }
    });
};
