export class AnimationController {
  private static instance: AnimationController;
  private observer: IntersectionObserver | null = null;
  private animatedElements = new Set<Element>();

  private constructor() {
    this.init();
  }

  static getInstance(): AnimationController {
    if (!AnimationController.instance) {
      AnimationController.instance = new AnimationController();
    }
    return AnimationController.instance;
  }

  private init() {
    // Initialize intersection observer for scroll animations
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.animatedElements.add(entry.target);
          } else {
            // Remove animation when scrolling up to re-trigger on next scroll down
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Setup smooth scrolling for navigation links
    this.setupSmoothScrolling();
    
    // Setup page load animation
    this.setupPageLoadAnimation();
    
    // Observe all elements with scroll animation classes
    this.observeElements();
  }

  private setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            this.smoothScrollTo(targetElement);
          }
        }
      });
    });
  }

  private smoothScrollTo(target: Element) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 80; // Offset for navbar
    const duration = 1000; // 1 second
    let start: number | null = null;

    function animation(currentTime: number) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      
      window.scrollTo(0, run);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutCubic(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  }

  private setupPageLoadAnimation() {
    // Add page load animation to main content
    const mainContent = document.querySelector('body');
    if (mainContent) {
      mainContent.classList.add('page-load-animation');
    }
  }

  private observeElements() {
    // Observe elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );
    
    animatedElements.forEach(element => {
      if (this.observer) {
        this.observer.observe(element);
      }
    });
  }

  // Method to re-observe elements (useful for dynamic content)
  public reobserve() {
    this.observeElements();
  }

  // Method to trigger animations manually
  public triggerAnimations() {
    const elements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );
    
    elements.forEach(element => {
      element.classList.add('visible');
      this.animatedElements.add(element);
    });
  }

  // Cleanup method
  public destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.animatedElements.clear();
  }
}

// Initialize animations when DOM is loaded
export const initAnimations = () => {
  if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        AnimationController.getInstance();
      });
    } else {
      AnimationController.getInstance();
    }
  }
};
