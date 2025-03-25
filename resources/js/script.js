document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".sticky-nav");
    const navOffset = nav.offsetTop; // Get initial nav position

    function handleScroll() {
        if (window.scrollY >= navOffset) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    }

    window.addEventListener("scroll", handleScroll);
});
