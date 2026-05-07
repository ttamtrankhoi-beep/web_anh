// Mobile navigation, scroll reveal effects, and contact form validation.
const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a, .nav-panel .btn");
const revealElements = document.querySelectorAll(".reveal");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

function closeMenu() {
  body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = navPanel.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (body.classList.contains("menu-open") && !isClickInsideMenu && !isClickOnToggle) {
    closeMenu();
  }
});

// Reveal elements when they enter the viewport.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

function setError(field, message) {
  const group = field.closest(".form-group");
  const error = group.querySelector(".error-message");

  group.classList.add("invalid");
  error.textContent = message;
}

function clearError(field) {
  const group = field.closest(".form-group");
  const error = group.querySelector(".error-message");

  group.classList.remove("invalid");
  error.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function validateForm() {
  const fields = {
    name: contactForm.elements.name,
    phone: contactForm.elements.phone,
    email: contactForm.elements.email,
    message: contactForm.elements.message,
  };

  let isValid = true;

  Object.values(fields).forEach(clearError);
  formStatus.textContent = "";

  if (!fields.name.value.trim()) {
    setError(fields.name, "Vui lòng nhập họ tên.");
    isValid = false;
  }

  if (!fields.phone.value.trim()) {
    setError(fields.phone, "Vui lòng nhập số điện thoại.");
    isValid = false;
  }

  if (!fields.email.value.trim()) {
    setError(fields.email, "Vui lòng nhập email.");
    isValid = false;
  } else if (!isValidEmail(fields.email.value.trim())) {
    setError(fields.email, "Email chưa đúng định dạng.");
    isValid = false;
  }

  if (!fields.message.value.trim()) {
    setError(fields.message, "Vui lòng nhập nội dung yêu cầu.");
    isValid = false;
  }

  return isValid;
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  contactForm.reset();
  formStatus.textContent = "Cảm ơn bạn! Thông tin đã được gửi thành công.";
});

contactForm.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    clearError(field);
    formStatus.textContent = "";
  });
});
