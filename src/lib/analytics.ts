/**
 * IMPORTANT LEGAL & PLATFORM POLICY NOTICE:
 * This analytics module enforces strict health-data and PII parameter filtering.
 * Sending weight, height, BMI, medical conditions, or personal contact info to ad platforms
 * (such as Meta Pixel or Google Analytics) violates Meta Business Tools Terms and Indian privacy laws,
 * which will result in ad account disabling and legal non-compliance.
 */

const ALLOWED_EVENTS = new Set([
  'page_view',
  'webinar_registered',
  'registration_started',
  'whatsapp_clicked',
  'channel_joined'
]);

const BLOCKED_KEY_SUBSTRINGS = [
  'weight', 'height', 'bmi', 'disease', 'diseases', 'condition', 'conditions',
  'diagnosis', 'hba1c', 'sugar', 'glucose', 'thyroid', 'pcos', 'diabetes',
  'bp', 'blood', 'medication', 'medicine', 'symptom', 'health', 'medical',
  'dob', 'age', 'email', 'phone', 'mobile', 'whatsapp', 'name', 'fullname',
  'firstname', 'lastname', 'address'
];

function isKeyBlocked(key: string): boolean {
  const lowerKey = key.toLowerCase();
  return BLOCKED_KEY_SUBSTRINGS.some(substring => lowerKey.includes(substring));
}

export function filterParams(params?: Record<string, any>): Record<string, any> {
  if (!params) return {};
  const cleanParams: Record<string, any> = {};

  for (const [key, value] of Object.entries(params)) {
    if (isKeyBlocked(key)) {
      if (import.meta.env.DEV) {
        console.warn(`[analytics] BLOCKED health-related parameter "${key}" — this must never be sent to an ad platform.`);
      }
    } else {
      cleanParams[key] = value;
    }
  }

  return cleanParams;
}

let isInitialized = false;

export function initAnalytics() {
  if (isInitialized) return;
  isInitialized = true;

  const ga4Id = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  const pixelId = import.meta.env.VITE_META_PIXEL_ID;
  const gtmId = import.meta.env.VITE_GTM_CONTAINER_ID;

  // Initialize GA4 if ID exists
  if (ga4Id && typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', ga4Id);
  }

  // Initialize Meta Pixel if ID exists (Explicitly disable Automatic Advanced Matching)
  if (pixelId && typeof window !== 'undefined') {
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    // Explicitly disable Automatic Advanced Matching as required by privacy policy
    (window as any).fbq('init', pixelId, {}, { autoConfig: false });
    (window as any).fbq('track', 'PageView');
  }

  // Initialize GTM if container ID exists
  if (gtmId && typeof window !== 'undefined') {
    (function (w: any, d: any, s: any, l: any, i: any) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', gtmId);
  }
}

export function track(eventName: string, params?: Record<string, any>) {
  if (!ALLOWED_EVENTS.has(eventName)) {
    if (import.meta.env.DEV) {
      console.warn(`[analytics] Disallowed event name "${eventName}". Allowed events:`, Array.from(ALLOWED_EVENTS));
    }
    return;
  }

  const cleanParams = filterParams(params);

  if (typeof window !== 'undefined') {
    // GA4
    if ((window as any).gtag && import.meta.env.VITE_GA4_MEASUREMENT_ID) {
      (window as any).gtag('event', eventName, cleanParams);
    }

    // Meta Pixel
    if ((window as any).fbq && import.meta.env.VITE_META_PIXEL_ID) {
      if (eventName === 'page_view') {
        (window as any).fbq('track', 'PageView');
      } else if (eventName === 'webinar_registered') {
        (window as any).fbq('track', 'CompleteRegistration', cleanParams);
      } else {
        (window as any).fbq('trackCustom', eventName, cleanParams);
      }
    }
  }
}
