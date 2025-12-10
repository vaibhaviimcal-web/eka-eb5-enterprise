#!/bin/bash

# Script to add WhatsApp and Call widgets to index.html
# Run this script to automatically update your index.html

echo "🚀 Installing WhatsApp & Call Widgets..."

# Backup original file
cp index.html index.html.backup
echo "✅ Backup created: index.html.backup"

# Add CSS link after Calendly CSS
sed -i '/Calendly CSS/a\    \n    <!-- Week 2: WhatsApp & Call Widget Styles -->\n    <link rel="stylesheet" href="whatsapp-call-widget.css">' index.html
echo "✅ Added CSS link to <head>"

# Add JavaScript before </body>
sed -i 's|<script src="chatbot-upgrade.js"></script>|<script src="chatbot-upgrade.js"></script>\n    \n    <!-- Week 2: WhatsApp & Call Widget Script -->\n    <script src="whatsapp-call-widget.js"></script>|' index.html
echo "✅ Added JavaScript before </body>"

echo ""
echo "🎉 Installation Complete!"
echo ""
echo "📋 What was added:"
echo "  1. whatsapp-call-widget.css in <head>"
echo "  2. whatsapp-call-widget.js before </body>"
echo ""
echo "🧪 Next steps:"
echo "  1. Open index.html in browser"
echo "  2. Check for floating buttons (bottom right)"
echo "  3. Test WhatsApp and Call functionality"
echo ""
echo "📞 Configured numbers:"
echo "  Primary: +91-9999345126"
echo "  Secondary: +91-7979007970"
echo ""
echo "✅ Done! Your widgets are ready to use!"
