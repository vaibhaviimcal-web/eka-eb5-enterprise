#!/usr/bin/env python3
"""
Script to update all Calendly URLs from YOUR_USERNAME to eka-eb5
Run this in your repository root directory
"""

import os
import re

# Your Calendly username
NEW_USERNAME = "eka-eb5"

# Files to update
FILES_TO_UPDATE = [
    "calculator.html",
    "resources.html",
    "blog/eb5-vs-eb2-niw-comparison.html",
]

# Patterns to replace
PATTERNS = [
    (r'YOUR_USERNAME', NEW_USERNAME),
    (r'https://calendly\.com/YOUR_USERNAME/30min', f'https://calendly.com/{NEW_USERNAME}'),
]

def update_file(filepath):
    """Update Calendly URLs in a single file"""
    if not os.path.exists(filepath):
        print(f"⚠️  File not found: {filepath}")
        return False
    
    try:
        # Read file
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Store original content
        original_content = content
        
        # Apply all replacements
        for pattern, replacement in PATTERNS:
            content = re.sub(pattern, replacement, content)
        
        # Check if anything changed
        if content == original_content:
            print(f"ℹ️  No changes needed: {filepath}")
            return False
        
        # Write updated content
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Updated: {filepath}")
        return True
    
    except Exception as e:
        print(f"❌ Error updating {filepath}: {str(e)}")
        return False

def main():
    """Main function to update all files"""
    print("🔄 Updating Calendly URLs to calendly.com/eka-eb5...\n")
    
    updated_count = 0
    
    for filepath in FILES_TO_UPDATE:
        if update_file(filepath):
            updated_count += 1
    
    print(f"\n🎉 Done! Updated {updated_count} file(s)")
    print(f"\nYour Calendly link: https://calendly.com/{NEW_USERNAME}")
    print("\nNext steps:")
    print("1. Test the changes in your browser")
    print("2. Commit: git add .")
    print("3. Commit: git commit -m 'Update Calendly URLs to eka-eb5'")
    print("4. Push: git push origin main")

if __name__ == "__main__":
    main()
