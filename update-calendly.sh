#!/bin/bash

# Script to update all Calendly URLs to calendly.com/eka-eb5
# Run this in your repository root

echo "🔄 Updating Calendly URLs to calendly.com/eka-eb5..."

# Update calculator.html
sed -i "s|https://calendly.com/YOUR_USERNAME/30min|https://calendly.com/eka-eb5|g" calculator.html
echo "✅ Updated calculator.html"

# Update resources.html
sed -i "s|https://calendly.com/YOUR_USERNAME/30min|https://calendly.com/eka-eb5|g" resources.html
echo "✅ Updated resources.html"

# Update blog posts
find blog -name "*.html" -type f -exec sed -i "s|https://calendly.com/YOUR_USERNAME/30min|https://calendly.com/eka-eb5|g" {} \;
echo "✅ Updated blog posts"

# Update documentation
sed -i "s|YOUR_USERNAME|eka-eb5|g" THIRD-PARTY-SETUP-GUIDE.md
sed -i "s|YOUR_USERNAME|eka-eb5|g" IMPLEMENTATION-CHECKLIST.md
sed -i "s|YOUR_USERNAME|eka-eb5|g" week1-implementation.html
echo "✅ Updated documentation"

echo ""
echo "🎉 All Calendly URLs updated successfully!"
echo ""
echo "Your Calendly link: https://calendly.com/eka-eb5"
echo ""
echo "Next steps:"
echo "1. Test the calculator: Open calculator.html and click 'Schedule Consultation'"
echo "2. Test resources page: Open resources.html and click Calendly CTA"
echo "3. Commit changes: git add . && git commit -m 'Update Calendly URLs to eka-eb5'"
echo "4. Push to GitHub: git push origin main"
