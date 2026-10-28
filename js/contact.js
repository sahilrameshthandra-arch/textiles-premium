/* ==========================================================================
   HINDWARE PREMIUM - CONTACT PAGE JAVASCRIPT
   ========================================================================== */

(function() {
    'use strict';

    const elements = {
        appointmentForm: $('#appointmentForm'),
        quoteForm: $('#quoteForm'),
        footerNewsletter: $('#footerNewsletter'),
        showroomLinks: $$('[data-location]'),
        apptLocation: $('#apptLocation'),
        apptDate: $('#apptDate')
    };

    function init() {
        setupForms();
        setupShowroomLinks();
        setupDateMin();
        setupFormValidation();
    }

    function setupForms() {
        [elements.appointmentForm, elements.quoteForm, elements.footerNewsletter].forEach(form => {
            if (form) {
                form.addEventListener('submit', handleFormSubmit);
            }
        });
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<svg class="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;margin-right:8px"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"/></svg>Submitting...';

        try {
            await simulateSubmit(data);
            window.HindwarePremium.showToast(getSuccessMessage(form), 'success');
            form.reset();
        } catch (error) {
            window.HindwarePremium.showToast('Something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    }

    function getSuccessMessage(form) {
        if (form.id === 'appointmentForm') return 'Appointment booked! We\'ll confirm within 24 hours.';
        if (form.id === 'quoteForm') return 'Quote request submitted! Our team will contact you within 48 hours.';
        return 'Subscribed successfully!';
    }

    function simulateSubmit(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => Math.random() > 0.05 ? resolve() : reject(), 1000);
        });
    }

    function setupShowroomLinks() {
        elements.showroomLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const location = link.dataset.location;
                elements.apptLocation.value = location;
                document.getElementById('appointment').scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => elements.apptName?.focus(), 500);
            });
        });
    }

    function setupDateMin() {
        if (elements.apptDate) {
            const today = new Date().toISOString().split('T')[0];
            elements.apptDate.min = today;
        }
    }

    function setupFormValidation() {
        $$('input[required], select[required], textarea[required]').forEach(field => {
            field.addEventListener('blur', validateField);
            field.addEventListener('input', () => clearError(field));
        });
    }

    function validateField(e) {
        const field = e.target;
        if (field.required && !field.value.trim()) {
            showError(field, 'This field is required');
        } else if (field.type === 'email' && field.value && !isValidEmail(field.value)) {
            showError(field, 'Please enter a valid email');
        } else if (field.type === 'tel' && field.value && !isValidPhone(field.value)) {
            showError(field, 'Please enter a valid phone number');
        } else {
            clearError(field);
        }
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^[\d\s\-+()]{10,}$/.test(phone);
    }

    function showError(field, message) {
        clearError(field);
        field.classList.add('error');
        const error = document.createElement('span');
        error.className = 'field-error';
        error.textContent = message;
        field.parentNode.appendChild(error);
    }

    function clearError(field) {
        field.classList.remove('error');
        const error = field.parentNode.querySelector('.field-error');
        if (error) error.remove();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();