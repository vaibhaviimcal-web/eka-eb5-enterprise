# 🚀 SUPER SIMPLE COPY-PASTE FIX

## ⚡ 30-Second Fix - Just Copy & Paste!

### Step 1: Click This Link
👉 **[CLICK HERE TO EDIT index.html](https://github.com/vaibhaviimcal-web/eka-eb5-enterprise/edit/main/index.html)**

---

### Step 2: Find Line 18
Press `Ctrl+F` (or `Cmd+F` on Mac) and search for:
```
<!-- Calendly CSS -->
```

You'll see this:
```html
    <!-- Calendly CSS -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
```

---

### Step 3: Add Firebase Scripts
**Right after the Calendly CSS line**, add a blank line and paste this:

```html
    
    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
    <script src="firebase-init.js"></script>
    <script src="firebase-config.js"></script>
```

**After pasting, it should look like this:**
```html
    <!-- Calendly CSS -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    
    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
    <script src="firebase-init.js"></script>
    <script src="firebase-config.js"></script>
    
    <style>
```

---

### Step 4: Go to Bottom of File
Press `Ctrl+End` (or `Cmd+Down` on Mac) to jump to the end.

You'll see:
```html
    </script>
</body>
</html>
```

---

### Step 5: Add Contact Form Script
**Right before `</body>`**, add this:

```html
    <!-- Contact Form Firebase Integration -->
    <script src="contact-form-firebase.js"></script>
```

**After pasting, it should look like this:**
```html
        });
    </script>
    
    <!-- Contact Form Firebase Integration -->
    <script src="contact-form-firebase.js"></script>
</body>
</html>
```

---

### Step 6: Save & Commit
1. Scroll down to "Commit changes"
2. In the commit message box, type: `Add Firebase integration`
3. Click **"Commit changes"** button

---

## ✅ DONE!

Wait 1-2 minutes for GitHub Pages to deploy, then test your contact form!

---

## 📋 Quick Copy-Paste Snippets

### Snippet 1 (add after Calendly CSS):
```html
    
    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
    <script src="firebase-init.js"></script>
    <script src="firebase-config.js"></script>
```

### Snippet 2 (add before `</body>`):
```html
    <!-- Contact Form Firebase Integration -->
    <script src="contact-form-firebase.js"></script>
```

---

**That's it! Your contact form will now save to Firebase!** 🎉

**Direct link to edit:** https://github.com/vaibhaviimcal-web/eka-eb5-enterprise/edit/main/index.html
