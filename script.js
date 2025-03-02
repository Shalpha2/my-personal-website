const header = document.querySelector("header");
header.style.color = "green";header.style.textAlign = "center";
header.style.padding = "20px";

const nav = document.querySelector("nav");
nav.style.backgroundColor = "grey";
nav.style.textAlign = "center";
nav.style.padding = "2px 0";


const navLinks = document.querySelectorAll("nav ul li");
navLinks.forEach((item) => {
    item.style.display = "inline";
    item.style.margin = "10px";
    item.style.fontSize = "18px";
    item.style.fontWeight = "bold";
    item.style.cursor = "pointer";
})
    //style heading
    const headings = document.querySelectorAll("h1, h2, h3");
headings.forEach((heading) => {
    heading.style.color = "#222";
    heading.style.fontFamily ="Georgia, serif"; 
})

//style lists
const lists = document.querySelectorAll("ul");
lists.forEach((list) => {
    list.style.listStyle = "none";
    list.style.padding = "0";
});

const listItems = document.querySelectorAll("ul li");
listItems.forEach((item) => {
    item.style.padding = "8px";
    item.style.fontSize = "16px";
    item.style.backgroundColor = "#e0e0e0";
    item.style.margin = "5px 0";
    item.style.borderRadius = "5px";
});
//contact section
document.addEventListener("DOMContentLoaded", function () {
const socialLinks = document.querySelector(".social-links");
socialLinks.style.display = "flex";
    socialLinks.style.justifyContent = "center";
    socialLinks.style.gap = "20px";
    socialLinks.style.marginTop = "20px";
    const icons = document.querySelectorAll(".social-links a");

    icons.forEach(icon => {
        icon.style.fontSize = "30px";
        icon.style.color = "#333"; 
        icon.style.textDecoration = "none"; 
        icon.style.transition = "0.3s ease-in-out"; 

        // Add hover effect
        icon.addEventListener("mouseover", function () {
            icon.style.color = "#007bff"; 
            icon.style.transform = "scale(1.2)"; 
        });

        icon.addEventListener("mouseout", function () {
            icon.style.color = "#333"; 
            icon.style.transform = "scale(1)"; 
        });
    });
})
