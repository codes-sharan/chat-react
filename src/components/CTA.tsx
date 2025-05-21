"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, MessageSquare, Shield, Sparkles } from "lucide-react";
// import { cn } from "@/lib/utils";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute border-2 border-blue-200/30 rounded-full"
            style={{
              width: Math.random() * 60 + 20 + "px",
              height: Math.random() * 60 + 20 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-16 shadow-2xl">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Transform Your
                <span className="block mt-2 bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                  Communication?
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-blue-100 max-w-2xl mx-auto"
            >
              Join thousands of teams already revolutionizing their
              communication with SP-Chat. Secure, efficient, and delightful
              messaging awaits.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                asChild
                className="gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-8 py-6"
              >
                <a href="#">
                  <Rocket className="w-5 h-5" />
                  <span className="text-lg font-semibold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Get Started Free
                  </span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="gap-2 rounded-full px-8 py-6 border-white/20 text-gray-800 hover:bg-white/10"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-lg">Schedule Demo</span>
              </Button>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              {[
                { icon: Shield, text: "Enterprise Security" },
                { icon: MessageSquare, text: "Real-Time Chat" },
                { icon: Sparkles, text: "AI Features" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm"
                >
                  <feature.icon className="w-4 h-4 text-blue-200" />
                  <span className="text-sm text-blue-100">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
