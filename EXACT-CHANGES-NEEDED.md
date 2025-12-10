# 🎯 EXACT CHANGES NEEDED TO INTEGRATE WIDGETS

## Current Status:
- ✅ Widget files created (CSS & JS)
- ❌ NOT integrated into index.html yet
- ❌ NOT live on website

## What Needs to Happen:

### Change #1: Add CSS Link (Line ~19)

**FIND THIS (around line 19):**
```html
    <!-- Calendly CSS -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    
    <style>
```

**CHANGE TO:**
```html
    <!-- Calendly CSS -->
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    
    <!-- Week 2: WhatsApp & Call Widget Styles -->
    <link rel="stylesheet" href="whatsapp-call-widget.css">
    
    <style>
```

### Change #2: Add JavaScript (Line ~2161)

**FIND THIS (around line 2161):**
```html
    </script>
    <script src="chatbot-upgrade.js"></script>
</body>
</html>
```

**CHANGE TO:**
```html
    </script>
    <script src="chatbot-upgrade.js"></script>
    
    <!-- Week 2: WhatsApp & Call Widget Script -->
    <script src="whatsapp-call-widget.js"></script>
</body>
</html>
```

## That's It!

Just these 2 additions (4 lines total) will make the widgets work.

## After Making Changes:

```bash
git add index.html
git commit -m "Integrate WhatsApp and call widgets into index.html"
git push origin week-2-features
```

Then merge to main and the widgets will be live!
