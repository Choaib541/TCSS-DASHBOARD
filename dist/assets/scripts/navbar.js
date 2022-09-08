export const navbar = () => {
    const nav = document.querySelector("nav")
    const nav_triiger = nav.querySelector(".nav-triiger")
    const aside = document.querySelector("aside")

    nav_triiger.onclick = () => {
        if (aside.classList.contains("-translate-x-[300px]")) {
            aside.classList.remove("-translate-x-[300px]")
        } else {
            aside.classList.add("-translate-x-[300px]")
        }
    }
}
