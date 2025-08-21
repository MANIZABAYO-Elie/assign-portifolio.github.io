"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm John's AI assistant. I can answer questions about his skills, projects, and experience. How can I help you?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const faqs = {
    skills:
      "John specializes in React, TypeScript, Next.js, Node.js, Python, and PostgreSQL. He also has experience with AWS, Docker, and modern web development practices.",
    experience:
      "John has over 5 years of experience as a full-stack developer, currently working as a Senior Full Stack Developer at Tech Innovations Inc.",
    projects:
      "John has built several notable projects including an e-commerce platform, task management app, and weather dashboard. You can see them in the Projects section above.",
    contact:
      "You can reach John at john.doe@example.com or +1 (555) 123-4567. He's also available on LinkedIn and GitHub.",
    education:
      "John graduated Magna Cum Laude with a Bachelor of Science in Computer Science from the University of Technology.",
    location: "John is based in San Francisco, CA and is open to both remote and local opportunities.",
  }

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    for (const [key, response] of Object.entries(faqs)) {
      if (lowerInput.includes(key)) {
        return response
      }
    }

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return "Hello! I'm here to help you learn more about John. You can ask me about his skills, experience, projects, or how to contact him."
    }

    return "I'm not sure about that specific question, but I can tell you about John's skills, experience, projects, education, or contact information. What would you like to know?"
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getResponse(inputValue),
      isUser: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botResponse])
    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-heading text-lg">Chat with John's AI</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        message.isUser ? "bg-primary" : "bg-muted"
                      }`}
                    >
                      {message.isUser ? (
                        <User className="h-3 w-3 text-primary-foreground" />
                      ) : (
                        <Bot className="h-3 w-3 text-muted-foreground" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 text-sm ${
                        message.isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about John's skills, projects..."
                  className="flex-1"
                />
                <Button onClick={handleSend} size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
