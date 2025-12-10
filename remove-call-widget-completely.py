#!/usr/bin/env python3
"""
Remove Call Widget Completely from index.html
This script removes both CSS and JS references to the widget files
"""

def remove_widget_from_html():
    # Read index.html
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove CSS link
    content = content.replace(
        '    <!-- Week 2: WhatsApp & Call Widget Styles -->\n    <link rel="stylesheet" href="whatsapp-call-widget.css">\n    \n',
        ''
    )
    
    # Also try without extra newline
    content = content.replace(
        '    <!-- Week 2: WhatsApp & Call Widget Styles -->\n    <link rel="stylesheet" href="whatsapp-call-widget.css">\n',
        ''
    )
    
    # Remove JS script
    content = content.replace(
        '    <!-- Week 2: WhatsApp & Call Widget Script -->\n    <script src="whatsapp-call-widget.js"></script>\n',
        ''
    )
    
    # Write back
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("✅ Widget references removed from index.html")
    print("✅ Call button will no longer appear")
    print("✅ Only AI chatbot will remain")

if __name__ == '__main__':
    remove_widget_from_html()
