// Firebase Configuration - EKA EB5 Website
const firebaseConfig = {
    apiKey: "AIzaSyAMiB0T5fNsEcmDed4-wmNiXx9EvAn9R7w",
    authDomain: "eka-eb5-website.firebaseapp.com",
    projectId: "eka-eb5-website",
    storageBucket: "eka-eb5-website.firebasestorage.app",
    messagingSenderId: "699403466862",
    appId: "1:699403466862:web:d919169cba9f7d32804e7f",
    measurementId: "G-1VPJDEBM44"
};

// Initialize Firebase
let app, db, auth, storage;

function initializeFirebase() {
    try {
        app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        auth = firebase.auth();
        storage = firebase.storage();
        console.log('✅ Firebase initialized successfully');
        return true;
    } catch (error) {
        console.error('❌ Firebase initialization error:', error);
        return false;
    }
}

// Database Helper Functions
const FirebaseDB = {
    // Blog Posts
    async createBlogPost(postData) {
        try {
            const docRef = await db.collection('blog_posts').add({
                ...postData,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                views: 0,
                published: postData.published || false
            });
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error creating blog post:', error);
            return { success: false, error: error.message };
        }
    },

    async getBlogPosts(limit = 10, published = true) {
        try {
            let query = db.collection('blog_posts');
            
            if (published) {
                query = query.where('published', '==', true);
            }
            
            query = query.orderBy('createdAt', 'desc').limit(limit);
            
            const snapshot = await query.get();
            const posts = [];
            
            snapshot.forEach(doc => {
                posts.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, posts };
        } catch (error) {
            console.error('Error getting blog posts:', error);
            return { success: false, error: error.message };
        }
    },

    async getBlogPost(postId) {
        try {
            const doc = await db.collection('blog_posts').doc(postId).get();
            
            if (!doc.exists) {
                return { success: false, error: 'Post not found' };
            }
            
            // Increment view count
            await db.collection('blog_posts').doc(postId).update({
                views: firebase.firestore.FieldValue.increment(1)
            });
            
            return { success: true, post: { id: doc.id, ...doc.data() } };
        } catch (error) {
            console.error('Error getting blog post:', error);
            return { success: false, error: error.message };
        }
    },

    async updateBlogPost(postId, updateData) {
        try {
            await db.collection('blog_posts').doc(postId).update({
                ...updateData,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return { success: true };
        } catch (error) {
            console.error('Error updating blog post:', error);
            return { success: false, error: error.message };
        }
    },

    async deleteBlogPost(postId) {
        try {
            await db.collection('blog_posts').doc(postId).delete();
            return { success: true };
        } catch (error) {
            console.error('Error deleting blog post:', error);
            return { success: false, error: error.message };
        }
    },

    // Projects
    async createProject(projectData) {
        try {
            const docRef = await db.collection('projects').add({
                ...projectData,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error creating project:', error);
            return { success: false, error: error.message };
        }
    },

    async getProjects(limit = 20) {
        try {
            const snapshot = await db.collection('projects')
                .orderBy('createdAt', 'desc')
                .limit(limit)
                .get();
            
            const projects = [];
            snapshot.forEach(doc => {
                projects.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, projects };
        } catch (error) {
            console.error('Error getting projects:', error);
            return { success: false, error: error.message };
        }
    },

    // Testimonials
    async createTestimonial(testimonialData) {
        try {
            const docRef = await db.collection('testimonials').add({
                ...testimonialData,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                approved: testimonialData.approved || false
            });
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error creating testimonial:', error);
            return { success: false, error: error.message };
        }
    },

    async getTestimonials(approved = true) {
        try {
            let query = db.collection('testimonials');
            
            if (approved) {
                query = query.where('approved', '==', true);
            }
            
            const snapshot = await query.orderBy('createdAt', 'desc').get();
            const testimonials = [];
            
            snapshot.forEach(doc => {
                testimonials.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, testimonials };
        } catch (error) {
            console.error('Error getting testimonials:', error);
            return { success: false, error: error.message };
        }
    },

    // Contact Form Submissions
    async submitContactForm(formData) {
        try {
            const docRef = await db.collection('contact_submissions').add({
                ...formData,
                submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
                status: 'new',
                read: false
            });
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error submitting contact form:', error);
            return { success: false, error: error.message };
        }
    },

    async getContactSubmissions(limit = 50) {
        try {
            const snapshot = await db.collection('contact_submissions')
                .orderBy('submittedAt', 'desc')
                .limit(limit)
                .get();
            
            const submissions = [];
            snapshot.forEach(doc => {
                submissions.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, submissions };
        } catch (error) {
            console.error('Error getting contact submissions:', error);
            return { success: false, error: error.message };
        }
    },

    // Newsletter Subscribers
    async addNewsletterSubscriber(email, name = '') {
        try {
            // Check if email already exists
            const existing = await db.collection('newsletter_subscribers')
                .where('email', '==', email)
                .get();
            
            if (!existing.empty) {
                return { success: false, error: 'Email already subscribed' };
            }
            
            const docRef = await db.collection('newsletter_subscribers').add({
                email,
                name,
                subscribedAt: firebase.firestore.FieldValue.serverTimestamp(),
                active: true
            });
            
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error('Error adding newsletter subscriber:', error);
            return { success: false, error: error.message };
        }
    },

    async getNewsletterSubscribers() {
        try {
            const snapshot = await db.collection('newsletter_subscribers')
                .where('active', '==', true)
                .orderBy('subscribedAt', 'desc')
                .get();
            
            const subscribers = [];
            snapshot.forEach(doc => {
                subscribers.push({ id: doc.id, ...doc.data() });
            });
            
            return { success: true, subscribers };
        } catch (error) {
            console.error('Error getting newsletter subscribers:', error);
            return { success: false, error: error.message };
        }
    }
};

// Authentication Helper Functions
const FirebaseAuth = {
    async signIn(email, password) {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            return { success: true, user: userCredential.user };
        } catch (error) {
            console.error('Sign in error:', error);
            return { success: false, error: error.message };
        }
    },

    async signOut() {
        try {
            await auth.signOut();
            return { success: true };
        } catch (error) {
            console.error('Sign out error:', error);
            return { success: false, error: error.message };
        }
    },

    getCurrentUser() {
        return auth.currentUser;
    },

    onAuthStateChanged(callback) {
        return auth.onAuthStateChanged(callback);
    }
};

// Storage Helper Functions
const FirebaseStorage = {
    async uploadImage(file, path) {
        try {
            const storageRef = storage.ref();
            const fileRef = storageRef.child(`${path}/${Date.now()}_${file.name}`);
            
            const snapshot = await fileRef.put(file);
            const downloadURL = await snapshot.ref.getDownloadURL();
            
            return { success: true, url: downloadURL };
        } catch (error) {
            console.error('Upload error:', error);
            return { success: false, error: error.message };
        }
    },

    async deleteImage(url) {
        try {
            const storageRef = storage.refFromURL(url);
            await storageRef.delete();
            return { success: true };
        } catch (error) {
            console.error('Delete error:', error);
            return { success: false, error: error.message };
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FirebaseDB, FirebaseAuth, FirebaseStorage, initializeFirebase };
}
