import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <li>Suporte técnico especializado em infraestrutura de TI para pequenas e médias empresas.</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-brand-900 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Desenvolvedora Web Junior</h3>
                    <p className="text-brand-900 dark:text-brand-700 font-medium">Projetos Acadêmicos</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2022 - 2023</p>
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
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Sistema de Monitoramento de Rede</CardTitle>
                  <CardDescription>Solução para monitoramento em tempo real</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/network-monitoring-dashboard.png"
                      alt="Sistema de Monitoramento"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Desenvolvimento de um sistema web para monitoramento de dispositivos de rede, com alertas em tempo
                    real e relatórios de performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      HTML/CSS
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      JavaScript
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
                  <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">Ver Projeto</span>
                    <span className="absolute inset-0 bg-brand-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Portal Corporativo</CardTitle>
                  <CardDescription>Interface web para gestão interna</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/corporate-web-portal.jpg" alt="Portal Corporativo" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Criação de um portal web responsivo para gestão de recursos internos da empresa, com foco na
                    experiência do usuário e acessibilidade.
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
                  <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">Ver Projeto</span>
                    <span className="absolute inset-0 bg-brand-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Configuração de Rede Empresarial</CardTitle>
                  <CardDescription>Infraestrutura completa de rede</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/network-infrastructure-diagram.jpg"
                      alt="Rede Empresarial"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Projeto e implementação de infraestrutura de rede para empresa de médio porte, incluindo segmentação
                    de rede e políticas de segurança.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      Cisco
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      VLAN
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-brand-100/50 dark:bg-brand-900/50 hover:bg-brand-200 transition-colors duration-300"
                    >
                      Segurança
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">Ver Projeto</span>
                    <span className="absolute inset-0 bg-brand-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
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
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/help-desk-support-system.jpg" alt="Sistema Help Desk" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Desenvolvimento de sistema web para gerenciamento de chamados de suporte técnico, com interface
                    intuitiva e sistema de priorização.
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
                      Suporte
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">Ver Projeto</span>
                    <span className="absolute inset-0 bg-brand-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button>
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
                      Bootstrap
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
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      WordPress
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      PHP Básico
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
                      Active Directory
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      VMware
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Backup & Recovery
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Monitoramento
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Troubleshooting
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Documentação
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
                  className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  Wireshark
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  PRTG
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors"
                >
                  Nagios
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                  pfSense
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
                >
                  Ubiquiti
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
                >
                  Mikrotik
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
                >
                  Zabbix
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
                >
                  MySQL
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors"
                >
                  ITIL
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
                      <h4 className="text-xl font-semibold">Tecnologia em Redes de Computadores</h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        Instituto Federal de Educação, Ciência e Tecnologia
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2022 - 2024</p>
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
                      <h4 className="text-xl font-semibold">Técnico em Informática para Internet</h4>
                      <p className="text-purple-600 dark:text-purple-400">Escola Técnica Estadual</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2020 - 2022</p>
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
              <h3 className="text-2xl font-bold mb-6">Certificações e Cursos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">CCNA - Cisco Certified Network Associate</h4>
                  <p className="text-gray-600 dark:text-gray-400">Fundamentos de redes Cisco e protocolos</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">CompTIA Network+</h4>
                  <p className="text-gray-600 dark:text-gray-400">Certificação em infraestrutura de redes</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Desenvolvimento Web Responsivo - FreeCodeCamp</h4>
                  <p className="text-gray-600 dark:text-gray-400">HTML, CSS, JavaScript e design responsivo</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">ITIL Foundation</h4>
                  <p className="text-gray-600 dark:text-gray-400">Gerenciamento de serviços de TI</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 md:col-span-2 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Melhor Projeto TCC - Redes de Computadores</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reconhecimento pelo projeto de implementação de rede empresarial
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-brand-900 mr-3" />
                    <a
                      href="mailto:sabrina.silva@email.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-brand-900 dark:hover:text-brand-700 transition-colors"
                    >
                      sabriina.silva91@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
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
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
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
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Estou sempre aberta para discutir novos projetos, oportunidades ou parcerias. Sinta-se à vontade
                    para entrar em contato!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
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
