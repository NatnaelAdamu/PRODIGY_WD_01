// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
  
  // Image Modal
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.querySelector(".close");
  
  document.querySelectorAll(".product-item img").forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });
  
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  
  // Product Filtering
  const filterSelect = document.getElementById("filter");
  const productItems = document.querySelectorAll(".product-item");
  
  filterSelect.addEventListener("change", function () {
    const filterValue = this.value.toLowerCase();
    productItems.forEach(item => {
      const productName = item.querySelector("h3").textContent.toLowerCase();
      if (filterValue === "all" || productName.includes(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // Contact Modal Functionality
 // Selecting elements
const contactBtn = document.querySelector(".contact-btn");
const contactModal = document.querySelector(".contact-modal");
const closeBtn = document.querySelector(".close-btn");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Show the popup when Contact Me button is clicked
contactBtn.addEventListener("click", () => {
  contactModal.style.display = "block";
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
  formMessage.textContent = ""; // Clear the success message
});

// Close the popup when clicking outside the modal
window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
    formMessage.textContent = ""; // Clear the success message
  }
});

// Handle form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";

    // Close the popup after 2 seconds
    setTimeout(() => {
      contactModal.style.display = "none";
      contactForm.reset(); // Reset form fields
      formMessage.textContent = ""; // Clear the success message
    }, 2000);
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});
