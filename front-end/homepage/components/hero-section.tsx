"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Eye, ArrowDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText, ClientMotion } from "@/components/client-animations"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <AnimatedText
                text="Sabrina Silva Ferreira de Lima"
                className="text-4xl md:text-5xl font-bold tracking-tight"
              />
              <AnimatedText
                text="Especialista em Redes de Computadores"
                className="text-2xl md:text-3xl font-semibold mt-2 text-purple-600 dark:text-purple-400 bg-gradient-to-r from-brand-900 to-blue-600 bg-clip-text text-transparent"
                once={true}
              />
            </div>
            <ClientMotion
              className="text-lg text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Especializada em configuração, manutenção e segurança de redes, com experiência em desenvolvimento web e
              sólidos conhecimentos em infraestrutura de TI.
            </ClientMotion>
            <ClientMotion
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button asChild className="bg-brand-900 hover:bg-brand-800 text-white border-0">
                <Link href="https://wa.me/5511942004944?text=Ol%C3%A1%20Sabrina%2C%20tudo%20bem%3F" target="_blank">Entre em Contato</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="bg-brand-900 hover:bg-brand-800 text-white border-0"
              >
                <Link href="#projects">Ver Projetos</Link>
              </Button>
              <Button
                variant="secondary"
                asChild
                className="border-brand-900 text-brand-900 hover:bg-brand-900 hover:text-white bg-transparent dark:border-brand-700 dark:text-brand-700 dark:hover:bg-brand-700 dark:hover:text-white"
              >
                <Link href="/documents/sabrina-silva-curriculo.pdf" target="_blank">
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Currículo
                </Link>
              </Button>
            </ClientMotion>
            <ClientMotion
              className="flex gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="https://www.linkedin.com/in/sabrinasilvaferreira/"
                target="_blank"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/wi3li"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:sabriina.silva91@gmail.com"
                className="text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=5511942004944&text=Ol%C3%A1+Sabrina%2C+tudo+bem%3F&type=phone_number&app_absent=0"
                target="_blank"
                className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors transform hover:scale-110 duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </Link>
            </ClientMotion>
          </div>
          <ClientMotion
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/image/profile.webp"
                alt="Sabrina Silva Ferreira de Lima"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 320px"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-blue-600/20 mix-blend-overlay" />
            </div>
          </ClientMotion>
        </div>

        <ClientMotion
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
            href="#about"
            className="text-gray-400 hover:text-brand-900 dark:hover:text-brand-700 transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </Link>
        </ClientMotion>
      </div>
    </section>
  )
}
