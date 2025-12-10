#!/bin/bash

# Final Integration Script - Actually modifies index.html
# This script makes the exact changes needed

echo "🚀 FINAL WIDGET INTEGRATION"
echo "================================"
echo ""

# Backup
cp index.html index.html.backup.$(date +%Y%m%d_%H%M%S)
echo "✅ Backup created"

# Add CSS after line 19 (after Calendly CSS)
sed -i '19 a\    \n    <!-- Week 2: WhatsApp & Call Widget Styles -->\n    <link rel="stylesheet" href="whatsapp-call-widget.css">' index.html
echo "✅ Added CSS link"

# Add JS before </body> (line 2161)
sed -i '2161 i\    \n    <!-- Week 2: WhatsApp & Call Widget Script -->\n    <script src="whatsapp-call-widget.js"></script>' index.html
echo "✅ Added JavaScript"

echo ""
echo "================================"
echo "✅ INTEGRATION COMPLETE!"
echo "================================"
echo ""
echo "Now run:"
echo "  git add index.html"
echo "  git commit -m 'Integrate WhatsApp and call widgets'"
echo "  git push origin week-2-features"
echo ""
echo "Then merge to main and test!"
