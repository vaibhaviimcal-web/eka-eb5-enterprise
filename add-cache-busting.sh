#!/bin/bash

# Add cache-busting version parameter to widget files
# This forces browsers to reload the updated CSS and JS files

VERSION="v2.0.0"

# Update index.html to include version parameters
sed -i 's|whatsapp-call-widget.css|whatsapp-call-widget.css?v='$VERSION'|g' index.html
sed -i 's|whatsapp-call-widget.js|whatsapp-call-widget.js?v='$VERSION'|g' index.html

echo "Cache-busting parameters added successfully!"
echo "CSS: whatsapp-call-widget.css?v=$VERSION"
echo "JS: whatsapp-call-widget.js?v=$VERSION"
