/* ========================================
   WHATSAPP WIDGET JAVASCRIPT
   Week 2 - Communication Features
   ======================================== */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    primaryPhone: '919999345126',
    whatsappMessage: 'Hi, I\'m interested in EB-5 consultation'
  };

  // Track event in Google Analytics (if available)
  function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
  }

  // Create floating WhatsApp button
  function createFloatingButtons() {
    const container = document.createElement('div');
    container.className = 'floating-contact-buttons';
    container.setAttribute('role', 'complementary');
    container.setAttribute('aria-label', 'Contact options');

    // WhatsApp Button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = `https://wa.me/${CONFIG.primaryPhone}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.setAttribute('aria-label', 'Chat on WhatsApp');
    whatsappBtn.innerHTML = `
      <i class="fab fa-whatsapp" aria-hidden="true"></i>
      <span class="tooltip">WhatsApp Us</span>
    `;
    whatsappBtn.addEventListener('click', function() {
      trackEvent('Contact', 'whatsapp_click', 'floating_button');
    });

    container.appendChild(whatsappBtn);
    document.body.appendChild(container);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createFloatingButtons);
  } else {
    createFloatingButtons();
  }

})();
