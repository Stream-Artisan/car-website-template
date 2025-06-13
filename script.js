  // Smooth scrolling for nav links
            document.querySelectorAll('.nav-link').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    target.scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Navbar background on scroll
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Fade-in animations
            const fadeIns = document.querySelectorAll('.fade-in');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            fadeIns.forEach(element => observer.observe(element));

            // Form validation
            document.querySelector('.contact-form').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Form submitted! Please add backend processing.');
            });