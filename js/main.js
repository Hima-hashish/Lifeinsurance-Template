// Start Header
// Catch Elemnets
let icon = document.querySelector("header .menu > i"),
  navigate = document.querySelector("header .menu nav");

// Handle the icon
icon.addEventListener("click", function () {
  // Check if the navigation has the active class
  if (navigate.classList.contains("active")) {
    // Remove the active class from the navigation
    navigate.classList.remove("active");
  } else {
    // Add the active class to the navigation
    navigate.classList.add("active");
  }
});
// End Header
// Start Clients
// Catch Elements
let imgs = document.querySelectorAll(".s-six .container .clients > div > img"),
  lis = document.querySelectorAll(".s-six .container .slide ul li"),
  prev = document.querySelector(".s-six .container .slide .prev"),
  next = document.querySelector(".s-six .container .slide .next"),
  // Create the index variable
  index = 0;

// Handle the previous
prev.addEventListener("click", function () {
  // Check if the index is the last
  if (index !== 0) {
    // Decrement the index
    --index;
    // Call the change function
    Change();
    // Add active class to the current li
    lis[index].classList.add("active");
  }
});
// Handle the next
next.addEventListener("click", function () {
  // Check if the index is the first
  if (index !== 2) {
    // Increment the index
    ++index;
    Change();
    lis[index].classList.add("active");
  }
});

// Loop on the bullets
lis.forEach((li) => {
  // Handle the bullets
  li.addEventListener("click", function () {
    // Get the li index
    let num = this.getAttribute("data-index");
    // Update the index variable
    index = +num;
    Change();
    // Add active class to the current li
    this.classList.add("active");
  });
});

// Create the Checker and changer function
function Change() {
  if (index === 0) {
    prev.classList.add("disable");
    next.classList.remove("disable");
  } else if (index === 2) {
    next.classList.add("disable");
    prev.classList.remove("disable");
  } else if (index === 1) {
    prev.classList.remove("disable");
    next.classList.remove("disable");
  }
  // Change the images src
  imgs[0].src = `media/images/client-1(${index}).jpg`;
  imgs[1].src = `media/images/client-2(${index}).jpg`;
  lis.forEach((li) => {
    // Remove active class from the lis
    li.classList.remove("active");
  });
}
// End Clients
