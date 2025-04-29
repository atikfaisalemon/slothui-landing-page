// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

// Testimonials Load More functionality
document.addEventListener("DOMContentLoaded", () => {
  const loadMoreBtn = document.querySelector(".load-more");
  const ratingItems = document.querySelectorAll(".rating-item");
  const itemsToShow = 5;
  let isExpanded = false;

  function handleMobileView() {
    if (window.innerWidth <= 768) {
      // Show load more button
      loadMoreBtn.style.display = "block";

      // Hide items beyond the first 5 if not expanded
      if (!isExpanded) {
        ratingItems.forEach((item, index) => {
          if (index >= itemsToShow) {
            item.classList.add("hidden");
          }
        });
      }
    } else {
      // Reset everything for desktop view
      loadMoreBtn.style.display = "none";
      ratingItems.forEach((item) => item.classList.remove("hidden"));
    }
  }

  // Initial setup
  handleMobileView();

  loadMoreBtn.addEventListener("click", () => {
    isExpanded = !isExpanded;

    ratingItems.forEach((item, index) => {
      if (index >= itemsToShow) {
        item.classList.toggle("hidden");
      }
    });

    loadMoreBtn.textContent = isExpanded ? "Show Less" : "Load More";
  });

  // Handle window resize
  window.addEventListener("resize", handleMobileView);
});

// Scroll to top functionality
const scrollTopBtn = document.querySelector(".scroll-top");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Show/hide scroll-to-top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.visibility = "visible";
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.visibility = "hidden";
  }
});
