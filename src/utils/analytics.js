import ReactGA from 'react-ga4';

// HOW TO CONFIGURE GOOGLE ANALYTICS:
// 1. Get your GA4 Measurement ID from Google Analytics
//    (Format: G-XXXXXXXXXX)
// 2. Replace 'G-XXXXXXXXXX' below with your actual ID
// 3. To disable analytics, set ENABLED to false

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // REPLACE WITH YOUR GA4 ID
const ENABLED = false; // Set to true to enable tracking

export const initGA = () => {
  if (ENABLED && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

export const logPageView = (path) => {
  if (ENABLED && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

export const logEvent = (category, action, label) => {
  if (ENABLED && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      category,
      action,
      label
    });
  }
};
