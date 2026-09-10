"use client";

import React, { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { Input } from "../lightswind/input";
import { Textarea } from "../lightswind/textarea";
import { Button } from "../lightswind/button";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    emailjs
      .sendForm(serviceID, templateID, form.current!, publicKey)
      .then(() => {
        toast.success("Message sent successfully!");

        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[3rem] border border-foreground/10 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>

              <p className="text-muted-foreground">
                Currently open for new opportunities and exciting
                collaborations. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:sameerprogrammer5@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>

                <span className="font-medium">sameerprogrammer5@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+923296333301"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>

                <span className="font-medium">+92 329 63333 01</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>

                <span className="font-medium">Lahore, Punjab Pakistan</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 glass-panel p-8 rounded-[2rem] border border-foreground/10 relative">
            <form ref={form} className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Name
                </label>

                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Your Email
                </label>

                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary placeholder:text-muted-foreground/50"
                  placeholder="john@example.com"
                  disabled={loading}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Message
                </label>

                <Textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="rounded-xl py-3 px-4 bg-foreground/5 border-foreground/10 text-foreground focus-visible:ring-primary resize-none placeholder:text-muted-foreground/50 min-h-[120px]"
                  placeholder="How can I help you?"
                  disabled={loading}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full rounded-xl bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] mt-4 h-12"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
