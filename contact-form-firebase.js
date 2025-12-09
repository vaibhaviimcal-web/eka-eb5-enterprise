// Contact Form Firebase Integration
// This script handles contact form and newsletter submissions with Firebase

// Wait for DOM and Firebase to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase
    if (typeof initializeFirebase === 'function') {
        initializeFirebase();
    }
    
    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            const messageDiv = document.getElementById('form-message');
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            try {
                // Submit to Firebase
                const result = await FirebaseDB.submitContactForm(formData);
                
                if (result.success) {
                    // Show success message
                    messageDiv.className = 'form-message success';
                    messageDiv.textContent = 'Thank you for your interest! We will contact you within 24 hours.';
                    
                    // Reset form
                    this.reset();
                    
                    // Also store in localStorage as backup
                    let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                    submissions.push({...formData, timestamp: new Date().toISOString()});
                    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
                } else {
                    throw new Error(result.error || 'Submission failed');
                }
            } catch (error) {
                console.error('Contact form error:', error);
                
                // Show error message
                messageDiv.className = 'form-message error';
                messageDiv.textContent = 'Sorry, there was an error sending your message. Please try again or contact us directly.';
                
                // Store in localStorage as fallback
                let submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                submissions.push({...formData, timestamp: new Date().toISOString(), status: 'pending'});
                localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            } finally {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                // Hide message after 7 seconds
                setTimeout(() => {
                    messageDiv.className = 'form-message';
                    messageDiv.textContent = '';
                }, 7000);
            }
        });
    }
    
    // Newsletter Form Handler
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            const emailInput = document.getElementById('newsletterEmail');
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
            
            try {
                // Submit to Firebase
                const result = await FirebaseDB.subscribeNewsletter(emailInput.value);
                
                if (result.success) {
                    // Show success message
                    alert('✅ Successfully subscribed! Check your email for confirmation.');
                    this.reset();
                } else {
                    throw new Error(result.error || 'Subscription failed');
                }
            } catch (error) {
                console.error('Newsletter subscription error:', error);
                alert('❌ Sorry, there was an error. Please try again.');
            } finally {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
});
