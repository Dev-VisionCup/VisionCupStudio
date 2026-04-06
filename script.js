document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'rgba(5, 5, 5, 0.8)';
            header.style.padding = '0';
        }
    });

    // 2. Lead Form Submission
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = leadForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.disabled = true;
            btn.innerText = 'ENVIANDO...';
            
            setTimeout(() => {
                btn.style.background = '#25d366';
                btn.style.color = '#fff';
                btn.innerText = 'MENSAGEM ENVIADA!';
                
                leadForm.reset();
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }

    // 3. Mobile Menu Toggle (Simplified)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isVisible = getComputedStyle(navLinks).display !== 'none';
            navLinks.style.display = isVisible ? 'none' : 'flex';
        });
    }

    // 4. Intersection Observer for Scroll Animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing after reveal
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
});
