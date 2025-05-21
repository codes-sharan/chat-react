"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, ShieldCheck, Bot, Sparkles, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Military-Grade Security",
      description:
        "End-to-end encryption ensures your conversations stay private and secure.",
      className: "hover:border-blue-500/50",
    },
    {
      icon: Rocket,
      title: "Lightning Fast",
      description:
        "Real-time messaging with sub-second latency across the globe.",
      className: "hover:border-purple-500/50",
    },
    {
      icon: Users,
      title: "Smart Connections",
      description: "AI-powered suggestions for relevant contacts and groups.",
      className: "hover:border-green-500/50",
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description:
        "Integrated chatbot helps with scheduling, reminders, and smart replies.",
      className: "hover:border-pink-500/50",
    },
    {
      icon: Sparkles,
      title: "Smart Formatting",
      description: "Automatic markdown, code highlighting, and media previews.",
      className: "hover:border-orange-500/50",
    },
    {
      icon: Clock,
      title: "Message Scheduling",
      description: "Perfect timing with scheduled messages and reminders.",
      className: "hover:border-yellow-500/50",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Why Choose SP-Chat?
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your communication experience with enterprise-grade
            features wrapped in an intuitive interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={cn(
                  "p-6 bg-white/50 backdrop-blur-sm border-2 border-transparent",
                  "transition-all hover:shadow-lg group",
                  feature.className
                )}
              >
                <div className="flex gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="group rounded-full px-8 py-6 border-2 hover:border-blue-500"
          >
            <a href="#">
              <Rocket className="w-4 h-4 mr-2 text-blue-500 group-hover:animate-pulse" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Explore All Features
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
