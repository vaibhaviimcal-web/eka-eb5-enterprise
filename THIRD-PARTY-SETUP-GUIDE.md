# 🔧 Third-Party Services Setup Guide
**Complete step-by-step instructions for all external integrations**

---

## 📊 SERVICES OVERVIEW

All services listed below are **FREE** (with generous free tiers):

| Service | Purpose | Free Tier | Setup Time |
|---------|---------|-----------|------------|
| Google Analytics | Website analytics | Unlimited | 10 min |
| Microsoft Clarity | Heatmaps & recordings | Unlimited | 5 min |
| Tawk.to | Live chat | Unlimited | 10 min |
| Formspree | Contact forms | 50/month | 5 min |
| Mailchimp | Email marketing | 2,000 subscribers | 15 min |
| Calendly | Appointment scheduling | 1 event type | 10 min |

**Total Setup Time:** ~1 hour  
**Total Monthly Cost:** $0

---

## 1️⃣ GOOGLE ANALYTICS 4 SETUP

### Step 1: Create Account
1. Go to https://analytics.google.com/
2. Click "Start measuring"
3. Enter account name: "EKA EB5 Consultants"
4. Click "Next"

### Step 2: Create Property
1. Property name: "EKA EB5 Website"
2. Time zone: "India Standard Time (IST)"
3. Currency: "Indian Rupee (INR)"
4. Click "Next"

### Step 3: Business Information
1. Industry: "Professional Services"
2. Business size: "Small (1-10 employees)"
3. Click "Create"
4. Accept Terms of Service

### Step 4: Set Up Data Stream
1. Choose platform: "Web"
2. Website URL: `https://vaibhaviimcal-web.github.io/eka-eb5-enterprise/`
3. Stream name: "EKA EB5 Website"
4. Click "Create stream"

### Step 5: Get Tracking Code
1. Copy your Measurement ID (looks like: `G-XXXXXXXXXX`)
2. Copy the tracking code snippet
3. Add to ALL HTML pages in `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Step 6: Verify Installation
1. Visit your website
2. Go back to Google Analytics
3. Click "Realtime" in left sidebar
4. You should see yourself as an active user!

### Step 7: Set Up Goals
1. Go to "Admin" → "Events"
2. Click "Create event"
3. Create these events:
   - `form_submit` (contact form submissions)
   - `consultation_click` (consultation bookings)
   - `download` (resource downloads)
   - `calculator_complete` (calculator completions)

---

## 2️⃣ MICROSOFT CLARITY SETUP

### Step 1: Create Account
1. Go to https://clarity.microsoft.com/
2. Click "Sign up" (use Microsoft, Google, or Facebook account)
3. Accept terms

### Step 2: Create Project
1. Click "Add new project"
2. Project name: "EKA EB5 Website"
3. Website URL: `https://vaibhaviimcal-web.github.io/eka-eb5-enterprise/`
4. Category: "Professional Services"
5. Click "Add new project"

### Step 3: Get Tracking Code
1. Copy your Project ID (shown on screen)
2. Copy the tracking code
3. Add to ALL HTML pages in `<head>` section:

```html
<!-- Microsoft Clarity -->
<script type="text/javascript">
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

### Step 4: Configure Settings
1. Go to "Settings" → "Setup"
2. Enable "Mask sensitive content" (for privacy)
3. Set "IP blocking" if needed
4. Configure "Cookie consent" settings

### Step 5: View Insights
1. Wait 2-3 hours for data collection
2. Go to "Dashboard" to see:
   - Heatmaps (where users click)
   - Session recordings (watch user behavior)
   - Scroll maps (how far users scroll)
   - Rage clicks (frustration points)

---

## 3️⃣ TAWK.TO LIVE CHAT SETUP

### Step 1: Create Account
1. Go to https://www.tawk.to/
2. Click "Sign Up Free"
3. Enter email and create password
4. Verify email

### Step 2: Create Property
1. Property name: "EKA EB5 Consultants"
2. Website URL: `https://vaibhaviimcal-web.github.io/eka-eb5-enterprise/`
3. Click "Add Property"

### Step 3: Customize Widget
1. Go to "Administration" → "Chat Widget"
2. **Appearance:**
   - Widget color: `#5a8a87` (EKA teal)
   - Widget position: Bottom right
   - Widget size: Normal
3. **Behavior:**
   - Show widget on: All pages
   - Trigger: Show immediately
4. **Offline:**
   - Enable offline messages
   - Set offline message: "We're currently offline. Leave a message and we'll respond within 24 hours!"

### Step 4: Set Up Automated Messages
1. Go to "Administration" → "Triggers"
2. Create trigger: "Welcome Message"
   - Condition: Visitor opens chat
   - Message: "Hi! 👋 Welcome to EKA EB5 Consultants. How can we help you with your EB-5 visa journey today?"
3. Create trigger: "Idle Visitor"
   - Condition: Visitor idle for 30 seconds
   - Message: "Have questions about the EB-5 program? We're here to help! 😊"

### Step 5: Get Widget Code
1. Go to "Administration" → "Chat Widget"
2. Click "Direct Chat Link"
3. Copy the widget code
4. Add to ALL HTML pages before `</body>`:

```html
<!-- Tawk.to Live Chat -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

### Step 6: Install Mobile App
1. Download "Tawk.to" app from:
   - iOS: App Store
   - Android: Google Play
2. Log in with your account
3. Enable push notifications
4. Now you can respond to chats from anywhere!

### Step 7: Add Team Members
1. Go to "Administration" → "Agents"
2. Click "Add Agent"
3. Enter email addresses of team members
4. Set roles (Admin, Agent, or Viewer)

---

## 4️⃣ FORMSPREE CONTACT FORM SETUP

### Step 1: Create Account
1. Go to https://formspree.io/
2. Click "Get Started"
3. Sign up with email or GitHub
4. Verify email

### Step 2: Create Form
1. Click "New Form"
2. Form name: "EKA EB5 Contact Form"
3. Email to receive submissions: `info@ekaeb5visa.com`
4. Click "Create Form"

### Step 3: Get Form Endpoint
1. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
2. Update your contact form in `index.html`:

```html
<!-- Replace existing form tag -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <input type="tel" name="phone" placeholder="Your Phone">
  <textarea name="message" placeholder="Your Message" required></textarea>
  
  <!-- Hidden fields for tracking -->
  <input type="hidden" name="_subject" value="New Contact Form Submission - EKA EB5">
  <input type="hidden" name="_next" value="https://vaibhaviimcal-web.github.io/eka-eb5-enterprise/thank-you.html">
  
  <button type="submit">Send Message</button>
</form>
```

### Step 4: Configure Form Settings
1. Go to form settings in Formspree dashboard
2. **Notifications:**
   - Enable email notifications
   - Add multiple email recipients if needed
3. **Spam Protection:**
   - Enable reCAPTCHA (recommended)
   - Enable honeypot field
4. **Auto-response:**
   - Enable "Send confirmation email to submitter"
   - Customize message:
   ```
   Thank you for contacting EKA EB5 Consultants!
   
   We have received your inquiry and will respond within 24 hours.
   
   In the meantime, you can:
   - Download our free EB-5 guide
   - Chat with us on WhatsApp: +91-7979007970
   - Read our FAQs
   
   Best regards,
   EKA EB5 Team
   ```

### Step 5: Create Thank You Page
Create `thank-you.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You - EKA EB5 Consultants</title>
</head>
<body>
    <div style="text-align: center; padding: 4rem 2rem;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
        <h1>Thank You!</h1>
        <p>We've received your message and will respond within 24 hours.</p>
        <p>Check your email for confirmation.</p>
        <a href="/" style="display: inline-block; margin-top: 2rem; padding: 1rem 2rem; background: #5a8a87; color: white; text-decoration: none; border-radius: 8px;">
            Return to Homepage
        </a>
    </div>
</body>
</html>
```

---

## 5️⃣ MAILCHIMP NEWSLETTER SETUP

### Step 1: Create Account
1. Go to https://mailchimp.com/
2. Click "Sign Up Free"
3. Enter email, username, password
4. Verify email

### Step 2: Create Audience
1. Click "Audience" → "Audience dashboard"
2. Click "Create Audience"
3. Fill in details:
   - Audience name: "EKA EB5 Newsletter Subscribers"
   - Default from email: `info@ekaeb5visa.com`
   - Default from name: "EKA EB5 Consultants"
4. Click "Save"

### Step 3: Create Signup Form
1. Go to "Audience" → "Signup forms"
2. Click "Embedded forms"
3. Customize form:
   - Form fields: Email only (keep it simple)
   - Button text: "Subscribe to Newsletter"
   - Success message: "Thank you for subscribing!"
4. Copy the embed code

### Step 4: Add to Website
Add to footer of ALL pages:

```html
<!-- Mailchimp Newsletter Signup -->
<div class="newsletter-section">
  <h3>Stay Updated on EB-5 News</h3>
  <p>Get monthly updates, success stories, and expert tips</p>
  
  <div id="mc_embed_signup">
    <form action="https://YOUR_MAILCHIMP_URL/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID" 
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          target="_blank">
      <div class="mc-field-group">
        <input type="email" 
               name="EMAIL" 
               placeholder="Your email address" 
               required>
      </div>
      <!-- Real people should not fill this in -->
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="b_YOUR_USER_ID_YOUR_LIST_ID" tabindex="-1" value="">
      </div>
      <button type="submit" name="subscribe">
        <i class="fas fa-envelope"></i> Subscribe
      </button>
    </form>
  </div>
</div>
```

### Step 5: Create Welcome Email
1. Go to "Campaigns" → "Email"
2. Click "Create Campaign" → "Automated"
3. Choose "Welcome new subscribers"
4. Design email:
   - Subject: "Welcome to EKA EB5 Newsletter!"
   - Content:
   ```
   Hi there!
   
   Thank you for subscribing to EKA EB5 Consultants newsletter.
   
   As a welcome gift, here's what you'll receive:
   
   ✓ Monthly EB-5 program updates
   ✓ Success stories from our clients
   ✓ Expert tips and advice
   ✓ Exclusive webinar invitations
   ✓ Early access to new resources
   
   To get started, download our free EB-5 Complete Guide:
   [Download Guide Button]
   
   Have questions? Reply to this email or WhatsApp us at +91-7979007970
   
   Best regards,
   Nikhil & Vibhuti
   EKA EB5 Consultants
   ```

---

## 6️⃣ CALENDLY SETUP

### Step 1: Create Account
1. Go to https://calendly.com/
2. Click "Sign up"
3. Use Google account or email
4. Verify email

### Step 2: Set Up Event Type
1. Click "Create" → "Event Type"
2. Choose "One-on-One"
3. Event name: "EB-5 Consultation Call"
4. Duration: 30 minutes
5. Description:
   ```
   Free 30-minute consultation to discuss your EB-5 visa eligibility 
   and answer your questions about the investment immigration process.
   
   During this call, we'll cover:
   - Your eligibility assessment
   - Investment options
   - Timeline and process
   - Source of funds requirements
   - Next steps
   ```

### Step 3: Configure Availability
1. Set your working hours:
   - Monday-Friday: 10:00 AM - 6:00 PM IST
   - Saturday: 10:00 AM - 2:00 PM IST
   - Sunday: Closed
2. Set buffer time: 15 minutes between meetings
3. Set minimum notice: 24 hours

### Step 4: Add Questions
1. Go to "Event Type" → "Edit" → "Invitee Questions"
2. Add custom questions:
   - Name (required)
   - Email (required)
   - Phone (required)
   - "What is your investment budget?" (dropdown)
   - "When do you plan to start?" (dropdown)
   - "How did you hear about us?" (text)

### Step 5: Set Up Notifications
1. Email confirmations: Enabled
2. Email reminders: 24 hours before, 1 hour before
3. SMS reminders: Optional (paid feature)

### Step 6: Get Scheduling Link
1. Copy your scheduling link (looks like: `https://calendly.com/YOUR_USERNAME/30min`)
2. Add to website:

```html
<!-- Inline Calendly Widget -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/YOUR_USERNAME/30min" 
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

<!-- Or Popup Button -->
<button onclick="Calendly.initPopupWidget({url: 'https://calendly.com/YOUR_USERNAME/30min'});">
  Schedule Consultation
</button>
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
```

### Step 7: Connect Calendar
1. Go to "Integrations"
2. Connect Google Calendar or Outlook
3. Select calendar for events
4. Enable two-way sync

---

## 7️⃣ FORMSPREE PRO TIPS

### Custom Success Message
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Form fields -->
  
  <!-- Custom redirect after submission -->
  <input type="hidden" name="_next" value="https://vaibhaviimcal-web.github.io/eka-eb5-enterprise/thank-you.html">
  
  <!-- Custom subject line -->
  <input type="hidden" name="_subject" value="New EB-5 Inquiry from Website">
  
  <!-- CC additional emails -->
  <input type="hidden" name="_cc" value="nikhil@ekaeb5visa.com,vibhuti@ekaeb5visa.com">
</form>
```

### Spam Protection
```html
<!-- Add honeypot field (hidden from users, catches bots) -->
<input type="text" name="_gotcha" style="display:none">

<!-- Enable reCAPTCHA in Formspree dashboard -->
```

### File Uploads
```html
<!-- Allow file attachments -->
<input type="file" name="attachment" accept=".pdf,.doc,.docx">
```

---

## 8️⃣ GOOGLE SEARCH CONSOLE SETUP

### Step 1: Add Property
1. Go to https://search.google.com/search-console
2. Click "Add property"
3. Choose "URL prefix"
4. Enter: `https://vaibhaviimcal-web.github.io/eka-eb5-enterprise/`

### Step 2: Verify Ownership
**Method 1: HTML File Upload**
1. Download verification file
2. Upload to root of your repository
3. Click "Verify"

**Method 2: HTML Tag**
1. Copy meta tag
2. Add to `<head>` of index.html
3. Click "Verify"

### Step 3: Submit Sitemap
1. Go to "Sitemaps" in left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait for Google to crawl (24-48 hours)

### Step 4: Monitor Performance
1. Check "Performance" for search analytics
2. Check "Coverage" for indexing status
3. Check "Enhancements" for issues
4. Fix any errors reported

---

## 9️⃣ SOCIAL MEDIA SETUP

### Facebook Page
1. Create business page: https://www.facebook.com/pages/create
2. Category: "Consulting Agency"
3. Add profile picture (logo)
4. Add cover photo
5. Fill in "About" section
6. Add website link
7. Add contact information

### LinkedIn Company Page
1. Go to https://www.linkedin.com/company/setup/new/
2. Company name: "EKA EB5 Consultants LLP"
3. Add logo and cover image
4. Fill in company details
5. Add website link
6. Invite team members

### YouTube Channel
1. Go to https://www.youtube.com/
2. Click profile → "Create a channel"
3. Channel name: "EKA EB5 Consultants"
4. Add channel art and description
5. Upload introduction video
6. Create playlists:
   - EB-5 Program Explained
   - Client Success Stories
   - Expert Tips & Advice

---

## 🔟 WHATSAPP BUSINESS SETUP

### Step 1: Download WhatsApp Business
1. Download from:
   - iOS: App Store
   - Android: Google Play
2. Install and open

### Step 2: Set Up Business Profile
1. Business name: "EKA EB5 Consultants"
2. Category: "Consulting Agency"
3. Description:
   ```
   India's premier EB-5 visa consultancy
   
   ✓ 98% approval rate
   ✓ 150+ families served
   ✓ 1500 Cr+ investments processed
   
   Expert guidance from consultation to green card.
   ```
4. Add business hours
5. Add website link
6. Add email and address

### Step 3: Create Quick Replies
1. Go to "Business tools" → "Quick replies"
2. Create shortcuts:
   - `/hello` → "Hi! Thank you for contacting EKA EB5. How can we help you today?"
   - `/hours` → "We're available Mon-Fri 10 AM - 6 PM IST, Sat 10 AM - 2 PM IST"
   - `/guide` → "Download our free EB-5 guide: [link]"
   - `/consult` → "Schedule a free consultation: [Calendly link]"

### Step 4: Set Up Away Message
1. Go to "Business tools" → "Away message"
2. Schedule: Outside business hours
3. Message:
   ```
   Thank you for contacting EKA EB5 Consultants!
   
   We're currently offline but will respond within 24 hours.
   
   For immediate assistance:
   📧 Email: info@ekaeb5visa.com
   📞 Call: +91-7979007970
   🌐 Website: ekaeb5visa.com
   
   Business hours: Mon-Fri 10 AM - 6 PM IST
   ```

### Step 5: Create Catalog (Optional)
1. Go to "Business tools" → "Catalog"
2. Add services:
   - Initial Consultation (Free)
   - Complete EB-5 Service Package
   - Document Preparation Service
3. Add descriptions and pricing

---

## 1️⃣1️⃣ TESTING CHECKLIST

### Analytics Testing
- [ ] Visit website and check Google Analytics "Realtime"
- [ ] Click buttons and verify events in GA4
- [ ] Check Microsoft Clarity for recordings
- [ ] Verify heatmaps are generating

### Communication Testing
- [ ] Click WhatsApp button and verify it opens
- [ ] Test live chat widget
- [ ] Submit test contact form
- [ ] Verify email received
- [ ] Test Calendly booking
- [ ] Verify calendar event created

### SEO Testing
- [ ] Check meta tags with view-source
- [ ] Validate schema markup: https://validator.schema.org/
- [ ] Test Open Graph: https://www.opengraph.xyz/
- [ ] Verify sitemap accessible: /sitemap.xml
- [ ] Check robots.txt: /robots.txt

### Performance Testing
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Test on mobile devices
- [ ] Check page load time (target: < 2s)
- [ ] Verify lazy loading working
- [ ] Test on slow 3G connection

---

## 📊 MONITORING & MAINTENANCE

### Daily (5 minutes)
- [ ] Check Google Analytics for traffic
- [ ] Respond to live chat messages
- [ ] Check Formspree for new submissions
- [ ] Review Calendly bookings

### Weekly (30 minutes)
- [ ] Review analytics reports
- [ ] Check Microsoft Clarity heatmaps
- [ ] Analyze user behavior patterns
- [ ] Respond to all emails
- [ ] Update content if needed

### Monthly (2 hours)
- [ ] Deep dive into analytics
- [ ] Review conversion funnel
- [ ] Analyze top-performing pages
- [ ] Check SEO rankings
- [ ] Plan content updates
- [ ] Review and respond to feedback

---

## 🎯 SUCCESS METRICS

### Week 1 Targets
- ✅ Google Analytics showing data
- ✅ Clarity recording sessions
- ✅ Live chat receiving messages
- ✅ Contact form submissions working
- ✅ Newsletter signups happening

### Month 1 Targets
- 📊 1,000+ website visitors
- 💬 50+ live chat conversations
- 📧 30+ contact form submissions
- 📅 15+ consultation bookings
- 📰 100+ newsletter subscribers

---

## 🆘 TROUBLESHOOTING

### Google Analytics Not Tracking
- Clear browser cache
- Check if ad blocker is blocking
- Verify Measurement ID is correct
- Wait 24-48 hours for data to appear

### Live Chat Not Showing
- Check if script is before `</body>`
- Verify Property ID and Widget ID
- Clear browser cache
- Check browser console for errors

### Contact Form Not Working
- Verify Formspree form ID is correct
- Check form method is POST
- Ensure email field name is "email"
- Check spam folder for notifications

### Calendly Not Loading
- Verify scheduling link is correct
- Check if popup blocker is blocking
- Try inline widget instead of popup
- Clear browser cache

---

## 📞 SUPPORT CONTACTS

### Google Analytics
- Help Center: https://support.google.com/analytics
- Community: https://support.google.com/analytics/community

### Microsoft Clarity
- Help Center: https://learn.microsoft.com/en-us/clarity/
- Support: clarity@microsoft.com

### Tawk.to
- Help Center: https://help.tawk.to/
- Live Chat: Available in dashboard

### Formspree
- Help Center: https://help.formspree.io/
- Email: support@formspree.io

### Mailchimp
- Help Center: https://mailchimp.com/help/
- Contact: Available in dashboard

### Calendly
- Help Center: https://help.calendly.com/
- Support: Available for paid plans

---

## ✅ FINAL CHECKLIST

### Before Going Live
- [ ] All tracking codes installed
- [ ] All services tested
- [ ] Email notifications working
- [ ] Mobile apps installed
- [ ] Team members added
- [ ] Auto-responses configured
- [ ] Privacy policy updated
- [ ] Cookie consent banner added

### After Going Live
- [ ] Monitor analytics daily
- [ ] Respond to chats within 5 minutes
- [ ] Check form submissions twice daily
- [ ] Review bookings daily
- [ ] Send newsletter monthly
- [ ] Analyze performance weekly

---

**🎉 You're all set! All third-party services are now configured and ready to use!**

---

*Last Updated: December 9, 2025*  
*Version: 1.0*
