import React from 'react';

export default function Marquee() {
  return (
    <div className="w-full bg-blue-600 text-white py-2 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-sm font-medium">
        Serviço de Transfers e Táxis 24h — Paços de Ferreira & Porto
      </div>
    </div>
  );
}
