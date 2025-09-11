"use client"

import { useEffect } from 'react'

export function AsyncCSSLoader() {
  useEffect(() => {
    // Carregar CSS não-crítico de forma assíncrona
    const loadNonCriticalCSS = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/_next/static/css/app/layout.css'
      link.media = 'print'
      link.onload = function() {
        this.media = 'all'
        this.onload = null
      }
      document.head.appendChild(link)
    }

    // Carregar após o conteúdo crítico estar pronto
    if (document.readyState === 'complete') {
      loadNonCriticalCSS()
    } else {
      window.addEventListener('load', loadNonCriticalCSS)
    }

    return () => {
      window.removeEventListener('load', loadNonCriticalCSS)
    }
  }, [])

  return null
}
