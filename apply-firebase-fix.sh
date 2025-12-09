#!/bin/bash
# Automated Firebase Integration Script for index.html
# This script adds Firebase SDK and contact form integration

echo "🚀 Applying Firebase Integration to index.html..."

# Backup original file
cp index.html index.html.backup
echo "✅ Backup created: index.html.backup"

# Add Firebase SDK scripts after Calendly CSS (after line 18)
sed -i '18 a\    \n    <!-- Firebase SDK -->\n    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>\n    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>\n    <script src="firebase-init.js"></script>\n    <script src="firebase-config.js"></script>' index.html

echo "✅ Added Firebase SDK to <head>"

# Add contact form script before </body>
sed -i 's|</body>|    <!-- Contact Form Firebase Integration -->\n    <script src="contact-form-firebase.js"></script>\n</body>|' index.html

echo "✅ Added contact form script before </body>"

echo ""
echo "🎉 Firebase integration applied successfully!"
echo ""
echo "Next steps:"
echo "1. Review changes: git diff index.html"
echo "2. Test locally if possible"
echo "3. Commit: git add index.html"
echo "4. Push: git commit -m 'Add Firebase integration to contact form' && git push"
echo ""
echo "To restore backup: mv index.html.backup index.html"
