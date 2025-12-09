#!/usr/bin/env python3
"""
Firebase Integration Script for index.html
This script adds Firebase SDK and contact form integration to index.html
"""

import re

def apply_firebase_integration():
    print("🚀 Applying Firebase Integration to index.html...")
    
    # Read the file
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Backup original
    with open('index.html.backup', 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ Backup created: index.html.backup")
    
    # Add Firebase SDK after Calendly CSS
    firebase_sdk = '''    
    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js"></script>
    <script src="firebase-init.js"></script>
    <script src="firebase-config.js"></script>'''
    
    # Find Calendly CSS and add Firebase SDK after it
    calendly_pattern = r'(<!-- Calendly CSS -->\s*<link href="https://assets\.calendly\.com/assets/external/widget\.css" rel="stylesheet">)'
    content = re.sub(calendly_pattern, r'\1' + firebase_sdk, content)
    print("✅ Added Firebase SDK after Calendly CSS")
    
    # Add contact form script before </body>
    contact_form_script = '''    <!-- Contact Form Firebase Integration -->
    <script src="contact-form-firebase.js"></script>
'''
    
    # Add before </body>
    content = content.replace('</body>', contact_form_script + '</body>')
    print("✅ Added contact form script before </body>")
    
    # Write the updated content
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("\n🎉 Firebase integration applied successfully!")
    print("\nNext steps:")
    print("1. Review changes: git diff index.html")
    print("2. Test locally if possible")
    print("3. Commit: git add index.html")
    print("4. Push: git commit -m 'Add Firebase integration to contact form' && git push")
    print("\nTo restore backup: mv index.html.backup index.html")

if __name__ == "__main__":
    try:
        apply_firebase_integration()
    except FileNotFoundError:
        print("❌ Error: index.html not found in current directory")
        print("Please run this script from the repository root directory")
    except Exception as e:
        print(f"❌ Error: {e}")
