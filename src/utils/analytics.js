const GA_ID = import.meta.env.VITE_GA_ID || '';
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '';
const TIKTOK_PIXEL_ID = import.meta.env.VITE_TIKTOK_PIXEL_ID || '';

const isBrowser = typeof window !== 'undefined';

const loadScript = (src, id) => {
  if (!isBrowser || !src || (id && document.getElementById(id))) return;
  const script = document.createElement('script');
  if (id) script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

const initializeGoogleAnalytics = () => {
  if (!GA_ID || !isBrowser || window.__gaInitialized) return;

  loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, 'ga-script');

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  window.__gaInitialized = true;
};

const initializeMetaPixel = () => {
  if (!META_PIXEL_ID || !isBrowser || window.__metaPixelInitialized) return;

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
  window.__metaPixelInitialized = true;
};

const initializeTikTokPixel = () => {
  if (!TIKTOK_PIXEL_ID || !isBrowser || window.__tiktokPixelInitialized) return;

  /* eslint-disable */
  !(function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    const ttq = (w[t] = w[t] || []);
    ttq.methods = [
      'page',
      'track',
      'identify',
      'instances',
      'debug',
      'on',
      'off',
      'once',
      'ready',
      'alias',
      'group',
      'enableCookie',
      'disableCookie',
      'holdConsent',
      'revokeConsent',
      'grantConsent',
    ];
    ttq.setAndDefer = function (obj, method) {
      obj[method] = function () {
        obj.push([method].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (let i = 0; i < ttq.methods.length; i += 1) {
      ttq.setAndDefer(ttq, ttq.methods[i]);
    }
    ttq.instance = function (id) {
      let instance = ttq._i[id] || [];
      for (let i = 0; i < ttq.methods.length; i += 1) {
        ttq.setAndDefer(instance, ttq.methods[i]);
      }
      return instance;
    };
    ttq.load = function (id, options) {
      const url = 'https://analytics.tiktok.com/i18n/pixel/events.js';
      ttq._i = ttq._i || {};
      ttq._i[id] = [];
      ttq._i[id]._u = url;
      ttq._t = ttq._t || {};
      ttq._t[id] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[id] = options || {};
      const script = d.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `${url}?sdkid=${id}&lib=${t}`;
      const firstScript = d.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    };
    ttq.load(TIKTOK_PIXEL_ID);
    ttq.page();
  })(window, document, 'ttq');
  /* eslint-enable */

  window.__tiktokPixelInitialized = true;
};

const mapEventName = (eventName) => {
  switch (eventName) {
    case 'button_click':
      return 'ClickButton';
    case 'form_submission':
      return 'SubmitForm';
    case 'cta_whatsapp':
    case 'hero_cta':
    case 'hero_message':
    case 'cta_email':
      return 'Contact';
    default:
      return null;
  }
};

const sendMetaEvent = (eventName, eventData) => {
  if (!isBrowser || typeof window.fbq !== 'function') return;

  const mappedEvent = mapEventName(eventName);
  if (mappedEvent) {
    window.fbq('trackCustom', mappedEvent, { source_event: eventName, ...eventData });
    return;
  }

  window.fbq('trackCustom', eventName, eventData);
};

const sendTikTokEvent = (eventName, eventData) => {
  if (!isBrowser || typeof window.ttq?.track !== 'function') return;

  const mappedEvent = mapEventName(eventName);
  window.ttq.track(mappedEvent || eventName, eventData);
};

/**
 * Initialize analytics providers
 */
export const initializeAnalytics = () => {
  initializeGoogleAnalytics();
  initializeMetaPixel();
  initializeTikTokPixel();
};

/**
 * Track page view
 * @param {string} pageName - Page name to track
 */
export const trackPageView = (pageName) => {
  const payload = {
    page_title: pageName,
    page_location: isBrowser ? window.location.href : '',
  };

  if (isBrowser && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', payload);
  }

  sendMetaEvent('page_view', payload);
  sendTikTokEvent('page_view', payload);
  console.log(`Page view tracked: ${pageName}`);
};

/**
 * Track custom event
 * @param {string} eventName - Event name
 * @param {Object} eventData - Event data
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (isBrowser && typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventData);
  }

  sendMetaEvent(eventName, eventData);
  sendTikTokEvent(eventName, eventData);
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
 * Track section scroll/view
 * @param {string} sectionName - Section name
 */
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};
