import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919840067900';
  const WHATSAPP_MESSAGE = encodeURIComponent("Hello Raj Scans, I would like to enquire about a scan.");

  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.widget}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle strokeWidth={2.5} />
    </a>
  );
}
