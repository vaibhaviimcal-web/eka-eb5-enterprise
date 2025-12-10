# 🚀 Installation Instructions - WhatsApp & Call Widgets

## ✅ Files Ready:
- `whatsapp-call-widget.css` ✅
- `whatsapp-call-widget.js` ✅

## 📋 Installation Steps:

### Step 1: Add CSS Link to `<head>`

Open `index.html` and find this line (around line 19):
```html
<!-- Calendly CSS -->
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
```

**Add this line RIGHT AFTER it:**
```html
<!-- Week 2: WhatsApp & Call Widget Styles -->
<link rel="stylesheet" href="whatsapp-call-widget.css">
```

### Step 2: Add JavaScript Before `</body>`

Scroll to the bottom of `index.html` and find this line (around line 2161):
```html
<script src="chatbot-upgrade.js"></script>
```

**Add this line RIGHT AFTER it:**
```html
<!-- Week 2: WhatsApp & Call Widget Script -->
<script src="whatsapp-call-widget.js"></script>
```

### Step 3: Save and Commit

```bash
git add index.html
git commit -m "Install WhatsApp and call widgets"
git push origin week-2-features
```

## ✅ Expected Result:

After installation, you'll see:
- 🟢 **Green WhatsApp button** (bottom right, top position)
- 🔵 **Teal Call button** (bottom right, below WhatsApp)
- Both buttons will have pulsing animations
- Tooltips on hover
- Mobile: Direct dial/WhatsApp
- Desktop: Modal with copy button

## 📞 Configured Numbers:

- **Primary:** +91-9999345126 (WhatsApp & Call)
- **Secondary:** +91-7979007970 (Available in code)

## 🧪 Test Checklist:

- [ ] WhatsApp button visible
- [ ] Call button visible
- [ ] WhatsApp opens correctly
- [ ] Call works on mobile
- [ ] Modal shows on desktop
- [ ] Animations smooth
- [ ] No console errors

## 🎯 Done!

Your communication widgets are now live! 🚀
