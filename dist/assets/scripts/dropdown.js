export const dropdown = () => {
    const dropdowns = document.querySelectorAll(".dropdown")
    dropdowns.forEach((e) => {
        const dropdown_trigger = e.querySelector(".dropdown-trigger")
        const dropdown_menu = e.querySelector(".dropdown-menu")
        dropdown_trigger.onclick = () => {
            if (dropdown_menu.classList.contains("hidden")) {
                dropdown_menu.classList.remove("hidden")
            } else {
                dropdown_menu.classList.add("hidden")
            }
        }
    })
}

export const non_floating_dropdown = () => {
    let non_floating_dropdowns = document.querySelectorAll(".non-floating-dropdown")
    non_floating_dropdowns.forEach((e) => {
        const non_floating_dropdown_trigger = e.querySelector(".non-floating-dropdown-trigger")
        const arrow = non_floating_dropdown_trigger.querySelector(".bxs-chevron-down");
        const non_floating_dropdown_menu = e.querySelector(".non-floating-dropdown-menu")
        non_floating_dropdown_trigger.onclick = () => {
            if (non_floating_dropdown_menu.classList.contains("hidden")) {
                non_floating_dropdown_menu.classList.remove("hidden")
                arrow.classList.add("-rotate-90")
            } else {
                non_floating_dropdown_menu.classList.add("hidden")
                arrow.classList.remove("-rotate-90")
            }
        }
    })
}
