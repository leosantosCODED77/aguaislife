/**
 * Configuração centralizada do WhatsApp oficial da Água is life
 */

export const WHATSAPP_CONFIG = {
  // Número oficial: 71 99339-9565
  rawNumber: '71993399565',
  countryCode: '55',
  fullPhone: '5571993399565',
  displayPhone: '(71) 99339-9565',
  defaultMessage: 'Olá! Vim pelo site Água Is Life e gostaria de fazer um pedido.',
};

/**
 * Gera URL no padrão oficial https://wa.me/55DDDNÚMERO?text=...
 * Funciona tanto em dispositivos móveis (app/web) quanto computadores (WhatsApp Web / Desktop).
 */
export function getWhatsAppUrl(message?: string): string {
  const cleanPhone = WHATSAPP_CONFIG.fullPhone.replace(/\D/g, '');
  const textToSend = message && message.trim().length > 0
    ? message.trim()
    : WHATSAPP_CONFIG.defaultMessage;
  const encodedText = encodeURIComponent(textToSend);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Abre o WhatsApp em nova aba de forma segura
 */
export function openWhatsApp(message?: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
