// Modal functionality
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const closeModal = document.getElementById('closeModal');
        
        // Get all portfolio items
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        // Add click event to each portfolio item
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                modal.style.display = 'flex';
                modalImg.src = imgSrc;
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            });
        });
        
        // Close modal when clicking on X
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
        
        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for header height
                        behavior: 'smooth'
                    });
                }
            });
        });