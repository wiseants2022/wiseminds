// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal Logic
const modal = document.getElementById('enquiryModal');
const closeBtn = document.querySelector('.close-modal');
const enquireBtns = document.querySelectorAll('.enquire-btn');
const courseInput = document.getElementById('course-preference');
const modalForm = document.getElementById('modal-form');

// Open Modal & Fill Data
enquireBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const courseName = e.target.getAttribute('data-course');
        courseInput.value = courseName;
        modal.classList.add('active');
    });
});

// Close Modal Functions
const closeModal = () => {
    modal.classList.remove('active');
};

closeBtn.addEventListener('click', closeModal);

// Close when clicking outside modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Form Submission Simulation for Modal
modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const parentName = modalForm.querySelector('input[type="text"]').value;
    const course = courseInput.value;
    
    // In a real scenario, this is where you would send data to a server
    alert(`Thank you, ${parentName}! We have received your enquiry for ${course}. We will contact you shortly.`);
    modalForm.reset();
    closeModal();
});

// Form Submission Simulation for Contact Page
document.getElementById('main-contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for contacting WiseMinds Academy! We will get back to you soon.");
    e.target.reset();
});
