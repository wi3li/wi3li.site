import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Possuo sólidos conhecimentos em Redes de Computadores, abrangendo configuração, manutenção,
                  monitoramento e segurança de redes, adquiridos durante o curso de Tecnologia em Redes de Computadores.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Além disso, tenho experiência em desenvolvimento em HTML e CSS, adquirida no curso de Técnico em
                  Informática para Internet. Demonstro facilidade em comunicação e apresentações públicas.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Sou reconhecida pela capacidade de trabalhar de forma colaborativa em equipe e pela familiaridade com
                  ferramentas de produtividade como Microsoft Office e Google Workspace. Tenho um histórico comprovado
                  de aprendizagem rápida e adaptação a novos desafios.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Principais Especialidades</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-brand-900 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Configuração e Manutenção de Redes de Computadores
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-brand-900 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Monitoramento e Segurança de Redes</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-brand-900 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Desenvolvimento Web (HTML e CSS)</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-brand-900 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Infraestrutura de TI</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-brand-900 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Suporte Técnico e Resolução de Problemas</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Experiência Profissional</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-brand-900 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Técnica em Redes de Computadores</h3>
                    <p className="text-brand-900 dark:text-brand-700 font-medium">Freelancer</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2023 - Presente</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Configuração e manutenção de redes corporativas, incluindo switches, roteadores e pontos de acesso.
                  </li>
                  <li>Implementação de soluções de segurança de rede e monitoramento de tráfego.</li>
                  <li>Suporte técnico especializado em infraestrutura de TI para pequenas empresas.</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-brand-900 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Desenvolvedora Web Junior</h3>
                    <p className="text-brand-900 dark:text-brand-700 font-medium">Freelancer</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2024 - Presente</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Desenvolvimento de sites responsivos utilizando HTML5, CSS3 e JavaScript.</li>
                  <li>Criação de interfaces de usuário intuitivas e acessíveis.</li>
                  <li>Colaboração em projetos de equipe utilizando ferramentas de versionamento.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Projetos em Destaque</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Subcultura reggae</CardTitle>
                  <CardDescription>Projeto pessoal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02] w-full h-[240px] md:h-[270px]">
                    <Image 
                      src="/fotografia-reggae.webp" 
                      alt="Fotografia Reggae" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                  Site aonde exploro a subcultura reggae, sua música, valores e influência cultural
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      HTML5
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      CSS3
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      Responsivo
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full relative overflow-hidden group bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">Ver Projeto</span>
                      <span className="absolute inset-0 bg-brand-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Plataforma de criação Websites</CardTitle>
                  <CardDescription>Soluções para criação de websites b2b</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02] w-full h-[240px] md:h-[270px]">
                    <Image
                      src="/nuuvik.webp"
                      alt="Rede Empresarial"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Auxiliando o time de desenvolvimento da Nuuvik na criação de websites b2b.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      UX/UI
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      React
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://nuuvik.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full relative overflow-hidden group bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">Ver Projeto</span>
                      <span className="absolute inset-0 bg-brand-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Sistema de Help Desk</CardTitle>
                  <CardDescription>Plataforma de suporte técnico</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02] w-full h-[240px] md:h-[270px]">
                    <Image 
                      src="/help-desk-support-system.png" 
                      alt="Sistema Help Desk" 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Desenvolvimento de sistema web para Capacitação de Técnicos N1, N2 e N3 da TVM com trilhas guiadas e material prático.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      Web Development
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      UX/UI
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      Redes
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://script4.store/tvm/suporte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full relative overflow-hidden group bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="relative z-10">Ver Projeto</span>
                      <span className="absolute inset-0 bg-brand-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center mr-2">
                      <span className="text-brand-900 dark:text-brand-300 text-sm font-bold">NET</span>
                    </span>
                    Redes de Computadores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
                    >
                      TCP/IP
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
                    >
                      Cisco
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
                    >
                      VLAN
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
                    >
                      Switches
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
                    >
                      Roteadores
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
                    >
                      Firewall
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
                    >
                      VPN
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-brand-100 dark:hover:bg-brand-900/50 transition-colors"
                    >
                      Wi-Fi
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">WEB</span>
                    </span>
                    Desenvolvimento Web
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      HTML5
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      CSS3
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Responsive Design
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Git/GitHub
                    </Badge>

                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">SYS</span>
                    </span>
                    Sistemas e Infraestrutura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Windows Server
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Linux
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Troubleshooting
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">SOFT</span>
                    </span>
                    Ferramentas e Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Microsoft Office
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Google Workspace
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Trabalho em Equipe
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Comunicação
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Apresentações
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Resolução de Problemas
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Adaptabilidade
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Aprendizagem Rápida
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Skills Tags */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Tecnologias Adicionais</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-brand-50 dark:bg-brand-900/20 border-brand-200 dark:border-brand-800 hover:bg-brand-100 dark:hover:bg-brand-900/40 transition-colors"
                >
                  Packet Tracer
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-brand-50 dark:bg-brand-900/20 border-brand-200 dark:border-brand-800 hover:bg-brand-100 dark:hover:bg-brand-900/40 transition-colors"
                >
                  GNS3
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  PRTG
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                  pfSense
                </Badge>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Formação e Certificações</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Formação Acadêmica</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">Curso Superior de Tecnologia em Redes de Computadores</h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        CENTRO UNIVERSITÁRIO UFBRA
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2025 - 2028</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Disciplinas Relevantes:</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="animate-pulse">
                        Fundamentos de Redes
                      </Badge>
                      <Badge variant="secondary">Protocolos de Comunicação</Badge>
                      <Badge variant="secondary" className="animate-pulse">
                        Segurança da Informação
                      </Badge>
                      <Badge variant="secondary">Administração de Sistemas</Badge>
                      <Badge variant="secondary" className="animate-pulse">
                        Cabeamento Estruturado
                      </Badge>
                      <Badge variant="secondary">Roteamento e Switching</Badge>
                      <Badge variant="secondary" className="animate-pulse">
                        Gerência de Redes
                      </Badge>
                      <Badge variant="secondary">Virtualização</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">ETEC PARQUE BELÉM</h4>
                      <p className="text-purple-600 dark:text-purple-400">T.I : Técnico de Informática para Internet.</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2023 - 2024</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Disciplinas Relevantes:</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Desenvolvimento Web</Badge>
                      <Badge variant="secondary">Programação</Badge>
                      <Badge variant="secondary">Banco de Dados</Badge>
                      <Badge variant="secondary">Design Digital</Badge>
                      <Badge variant="secondary">Sistemas Operacionais</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
<AnimatedSection direction="right" delay={0.3}>
  <h3 className="text-2xl font-bold mb-6">Experiência com Tecnologias de Redes e Virtualização</h3>
  <div className="space-y-4">
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
      <h4 className="font-semibold">Simulações com GNS3</h4>
      <p className="text-gray-600 dark:text-gray-400">
        Experiência na criação de laboratórios virtuais usando o GNS3 com imagens reais de roteadores e firewalls Cisco. 
        Configuração de topologias complexas, incluindo OSPF, VLANs, ACLs, NAT, VPNs e simulações de ambientes corporativos.
      </p>
    </div>
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
      <h4 className="font-semibold">Cisco Packet Tracer</h4>
      <p className="text-gray-600 dark:text-gray-400">
        Utilização do Cisco Packet Tracer para simular redes em ambientes de estudo e ensino. 
        Criação de cenários com switches, roteadores e dispositivos finais para praticar protocolos como RIP, OSPF, DHCP, STP e redes IPv6.
      </p>
    </div>
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
      <h4 className="font-semibold">Virtualização com Proxmox</h4>
      <p className="text-gray-600 dark:text-gray-400">
        Implantação e gerenciamento de ambientes virtuais usando Proxmox VE. 
        Criação de máquinas virtuais e containers LXC para testes de redes, servidores e sistemas Linux. 
        Experiência com snapshots, templates, VLANs e bridges virtuais.
      </p>
    </div>
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
      <h4 className="font-semibold">Administração de Sistemas com Debian</h4>
      <p className="text-gray-600 dark:text-gray-400">
        Instalação e configuração de servidores Linux baseados em Debian para fins de laboratório e uso pessoal. 
        Experiência com serviços como DHCP, DNS, Apache/Nginx, firewall UFW, SSH, e automação de tarefas com shell script.
      </p>
    </div>
  </div>
</AnimatedSection>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
          </AnimatedSection>

          <div className="flex justify-center">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6 text-center max-w-md">
                <h3 className="text-xl font-semibold">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-brand-900 mr-3" />
                    <a
                      href="mailto:sabrina.silva@email.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-brand-900 dark:hover:text-brand-700 transition-colors"
                    >
                      sabriina.silva91@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-brand-900 mr-3" />
                    <a
                      href="https://www.linkedin.com/in/sabrinasilvaferreira/"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-brand-900 dark:hover:text-brand-700 transition-colors"
                      rel="noreferrer"
                    >
                      Perfil no LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center justify-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-brand-900 mr-3" />
                    <a
                      href="https://github.com/wi3li"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-brand-900 dark:hover:text-brand-700 transition-colors"
                      rel="noreferrer"
                    >
                      Perfil no GitHub
                    </a>
                  </div>
                  <div className="flex items-center justify-center hover:translate-x-1 transition-transform duration-300">
                    <MessageCircle className="w-5 h-5 text-brand-900 mr-3" />
                    <a
                      href="https://api.whatsapp.com/send/?phone=5511942004944&text=Ol%C3%A1+Sabrina%2C+tudo+bem%3F&type=phone_number&app_absent=0"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-brand-900 dark:hover:text-brand-700 transition-colors"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Estou sempre aberta para discutir novos projetos, oportunidades ou parcerias. Sinta-se à vontade
                    para entrar em contato!
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Sabrina Silva Ferreira de Lima</h2>
              <p className="text-gray-400">Especialista em Redes de Computadores</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/sabrinasilvaferreira/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/wi3li"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=5511942004944&text=Ol%C3%A1+Sabrina%2C+tudo+bem%3F&type=phone_number&app_absent=0"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:sabrina.silva@email.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Sabrina Silva Ferreira de Lima. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
