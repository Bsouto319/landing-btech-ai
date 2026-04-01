// WhatsApp integration utility
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5511987654321'; // Replace with actual number

/**
 * Generate WhatsApp Web URL with pre-filled message
 * @param {string} message - Message to send
 * @returns {string} WhatsApp URL
 */
export function getWhatsAppLink(message = '') {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Open WhatsApp with pre-filled message
 * @param {string} message - Message to send
 */
export function openWhatsApp(message = '') {
  const url = getWhatsAppLink(message);
  window.open(url, '_blank');
}

// Pre-defined messages for different CTAs
export const WHATSAPP_MESSAGES = {
  demo: 'Olá! Gostaria de agendar uma demonstração do Btech AI Attendant. Pode ser?',
  contact: 'Olá! Gostaria de mais informações sobre o Btech AI Attendant.',
  pricing: 'Olá! Gostaria de conhecer mais sobre os planos e preços do Btech AI Attendant.',
  support: 'Olá! Tenho dúvidas sobre o Btech AI Attendant. Podem me ajudar?',
};
