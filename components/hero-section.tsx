"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  
  // Exemplo: se o link é https://www.youtube.com/watch?v=dQw4w9WgXcQ, o ID é dQw4w9WgXcQ
  const youtubeVideoId = "qjIOA8oRom8"

  useEffect(() => {
    setIsVisible(true)
    // Carrega o vídeo apenas após um pequeno delay para priorizar o conteúdo acima
    const timer = setTimeout(() => {
      setShouldLoadVideo(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center pb-20 overflow-hidden">
      {/* Background do vídeo - cobre desde o topo absoluto */}
      <div className="absolute inset-0 w-full h-full z-0">
        {shouldLoadVideo ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-rhapido.mp4" type="video/mp4" />
          </video>
        ) : (
          // Placeholder enquanto o vídeo não carrega
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
        {/* Máscara escura para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <div className={`text-center space-y-8 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Gerencie suas vagas
              <br className="hidden sm:block" /> de forma rápida e eficiente
            </h1>
            <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              O ATS completo para empresas que querem otimizar seus processos de recrutamento e seleção. Publique vagas,
              organize candidatos e contrate os melhores talentos.
            </p>
          </div>

          {/* Secondary Message */}
          <p className="text-lg text-white font-medium max-w-2xl mx-auto drop-shadow-md">
            Da publicação da vaga à contratação. Tudo em um só lugar.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center gap-4 pt-6">
            <a 
              href="https://wa.me/553198819071?text=Ol%C3%A1%21%20Tudo%20bem%3F%20Gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20ATS%20RHapido.%20Cheguei%20at%C3%A9%20voc%C3%AAs%20pela%20landing%20page%20do%20RHapido%20e%20quero%20entender%20melhor%20como%20a%20solu%C3%A7%C3%A3o%20pode%20ajudar%20nos%20processos%20de%20recrutamento.%20Obrigado%21"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition hover:shadow-xl hover:shadow-red-600/30 transform hover:scale-105 duration-300 text-lg inline-block text-center"
            >
              Começar Agora
            </a>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold border-2 border-red-600 hover:bg-red-50 transition transform hover:scale-105 duration-300 text-lg"
            >
              Ver Demonstração
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <p className="text-4xl font-bold text-red-500 drop-shadow-lg">85%</p>
              <p className="text-sm text-white mt-2 drop-shadow-md">Redução no tempo de contratação</p>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <p className="text-4xl font-bold text-red-500 drop-shadow-lg">10x</p>
              <p className="text-sm text-white mt-2 drop-shadow-md">Mais produtividade no RH</p>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
              <p className="text-4xl font-bold text-red-500 drop-shadow-lg">50+</p>
              <p className="text-sm text-white mt-2 drop-shadow-md">Empresas confiam no RHapido</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal do Vídeo do YouTube */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
              title="Demonstração RHapido"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
