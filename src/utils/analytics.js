// Analytics utility for tracking user interactions
// Supports Google Analytics and custom event tracking

const GA_ID = import.meta.env.VITE_GA_ID || 'G-XXXXXXXXXX';

/**
 * Initialize analytics
 */
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined' && GA_ID) {
    // Load Google Analytics Script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
};

/**
 * Track page view
 * @param {string} pageName - Page name to track
 */
export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
  console.log(`Page view tracked: ${pageName}`);
};

/**
 * Track custom event
 * @param {string} eventName - Event name
 * @param {Object} eventData - Event data
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
  console.log(`Event tracked: ${eventName}`, eventData);
};

/**
 * Track button click
 * @param {string} buttonName - Button name/identifier
 */
export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', {
    button_name: buttonName,
  });
};

/**
 * Track form submission
 * @param {string} formName - Form name/identifier
 */
export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    form_name: formName,
  });
};

/**
 * Track section scroll
 * @param {string} sectionName - Section name
 */
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};
