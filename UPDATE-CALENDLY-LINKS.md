# 🔗 Update Calendly Links

**Your Calendly Link:** `https://calendly.com/eka-eb5`

---

## FILES TO UPDATE

Replace all instances of `YOUR_USERNAME` or placeholder Calendly URLs with `eka-eb5`

---

## 1️⃣ calculator.html

**Line ~1020:**

### Before:
```javascript
Calendly.initPopupWidget({
    url: 'https://calendly.com/YOUR_USERNAME/30min'
});
```

### After:
```javascript
Calendly.initPopupWidget({
    url: 'https://calendly.com/eka-eb5'
});
```

---

## 2️⃣ resources.html

**Line ~150:**

### Before:
```html
<a href="https://calendly.com/YOUR_USERNAME/30min" class="cta-btn" target="_blank">
```

### After:
```html
<a href="https://calendly.com/eka-eb5" class="cta-btn" target="_blank">
```

---

## 3️⃣ blog/eb5-vs-eb2-niw-comparison.html

**Line ~650:**

### Before:
```html
<a href="https://calendly.com/YOUR_USERNAME/30min" class="cta-btn" target="_blank">
```

### After:
```html
<a href="https://calendly.com/eka-eb5" class="cta-btn" target="_blank">
```

---

## 4️⃣ index.html (if you add Calendly there)

### Inline Widget:
```html
<!-- Calendly inline widget -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/eka-eb5" 
     style="min-width:320px;height:700px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### Popup Button:
```html
<!-- Calendly link widget begin -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<button class="cta-button" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/eka-eb5'});return false;">
    <i class="fas fa-calendar"></i> Schedule Free Consultation
</button>
<!-- Calendly link widget end -->
```

### Text Link:
```html
<a href="https://calendly.com/eka-eb5" target="_blank">Schedule Consultation</a>
```

---

## 5️⃣ THIRD-PARTY-SETUP-GUIDE.md

**Multiple locations - Update all references:**

### Before:
```
https://calendly.com/YOUR_USERNAME/30min
```

### After:
```
https://calendly.com/eka-eb5
```

---

## 6️⃣ IMPLEMENTATION-CHECKLIST.md

**Update all Calendly URL references**

---

## 🎨 RECOMMENDED CALENDLY SETUP

### Event Type Settings:

**Event Name:** EB-5 Consultation Call  
**Duration:** 30 minutes  
**Location:** Phone Call or Zoom  

**Description:**
```
Free 30-minute consultation to discuss your EB-5 visa eligibility and answer your questions about the investment immigration process.

During this call, we'll cover:
✓ Your eligibility assessment
✓ Investment options (TEA vs Standard)
✓ Timeline and process overview
✓ Source of funds requirements
✓ Regional center selection
✓ Next steps for your application

No obligation. Just expert guidance to help you make an informed decision.
```

**Questions to Ask:**
1. Name (required)
2. Email (required)
3. Phone Number (required)
4. What is your investment budget?
   - $800,000 - $1,000,000
   - $1,000,000 - $1,500,000
   - $1,500,000+
5. When do you plan to start the EB-5 process?
   - Immediately (within 3 months)
   - Soon (3-6 months)
   - Planning (6-12 months)
   - Just exploring (12+ months)
6. How did you hear about us?
   - Google Search
   - Social Media
   - Referral
   - Other

**Confirmation Page:**
```
Thank you for scheduling a consultation with EKA EB5 Consultants!

We've sent a confirmation email with:
✓ Meeting details and time
✓ Calendar invite
✓ Zoom/phone call link
✓ Preparation checklist

Before our call, please:
1. Download our free EB-5 Complete Guide
2. Review our FAQ page
3. Prepare any questions you have
4. Have your investment budget in mind

Looking forward to speaking with you!

Best regards,
Nikhil & Vibhuti
EKA EB5 Consultants
```

---

## 🔄 QUICK FIND & REPLACE

Use your code editor's find & replace feature:

**Find:** `YOUR_USERNAME`  
**Replace:** `eka-eb5`

**Find:** `https://calendly.com/YOUR_USERNAME/30min`  
**Replace:** `https://calendly.com/eka-eb5`

---

## ✅ VERIFICATION CHECKLIST

After updating:

- [ ] Test calculator.html - Click "Schedule Consultation" button
- [ ] Test resources.html - Click Calendly CTA
- [ ] Test blog post - Click consultation link
- [ ] Verify Calendly popup opens correctly
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify analytics tracking (if configured)

---

## 📱 CALENDLY MOBILE APP

Download the Calendly mobile app to:
- Receive instant booking notifications
- Manage your schedule on the go
- Reschedule appointments
- Add notes to bookings

**iOS:** https://apps.apple.com/app/calendly/id1451094657  
**Android:** https://play.google.com/store/apps/details?id=com.calendly.app

---

## 🎯 INTEGRATION EXAMPLES

### Example 1: Hero Section CTA
```html
<section class="hero">
    <h1>Your Trusted Partner for EB-5 Visa Success</h1>
    <p>98% approval rate • 150+ families served • 1500 Cr+ investments</p>
    
    <div class="cta-buttons">
        <button class="btn-primary" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/eka-eb5'});return false;">
            <i class="fas fa-calendar"></i> Schedule Free Consultation
        </button>
        <a href="/calculator.html" class="btn-secondary">
            <i class="fas fa-calculator"></i> Check Eligibility
        </a>
    </div>
</section>

<!-- Add Calendly script -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
```

### Example 2: Sticky Footer CTA
```html
<div class="sticky-cta">
    <div class="container">
        <span>Ready to start your EB-5 journey?</span>
        <button onclick="Calendly.initPopupWidget({url: 'https://calendly.com/eka-eb5'});return false;">
            Schedule Free Consultation
        </button>
    </div>
</div>

<style>
.sticky-cta {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2d4a47;
    color: white;
    padding: 1rem;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
    z-index: 998;
}

.sticky-cta .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.sticky-cta button {
    padding: 0.75rem 1.5rem;
    background: white;
    color: #2d4a47;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.sticky-cta button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

@media (max-width: 768px) {
    .sticky-cta .container {
        flex-direction: column;
        text-align: center;
    }
}
</style>
```

### Example 3: Inline Embedded Calendar
```html
<section class="consultation-section">
    <div class="container">
        <h2>Schedule Your Free Consultation</h2>
        <p>Choose a convenient time to speak with our EB-5 experts</p>
        
        <!-- Calendly inline widget begin -->
        <div class="calendly-inline-widget" 
             data-url="https://calendly.com/eka-eb5" 
             style="min-width:320px;height:700px;">
        </div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        <!-- Calendly inline widget end -->
    </div>
</section>
```

---

## 📊 TRACKING CALENDLY BOOKINGS

Add this to track Calendly events in Google Analytics:

```javascript
// Listen for Calendly events
window.addEventListener('message', function(e) {
    if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        // Track in Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'calendly_event', {
                event_name: e.data.event,
                event_details: JSON.stringify(e.data)
            });
        }
        
        // Specific tracking for booking completion
        if (e.data.event === 'calendly.event_scheduled') {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
                    value: 1.0,
                    currency: 'USD'
                });
            }
            
            // Show thank you message
            alert('Thank you for scheduling! We look forward to speaking with you.');
        }
    }
});
```

---

## ✅ FINAL CHECKLIST

- [ ] Updated calculator.html with eka-eb5 link
- [ ] Updated resources.html with eka-eb5 link
- [ ] Updated blog posts with eka-eb5 link
- [ ] Updated documentation files
- [ ] Tested Calendly popup on desktop
- [ ] Tested Calendly popup on mobile
- [ ] Verified booking flow works
- [ ] Set up Calendly event type
- [ ] Configured confirmation emails
- [ ] Downloaded Calendly mobile app
- [ ] Added tracking code (optional)

---

**Your Calendly Link:** `https://calendly.com/eka-eb5`

**Ready to accept bookings! 🎉**
