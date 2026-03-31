// API utility for lead capture and form submissions
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

/**
 * Capture lead information
 * @param {Object} leadData - Lead information
 * @returns {Promise<Object>} API response
 */
export const captureLead = async (leadData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to capture lead:', error);
    throw error;
  }
};

/**
 * Subscribe to newsletter
 * @param {string} email - Email address
 * @returns {Promise<Object>} API response
 */
export const subscribeNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to subscribe to newsletter:', error);
    throw error;
  }
};

/**
 * Send contact form message
 * @param {Object} formData - Form data (name, email, message)
 * @returns {Promise<Object>} API response
 */
export const sendContactMessage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to send contact message:', error);
    throw error;
  }
};
