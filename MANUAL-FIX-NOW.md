# ⚡ SUPER SIMPLE FIX - Do This Right Now!

## 🎯 2-Minute Manual Fix

### Step 1: Open GitHub Editor
Click this link: https://github.com/vaibhaviimcal-web/eka-eb5-enterprise/edit/main/index.html

### Step 2: Find Line 18
- Press `Ctrl+G` (Windows) or `Cmd+G` (Mac)
- Type `18` and press Enter
- You should see: `<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">`

### Step 3: Add Firebase Scripts
**After line 18**, add these 5 lines:

```html
    
    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
    <script src="firebase-init.js"></script>
    <script src="firebase-config.js"></script>
```

### Step 4: Go to End of File
- Press `Ctrl+End` (Windows) or `Cmd+Down` (Mac)
- You should see `</body>` and `</html>` at the very end

### Step 5: Add Contact Form Script
**Before `</body>`**, add these 2 lines:

```html
    <!-- Contact Form Firebase Integration -->
    <script src="contact-form-firebase.js"></script>
```

### Step 6: Save
- Scroll down
- Commit message: "Add Firebase integration to contact form"
- Click "Commit changes"

## ✅ Done!

Wait 1-2 minutes, then test your contact form!

---

## 📋 Copy-Paste Snippets

### Snippet 1 (add after line 18):
```
    
    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
    <script src="firebase-init.js"></script>
    <script src="firebase-config.js"></script>
```

### Snippet 2 (add before `</body>`):
```
    <!-- Contact Form Firebase Integration -->
    <script src="contact-form-firebase.js"></script>
```

---

**That's it! Your contact form will now save to Firebase!** 🎉
