const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")

const openmodal = () =>
{
    console.log("modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

const closemodal= () =>
{
    console.log("modal is closed")
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

const following = document.querySelector(".follow");


const change= () =>
{
    following.innerHTML = "Following";
    following.style.color = "Yellow";
}

