import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919602094213?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" />
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-400/50 transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-card border border-border text-foreground text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat with us
        </span>
      </div>
    </a>
  );
}
