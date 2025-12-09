#!/bin/bash
# Firebase Integration Script - One Command Fix
# Run this script to add Firebase integration to index.html

echo "🚀 Applying Firebase Integration..."

# Backup original file
cp index.html index.html.backup
echo "✅ Backup created: index.html.backup"

# Add Firebase SDK after Calendly CSS (line 18)
sed -i.tmp '/<link href="https:\/\/assets\.calendly\.com\/assets\/external\/widget\.css" rel="stylesheet">/a\
    \
    <!-- Firebase SDK -->\
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>\
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>\
    <script src="firebase-init.js"></script>\
    <script src="firebase-config.js"></script>' index.html

echo "✅ Added Firebase SDK after Calendly CSS"

# Add contact form script before </body>
sed -i.tmp 's|</body>|    <!-- Contact Form Firebase Integration -->\
    <script src="contact-form-firebase.js"></script>\
</body>|' index.html

echo "✅ Added contact form script before </body>"

# Clean up temp file
rm -f index.html.tmp

echo ""
echo "🎉 Firebase integration applied successfully!"
echo ""
echo "Next steps:"
echo "1. Review changes: git diff index.html"
echo "2. Commit: git add index.html"
echo "3. Push: git commit -m '✅ Add Firebase integration to contact form' && git push"
echo ""
echo "To restore backup: mv index.html.backup index.html"
