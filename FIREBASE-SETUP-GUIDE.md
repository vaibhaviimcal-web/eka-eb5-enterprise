# 🔥 Firebase Setup Guide for EKA EB5 Website

## 📋 Table of Contents
1. [Create Firebase Project](#step-1-create-firebase-project)
2. [Get Configuration Keys](#step-2-get-configuration-keys)
3. [Enable Firestore Database](#step-3-enable-firestore-database)
4. [Set Security Rules](#step-4-set-security-rules)
5. [Enable Authentication](#step-5-enable-authentication)
6. [Enable Storage](#step-6-enable-storage)
7. [Update Website Files](#step-7-update-website-files)
8. [Create Admin User](#step-8-create-admin-user)
9. [Test Everything](#step-9-test-everything)

---

## Step 1: Create Firebase Project

1. **Go to Firebase Console**
   - Visit: https://console.firebase.google.com/
   - Sign in with your Google account

2. **Create New Project**
   - Click "Add project"
   - Project name: `eka-eb5-website` (or your choice)
   - Click "Continue"

3. **Google Analytics** (Optional)
   - Enable or disable Google Analytics
   - Click "Create project"
   - Wait for project creation (30-60 seconds)

4. **Click "Continue"** when ready

---

## Step 2: Get Configuration Keys

1. **Add Web App**
   - In Firebase Console, click the **Web icon** (`</>`)
   - App nickname: `EKA EB5 Website`
   - ✅ Check "Also set up Firebase Hosting" (optional)
   - Click "Register app"

2. **Copy Configuration**
   - You'll see code like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
     authDomain: "eka-eb5-website.firebaseapp.com",
     projectId: "eka-eb5-website",
     storageBucket: "eka-eb5-website.appspot.com",
     messagingSenderId: "123456789012",
     appId: "1:123456789012:web:abcdef1234567890"
   };
   ```
   - **COPY THIS ENTIRE OBJECT** - you'll need it!

3. **Click "Continue to console"**

---

## Step 3: Enable Firestore Database

1. **Navigate to Firestore**
   - In left sidebar, click "Build" → "Firestore Database"
   - Click "Create database"

2. **Choose Location**
   - Select "Start in **production mode**" (we'll add rules next)
   - Click "Next"

3. **Select Region**
   - Choose closest region to India: `asia-south1 (Mumbai)`
   - Click "Enable"
   - Wait for database creation (1-2 minutes)

---

## Step 4: Set Security Rules

1. **Go to Rules Tab**
   - In Firestore Database, click "Rules" tab

2. **Replace Default Rules**
   - Delete existing rules
   - Copy and paste these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper function to check if user is admin
    function isAdmin() {
      return request.auth != null && 
             request.auth.token.email in [
               'vaibhav.iimcal@gmail.com',  // Replace with your admin email
               'admin@ekaeb5.com'            // Add more admin emails as needed
             ];
    }
    
    // Blog Posts - Public read, Admin write
    match /blog_posts/{postId} {
      allow read: if resource.data.published == true || isAdmin();
      allow create, update, delete: if isAdmin();
    }
    
    // Projects - Public read, Admin write
    match /projects/{projectId} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }
    
    // Testimonials - Public read approved only, Admin write
    match /testimonials/{testimonialId} {
      allow read: if resource.data.approved == true || isAdmin();
      allow create, update, delete: if isAdmin();
    }
    
    // Contact Submissions - Anyone can create, Admin can read
    match /contact_submissions/{submissionId} {
      allow create: if true;
      allow read, update, delete: if isAdmin();
    }
    
    // Newsletter Subscribers - Anyone can create, Admin can read
    match /newsletter_subscribers/{subscriberId} {
      allow create: if true;
      allow read, update, delete: if isAdmin();
    }
    
    // Site Settings - Public read, Admin write
    match /site_settings/{settingId} {
      allow read: if true;
      allow write: if isAdmin();
    }
  }
}
```

3. **Publish Rules**
   - Click "Publish"
   - Rules are now active!

---

## Step 5: Enable Authentication

1. **Navigate to Authentication**
   - In left sidebar, click "Build" → "Authentication"
   - Click "Get started"

2. **Enable Email/Password**
   - Click "Email/Password" provider
   - Toggle "Enable" to ON
   - Click "Save"

3. **Add Admin User** (We'll do this in Step 8)

---

## Step 6: Enable Storage

1. **Navigate to Storage**
   - In left sidebar, click "Build" → "Storage"
   - Click "Get started"

2. **Security Rules**
   - Select "Start in **production mode**"
   - Click "Next"

3. **Choose Location**
   - Select same region: `asia-south1 (Mumbai)`
   - Click "Done"

4. **Update Storage Rules**
   - Click "Rules" tab
   - Replace with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      // Allow public read
      allow read: if true;
      
      // Allow authenticated admin write
      allow write: if request.auth != null && 
                      request.auth.token.email in [
                        'vaibhav.iimcal@gmail.com',
                        'admin@ekaeb5.com'
                      ];
    }
  }
}
```

5. **Publish Rules**

---

## Step 7: Update Website Files

1. **Open `firebase-config.js`**
   - Replace the placeholder config with YOUR config from Step 2:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

2. **Update Admin Email in Security Rules**
   - Replace `'vaibhav.iimcal@gmail.com'` with your actual admin email
   - This email will have full admin access

3. **Commit Changes to GitHub**
   - Save all files
   - Commit to your repository

---

## Step 8: Create Admin User

1. **Go to Authentication**
   - Firebase Console → Authentication → Users tab

2. **Add User**
   - Click "Add user"
   - Email: `vaibhav.iimcal@gmail.com` (or your admin email)
   - Password: Create a strong password (min 6 characters)
   - Click "Add user"

3. **Save Credentials**
   - **IMPORTANT:** Save these credentials securely!
   - You'll use them to login to the admin panel

---

## Step 9: Test Everything

### Test 1: Contact Form
1. Go to your website
2. Fill out contact form
3. Submit
4. Check Firebase Console → Firestore → `contact_submissions`
5. You should see your submission!

### Test 2: Newsletter Signup
1. Enter email in newsletter form
2. Submit
3. Check Firestore → `newsletter_subscribers`
4. Email should be there!

### Test 3: Admin Login
1. Go to `your-website.com/admin-login.html`
2. Login with admin credentials
3. Should redirect to admin panel
4. Try creating a blog post

### Test 4: Blog Display
1. Create a blog post in admin panel
2. Mark as "Published"
3. Go to `your-website.com/blog.html`
4. Your post should appear!

---

## 🎯 Database Structure

Your Firestore will have these collections:

```
📁 Firestore Database
├── 📂 blog_posts
│   ├── 📄 post_id_1
│   │   ├── title: "Your First Blog Post"
│   │   ├── content: "Post content..."
│   │   ├── author: "Nikhil Adesara"
│   │   ├── category: "EB-5 News"
│   │   ├── tags: ["visa", "investment"]
│   │   ├── imageUrl: "https://..."
│   │   ├── published: true
│   │   ├── views: 0
│   │   ├── createdAt: timestamp
│   │   └── updatedAt: timestamp
│   
├── 📂 projects
│   ├── 📄 project_id_1
│   │   ├── name: "Mumbai Tech Park"
│   │   ├── location: "Mumbai, India"
│   │   ├── investment: "$500,000"
│   │   ├── jobs: "10 jobs created"
│   │   ├── description: "..."
│   │   ├── imageUrl: "https://..."
│   │   └── createdAt: timestamp
│   
├── 📂 testimonials
│   ├── 📄 testimonial_id_1
│   │   ├── name: "John Doe"
│   │   ├── country: "India"
│   │   ├── text: "Great service!"
│   │   ├── rating: 5
│   │   ├── imageUrl: "https://..."
│   │   ├── approved: true
│   │   └── createdAt: timestamp
│   
├── 📂 contact_submissions
│   ├── 📄 submission_id_1
│   │   ├── name: "Jane Smith"
│   │   ├── email: "jane@example.com"
│   │   ├── phone: "+91 98765 43210"
│   │   ├── message: "I'm interested..."
│   │   ├── status: "new"
│   │   ├── read: false
│   │   └── submittedAt: timestamp
│   
├── 📂 newsletter_subscribers
│   ├── 📄 subscriber_id_1
│   │   ├── email: "subscriber@example.com"
│   │   ├── name: "Subscriber Name"
│   │   ├── active: true
│   │   └── subscribedAt: timestamp
│   
└── 📂 site_settings
    └── 📄 general
        ├── siteName: "EKA EB5 Consultants"
        ├── contactEmail: "info@ekaeb5.com"
        └── maintenanceMode: false
```

---

## 🔒 Security Best Practices

1. **Never commit Firebase config to public repos** (if using private keys)
2. **Use environment variables** for sensitive data
3. **Regularly review security rules**
4. **Monitor usage in Firebase Console**
5. **Set up billing alerts** (Firebase is free but good to monitor)
6. **Enable 2FA** on your Google account
7. **Backup Firestore data** regularly

---

## 📊 Free Tier Limits

Firebase Spark (Free) Plan includes:

- ✅ **Firestore:** 1 GB storage, 50K reads/day, 20K writes/day
- ✅ **Authentication:** Unlimited users
- ✅ **Storage:** 5 GB storage, 1 GB/day downloads
- ✅ **Hosting:** 10 GB storage, 360 MB/day bandwidth
- ✅ **Cloud Functions:** 125K invocations/month

**This is MORE than enough for your EB-5 website!**

---

## 🆘 Troubleshooting

### Issue: "Permission denied" errors
**Solution:** Check Firestore security rules, ensure admin email is correct

### Issue: Firebase not initializing
**Solution:** Verify firebase-config.js has correct credentials

### Issue: Contact form not submitting
**Solution:** Check browser console for errors, verify Firestore rules

### Issue: Images not uploading
**Solution:** Check Storage rules, ensure file size < 5MB

### Issue: Can't login to admin panel
**Solution:** Verify user exists in Authentication, check password

---

## 📞 Need Help?

- **Firebase Documentation:** https://firebase.google.com/docs
- **Firebase Console:** https://console.firebase.google.com/
- **Stack Overflow:** Search "Firebase" + your issue

---

## ✅ Checklist

- [ ] Firebase project created
- [ ] Configuration keys copied
- [ ] Firestore enabled
- [ ] Security rules set
- [ ] Authentication enabled
- [ ] Storage enabled
- [ ] Admin user created
- [ ] Website files updated
- [ ] Contact form tested
- [ ] Newsletter tested
- [ ] Admin panel tested
- [ ] Blog system tested

---

**🎉 Once all checkboxes are complete, your Firebase-powered dynamic website is LIVE!**
