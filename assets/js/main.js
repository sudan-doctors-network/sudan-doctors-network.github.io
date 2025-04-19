// Main JavaScript for Sudanese Doctors Network Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            let isValid = true;
            
            if (!name) {
                showError('name', 'Please enter your name');
                isValid = false;
            } else {
                clearError('name');
            }
            
            if (!email) {
                showError('email', 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email');
                isValid = false;
            } else {
                clearError('email');
            }
            
            if (!message) {
                showError('message', 'Please enter your message');
                isValid = false;
            } else {
                clearError('message');
            }
            
            if (isValid) {
                // In a real implementation, this would send the form data to a server
                // For now, we'll just show a success message
                const formGroups = contactForm.querySelectorAll('.form-group');
                formGroups.forEach(group => {
                    group.style.display = 'none';
                });
                
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                contactForm.appendChild(successMessage);
                
                // Reset form
                contactForm.reset();
            }
        });
    }
    
    // Helper functions
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = field.parentNode.querySelector('.error-message') || document.createElement('div');
        
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        if (!field.parentNode.querySelector('.error-message')) {
            field.parentNode.appendChild(errorElement);
        }
        
        field.classList.add('error');
    }
    
    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorElement = field.parentNode.querySelector('.error-message');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        field.classList.remove('error');
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Fetch latest social media posts
    // This is a placeholder function that would be replaced with actual API calls
    // in a production environment
    function fetchLatestPosts() {
        // Placeholder data for demonstration
        const twitterPosts = [
            {
                date: 'April 15, 2025',
                content: 'Sudan Doctors Network continues to provide essential medical services to communities across Sudan despite ongoing challenges.'
            },
            {
                date: 'April 10, 2025',
                content: 'Our medical teams have successfully completed a vaccination campaign in rural areas, reaching over 5,000 children.'
            },
            {
                date: 'April 5, 2025',
                content: 'Join us for our upcoming medical conference on healthcare innovations in developing countries.'
            }
        ];
        
        const facebookPosts = [
            {
                date: 'April 17, 2025',
                content: 'Sudan Doctors Network is proud to announce a new partnership with international medical organizations to improve healthcare access.'
            },
            {
                date: 'April 12, 2025',
                content: 'Our mobile clinics have provided care to over 1,200 patients in remote areas this month alone.'
            },
            {
                date: 'April 7, 2025',
                content: 'Thank you to all volunteers who participated in our recent medical outreach program in Khartoum.'
            }
        ];
        
        // Display Twitter posts
        const twitterFeed = document.querySelector('.twitter-feed .social-feed-content');
        if (twitterFeed) {
            twitterPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'social-post';
                
                const dateElement = document.createElement('div');
                dateElement.className = 'post-date';
                dateElement.textContent = post.date;
                
                const contentElement = document.createElement('p');
                contentElement.textContent = post.content;
                
                postElement.appendChild(dateElement);
                postElement.appendChild(contentElement);
                twitterFeed.appendChild(postElement);
            });
        }
        
        // Display Facebook posts
        const facebookFeed = document.querySelector('.facebook-feed .social-feed-content');
        if (facebookFeed) {
            facebookPosts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'social-post';
                
                const dateElement = document.createElement('div');
                dateElement.className = 'post-date';
                dateElement.textContent = post.date;
                
                const contentElement = document.createElement('p');
                contentElement.textContent = post.content;
                
                postElement.appendChild(dateElement);
                postElement.appendChild(contentElement);
                facebookFeed.appendChild(postElement);
            });
        }
    }
    
    // Call the function to display placeholder social media posts
    fetchLatestPosts();
});
