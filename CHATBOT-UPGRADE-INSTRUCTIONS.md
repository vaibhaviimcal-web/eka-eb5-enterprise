# Chatbot Upgrade Instructions

## Quick Setup

To activate the upgraded smart click-based chatbot, add this single line to your `index.html` file:

**Location:** Just before the closing `</body>` tag (around line 2160)

**Add this line:**
```html
    <script src="chatbot-upgrade.js"></script>
</body>
</html>
```

## What This Upgrades

The `chatbot-upgrade.js` script transforms your existing chatbot into a smart, click-based conversation system with:

✅ **10+ Predefined Question Flows**
✅ **Intelligent Follow-up Questions**
✅ **Typing Indicators** (3 animated dots)
✅ **Smooth Animations** (slide up, fade in)
✅ **Pulsing Chat Button** (attracts attention)
✅ **Icon-Based Buttons** for visual clarity
✅ **Direct Calendly/WhatsApp Integration**
✅ **Back Navigation** to main menu
✅ **Fallback Text Input** (hidden by default)

## Manual Installation

1. Open `index.html` in your editor
2. Scroll to the very bottom (line ~2160)
3. Find the closing `</body>` tag
4. Add this line just before it:
   ```html
   <script src="chatbot-upgrade.js"></script>
   ```
5. Save and commit

## Conversation Flows

The upgraded chatbot includes these conversation paths:

1. **Investment Requirements** → TEA info, capital return, source of funds
2. **Processing Timeline** → Speed up process, waiting period details
3. **Eligibility Criteria** → Eligibility check, family members info
4. **Project Selection** → Current projects, due diligence process
5. **Consultation** → Calendly, WhatsApp, Email

Each path has 3-4 intelligent follow-up options!

## Testing

After adding the script tag:

1. Open the website
2. Click the chat button (bottom right)
3. You should see 5 main option buttons instead of a text input
4. Click any option to see the conversation flow
5. Test the "Book Consultation" flow to verify Calendly/WhatsApp links work

## Rollback

If you need to revert:

1. Simply remove the `<script src="chatbot-upgrade.js"></script>` line
2. The chatbot will return to the original text-based version

## Files

- `chatbot-upgrade.js` - The upgrade script (already committed)
- `index.html` - Needs one line added (see above)

---

**Status:** Script is ready and committed. Just needs the one-line addition to index.html to activate!
