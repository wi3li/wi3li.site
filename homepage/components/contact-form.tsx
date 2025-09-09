"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { sendContactEmail } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigada pela sua mensagem. Retornarei em breve.",
          variant: "default",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast({
          title: "Erro",
          description: result.error || "Algo deu errado. Tente novamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Falha ao enviar mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <motion.form
      className="space-y-4"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nome
          </label>
          <motion.input
            id="name"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-900 dark:bg-gray-800"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
            whileFocus="focus"
            variants={inputVariants}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <motion.input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-900 dark:bg-gray-800"
            placeholder="Seu E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus="focus"
            variants={inputVariants}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Assunto
        </label>
        <motion.input
          id="subject"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-900 dark:bg-gray-800"
          placeholder="Assunto"
          value={formData.subject}
          onChange={handleChange}
          required
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensagem
        </label>
        <motion.textarea
          id="message"
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-900 dark:bg-gray-800"
          placeholder="Sua Mensagem"
          value={formData.message}
          onChange={handleChange}
          required
          whileFocus="focus"
          variants={inputVariants}
        ></motion.textarea>
      </div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button
          type="submit"
          className="w-full bg-brand-900 hover:bg-brand-800 text-white font-medium"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
        </Button>
      </motion.div>
    </motion.form>
  )
}
