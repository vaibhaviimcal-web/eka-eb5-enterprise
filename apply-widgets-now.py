#!/usr/bin/env python3
"""
Script to integrate WhatsApp and Call widgets into index.html
This reads the file, adds the necessary lines, and saves it back.
"""

def integrate_widgets():
    print("🚀 Integrating WhatsApp & Call Widgets into index.html...")
    
    # Read the current index.html
    try:
        with open('index.html', 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print("❌ Error: index.html not found!")
        return False
    
    # Check if already integrated
    if 'whatsapp-call-widget.css' in content:
        print("⚠️  Widgets already integrated!")
        return True
    
    # Add CSS link after Calendly CSS
    css_marker = '<!-- Calendly CSS -->\n    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">'
    css_addition = css_marker + '\n    \n    <!-- Week 2: WhatsApp & Call Widget Styles -->\n    <link rel="stylesheet" href="whatsapp-call-widget.css">'
    
    if css_marker in content:
        content = content.replace(css_marker, css_addition)
        print("✅ Added CSS link to <head>")
    else:
        print("⚠️  Could not find Calendly CSS marker")
    
    # Add JavaScript before </body>
    js_marker = '<script src="chatbot-upgrade.js"></script>\n</body>'
    js_addition = '<script src="chatbot-upgrade.js"></script>\n    \n    <!-- Week 2: WhatsApp & Call Widget Script -->\n    <script src="whatsapp-call-widget.js"></script>\n</body>'
    
    if js_marker in content:
        content = content.replace(js_marker, js_addition)
        print("✅ Added JavaScript before </body>")
    else:
        print("⚠️  Could not find chatbot-upgrade.js marker")
    
    # Save the modified file
    try:
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ index.html updated successfully!")
        return True
    except Exception as e:
        print(f"❌ Error saving file: {e}")
        return False

if __name__ == '__main__':
    print("\n" + "="*50)
    print("  WhatsApp & Call Widget Integration")
    print("="*50 + "\n")
    
    success = integrate_widgets()
    
    if success:
        print("\n" + "="*50)
        print("✅ INTEGRATION COMPLETE!")
        print("="*50)
        print("\n📋 What was added:")
        print("  1. whatsapp-call-widget.css in <head>")
        print("  2. whatsapp-call-widget.js before </body>")
        print("\n🧪 Next steps:")
        print("  1. Commit the changes: git add index.html")
        print("  2. Push to GitHub: git push")
        print("  3. Test the live site")
        print("\n📞 Configured numbers:")
        print("  Primary: +91-9999345126")
        print("\n✅ Done! Your widgets are now integrated!")
    else:
        print("\n❌ Integration failed. Please check the errors above.")
