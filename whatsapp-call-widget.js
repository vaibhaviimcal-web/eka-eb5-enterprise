/* ========================================
   WHATSAPP & CALL WIDGET JAVASCRIPT
   Week 2 - Communication Features
   ======================================== */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    primaryPhone: '919999345126',
    secondaryPhone: '917979007970',
    whatsappMessage: 'Hi, I\'m interested in EB-5 consultation',
    email: 'info@ekaeb5visa.com',
    calendlyUrl: 'https://calendly.com/YOUR_USERNAME/30min'
  };

  // Detect if user is on mobile
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Format phone number for display
  function formatPhoneDisplay(phone) {
    // Remove country code for display
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.startsWith('91')) {
      const number = cleaned.substring(2);
      return `+91-${number.substring(0, 5)}-${number.substring(5)}`;
    }
    return phone;
  }

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

  // Create floating contact buttons
  function createFloatingButtons() {
    const container = document.createElement('div');
    container.className = 'floating-contact-buttons';
    container.setAttribute('role', 'complementary');
    container.setAttribute('aria-label', 'Contact options');

    // Call Button (appears on TOP)
    const callBtn = document.createElement('a');
    if (isMobile()) {
      callBtn.href = `tel:+${CONFIG.primaryPhone}`;
    } else {
      callBtn.href = '#';
      callBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showPhoneNumber(CONFIG.primaryPhone);
      });
    }
    callBtn.className = 'call-float';
    callBtn.setAttribute('aria-label', 'Call us');
    callBtn.innerHTML = `
      <i class="fas fa-phone-alt" aria-hidden="true"></i>
      <span class="tooltip">Call Us</span>
    `;
    callBtn.addEventListener('click', function() {
      trackEvent('Contact', 'call_click', 'floating_button');
    });

    // WhatsApp Button (appears on BOTTOM)
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

    // IMPORTANT: Add Call button FIRST (top), then WhatsApp (bottom)
    container.appendChild(callBtn);
    container.appendChild(whatsappBtn);
    document.body.appendChild(container);
  }

  // Show phone number modal (desktop)
  function showPhoneNumber(phone) {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
      z-index: 10000;
      text-align: center;
      max-width: 400px;
      width: 90%;
    `;

    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 9999;
    `;

    modal.innerHTML = `
      <h3 style="color: #2d4a47; margin-bottom: 20px; font-size: 24px;">Call Us Now</h3>
      <div class="phone-display" style="
        background: #f5f5f5;
        padding: 20px;
        border-radius: 8px;
        margin: 20px 0;
      ">
        <div style="font-size: 28px; font-weight: bold; color: #2d4a47; margin-bottom: 15px;">
          ${formatPhoneDisplay(phone)}
        </div>
        <button onclick="copyPhoneNumber('${phone}', this)" style="
          background: #5a8a87;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
        ">
          <i class="fas fa-copy"></i> Copy Number
        </button>
      </div>
      <p style="color: #666; margin-top: 15px; font-size: 14px;">
        Click "Copy Number" to copy, then paste in your phone app
      </p>
      <button onclick="closePhoneModal()" style="
        margin-top: 20px;
        background: #5a8a87;
        color: white;
        border: none;
        padding: 10px 24px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
      ">Close</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Close on overlay click
    overlay.addEventListener('click', function() {
      document.body.removeChild(overlay);
      document.body.removeChild(modal);
    });

    // Make close function global
    window.closePhoneModal = function() {
      document.body.removeChild(overlay);
      document.body.removeChild(modal);
    };

    // Make copy function global
    window.copyPhoneNumber = function(phone, btn) {
      const formatted = formatPhoneDisplay(phone);
      navigator.clipboard.writeText(formatted).then(function() {
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.style.background = '#25D366';
        trackEvent('Contact', 'phone_copied', formatted);
        setTimeout(function() {
          btn.innerHTML = '<i class="fas fa-copy"></i> Copy Number';
          btn.style.background = '#5a8a87';
        }, 2000);
      });
    };
  }

  // Create contact bar (top)
  function createContactBar() {
    const bar = document.createElement('div');
    bar.className = 'contact-bar';
    bar.setAttribute('role', 'banner');
    bar.setAttribute('aria-label', 'Contact information bar');

    bar.innerHTML = `
      <a href="tel:+${CONFIG.primaryPhone}" class="contact-bar-item" aria-label="Call primary number">
        <i class="fas fa-phone-alt" aria-hidden="true"></i>
        <span>${formatPhoneDisplay(CONFIG.primaryPhone)}</span>
      </a>
      <a href="https://wa.me/${CONFIG.primaryPhone}?text=${encodeURIComponent(CONFIG.whatsappMessage)}" 
         class="contact-bar-item" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Chat on WhatsApp">
        <i class="fab fa-whatsapp" aria-hidden="true"></i>
        <span>WhatsApp</span>
      </a>
      <a href="mailto:${CONFIG.email}" class="contact-bar-item" aria-label="Send email">
        <i class="fas fa-envelope" aria-hidden="true"></i>
        <span>Email Us</span>
      </a>
      <a href="${CONFIG.calendlyUrl}" 
         class="contact-bar-item" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Schedule consultation">
        <i class="fas fa-calendar-alt" aria-hidden="true"></i>
        <span>Book Consultation</span>
      </a>
      <button class="contact-bar-close" aria-label="Close contact bar">
        <i class="fas fa-times" aria-hidden="true"></i>
      </button>
    `;

    document.body.appendChild(bar);

    // Track clicks
    bar.querySelectorAll('.contact-bar-item').forEach(function(item) {
      item.addEventListener('click', function() {
        const label = this.querySelector('span').textContent;
        trackEvent('Contact', 'contact_bar_click', label);
      });
    });

    // Close button
    bar.querySelector('.contact-bar-close').addEventListener('click', function() {
      bar.classList.add('hidden');
      localStorage.setItem('contactBarClosed', 'true');
      trackEvent('Contact', 'contact_bar_closed', 'user_action');
    });

    // Check if user previously closed it
    if (localStorage.getItem('contactBarClosed') === 'true') {
      bar.classList.add('hidden');
    }

    // Auto-hide on scroll down, show on scroll up
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 100) {
        bar.classList.add('hidden');
      } else if (currentScroll < lastScroll) {
        bar.classList.remove('hidden');
      }
      lastScroll = currentScroll;
    });
  }

  // Add click-to-call functionality to existing buttons
  function enhanceExistingButtons() {
    // Find all phone links
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
      link.addEventListener('click', function() {
        trackEvent('Contact', 'phone_link_click', this.href);
      });
    });

    // Find all WhatsApp links
    document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function(link) {
      link.addEventListener('click', function() {
        trackEvent('Contact', 'whatsapp_link_click', this.href);
      });
    });

    // Find all email links
    document.querySelectorAll('a[href^="mailto:"]').forEach(function(link) {
      link.addEventListener('click', function() {
        trackEvent('Contact', 'email_link_click', this.href);
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    createFloatingButtons();
    // Uncomment to enable contact bar
    // createContactBar();
    enhanceExistingButtons();
    console.log('EKA EB5 Contact Widgets Initialized');
  }

})();
