'use client'; // обязательно для использования usePathname()

import React from 'react';
import { usePathname } from 'next/navigation';

interface BodyWrapperProps {
  children: React.ReactNode;
}

export default function BodyWrapper({ children }: BodyWrapperProps) {
  const pathname = usePathname();

  /**
   * Допустим, у вас несколько "домашних" роутов в зависимости от локали:
   *   /       (для ru или дефолт)
   *   /ru     (для русской версии)
   *   /en     (для английской версии)
   *   /uz     (для узбекской версии)
   * Если вам нужно, чтобы "тёмный" фон был только на "/" 
   * вне зависимости от локали, уберите из условия другие пути.
   */
  const isHome = ['/', '/ru', '/en', '/uz'].includes(pathname);

  return (
    <body className={isHome ? 'bg-[#303030]' : 'bg-[#fff]'}>
      {children}
    </body>
  );
}
