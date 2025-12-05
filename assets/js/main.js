// Main JavaScript for Blog/Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initMobileMenu();

    // Smooth Scrolling
    initSmoothScroll();

    // Add active class to current navigation item
    highlightCurrentPage();

    // Code syntax highlighting enhancement
    enhanceCodeBlocks();

    // Lazy loading images
    lazyLoadImages();
});

/**
 * Initialize mobile menu toggle
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = event.target.id === 'menu-toggle' ||
                                   event.target.classList.contains('menu-icon') ||
                                   event.target.parentElement?.classList.contains('menu-icon');

            if (!isClickInsideNav && !isClickOnToggle && menuToggle.checked) {
                menuToggle.checked = false;
                navMenu.style.display = 'none';
            }
        });
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Highlight current page in navigation
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath ||
            (currentPath.endsWith('/') && linkPath === currentPath.slice(0, -1)) ||
            (linkPath.endsWith('/') && currentPath === linkPath.slice(0, -1))) {
            link.classList.add('active');
        }
    });
}

/**
 * Enhance code blocks with copy button
 */
function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach((block) => {
        // Add language label if available
        const language = block.className.match(/language-(\w+)/);
        if (language) {
            const label = document.createElement('span');
            label.textContent = language[1];
            label.className = 'code-language';
            label.style.cssText = `
                position: absolute;
                top: 0;
                right: 0;
                background: rgba(0,0,0,0.3);
                color: white;
                padding: 2px 8px;
                font-size: 0.8rem;
                border-radius: 0 0 0 4px;
            `;
            block.parentElement.style.position = 'relative';
            block.parentElement.insertBefore(label, block);
        }

        // Add copy button
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = 'Copiar';
        button.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            padding: 4px 12px;
            background: var(--secondary-color, #3498db);
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85rem;
            opacity: 0;
            transition: opacity 0.3s;
        `;

        block.parentElement.style.position = 'relative';
        block.parentElement.appendChild(button);

        // Show button on hover
        block.parentElement.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });

        block.parentElement.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });

        // Copy functionality
        button.addEventListener('click', async () => {
            const code = block.textContent;
            try {
                await navigator.clipboard.writeText(code);
                button.textContent = 'Copiado!';
                button.style.background = '#27ae60';
                setTimeout(() => {
                    button.textContent = 'Copiar';
                    button.style.background = 'var(--secondary-color, #3498db)';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
                button.textContent = 'Erro';
                setTimeout(() => {
                    button.textContent = 'Copiar';
                }, 2000);
            }
        });
    });
}

/**
 * Lazy load images
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

/**
 * Add reading time to posts
 */
function calculateReadingTime() {
    const content = document.querySelector('.post-content');
    if (content) {
        const text = content.textContent;
        const wordsPerMinute = 200;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);

        const readingTimeElement = document.createElement('span');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.textContent = ` • ${readingTime} min de leitura`;
        readingTimeElement.style.color = 'var(--text-light, #666)';

        const postMeta = document.querySelector('.post-meta');
        if (postMeta) {
            postMeta.appendChild(readingTimeElement);
        }
    }
}

// Calculate reading time on post pages
if (document.querySelector('.post-content')) {
    calculateReadingTime();
}

/**
 * Back to top button
 */
function addBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--secondary-color, #3498db);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
}

// Add back to top button
addBackToTopButton();
