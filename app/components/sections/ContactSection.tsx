"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Github, Linkedin, LoaderCircle, Mail, MapPin, Send } from "lucide-react";
import { AnimatedSectionHeading, Reveal3D, TiltCard } from "../animations";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;
type SubmissionStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const controllerRef = useRef<AbortController | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      controllerRef.current?.abort();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};
    if (name.length < 2) nextErrors.name = "Please enter your name (at least 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (message.length < 10) nextErrors.message = "Tell me a little more (at least 10 characters).";
    setErrors(nextErrors);
    setFeedback("");
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      (form.elements.namedItem(Object.keys(nextErrors)[0]) as HTMLElement | null)?.focus();
      return;
    }
    if (formData.get("website")) {
      setStatus("error");
      setFeedback("Your message could not be sent. Please contact me by email instead.");
      return;
    }

    setStatus("sending");
    setFeedback("");
    const controller = new AbortController();
    controllerRef.current = controller;
    timerRef.current = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: "37a16755-1c8a-4365-b289-1c903543c7d5", name, email, message }),
        signal: controller.signal,
      });
      const result: { success?: boolean } = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Message delivery was not confirmed.");
      if (!mountedRef.current) return;
      setStatus("success");
      setFeedback("Your message was sent. Thank you for reaching out — I’ll get back to you soon.");
      form.reset();
    } catch {
      if (!mountedRef.current) return;
      setStatus("error");
      setFeedback(controller.signal.aborted ? "The request timed out. Please try again, or use the email link." : "Your message could not be sent. Please try again, or contact me by email.");
    } finally {
      if (timerRef.current) clearTimeout(timerRef.current);
      controllerRef.current = null;
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-ambient" aria-hidden="true" />
      <div className="shell">
        <AnimatedSectionHeading number="07" eyebrow="LET’S MAKE SOMETHING GREAT" title="Have an idea? Let’s build something extraordinary." />
        <div className="contact-layout">
          <Reveal3D direction="left" className="contact-copy">
            <p>Have a project in mind, an interesting opportunity, or just want to say hello? I’d love to hear from you.</p>
            <a className="contact-email" href="mailto:rehmanbaig456@gmail.com"><span>rehmanbaig456@gmail.com</span><ArrowUpRight size={21} aria-hidden="true" /></a>
            <span className="contact-location"><MapPin size={15} aria-hidden="true" /> Based in Karachi, Pakistan</span>
            <div className="contact-socials">
              <a href="https://github.com/AbdulRehmanBaig384" target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/abdul-rehman-baig-/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
              <a href="mailto:rehmanbaig456@gmail.com"><Mail size={18} aria-hidden="true" /> Email <ArrowUpRight size={14} aria-hidden="true" /></a>
            </div>
            <div className="contact-signoff" aria-hidden="true">Good things start<br />with a conversation<span>.</span></div>
          </Reveal3D>
          <Reveal3D direction="right" delay={0.1}>
            <TiltCard className="contact-form-tilt">
              <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact Abdul Rehman" aria-busy={status === "sending"}>
                <div className="contact-form-heading"><span>Start a conversation</span><ArrowUpRight size={20} aria-hidden="true" /></div>
                <div className="contact-form-row">
                  <div className="contact-field"><label htmlFor="contact-name">Your name <span>*</span></label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="What should I call you?" required minLength={2} maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "contact-name-error" : undefined} disabled={status === "sending"} />{errors.name && <span className="contact-field-error" id="contact-name-error">{errors.name}</span>}</div>
                  <div className="contact-field"><label htmlFor="contact-email">Email address <span>*</span></label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} disabled={status === "sending"} />{errors.email && <span className="contact-field-error" id="contact-email-error">{errors.email}</span>}</div>
                </div>
                <div className="contact-field"><label htmlFor="contact-message">What are you thinking? <span>*</span></label><textarea id="contact-message" name="message" rows={5} placeholder="A little about your project, idea, or opportunity…" required minLength={10} maxLength={5000} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} disabled={status === "sending"} />{errors.message && <span className="contact-field-error" id="contact-message-error">{errors.message}</span>}</div>
                <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty</label><input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
                <div className={`contact-feedback ${status === "error" ? "contact-feedback-error" : ""}`} role="status" aria-live="polite" aria-atomic="true">{feedback && <>{status === "success" && <CheckCircle2 size={18} aria-hidden="true" />}<span>{feedback}</span></>}</div>
                <button className="button button-primary contact-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? <><LoaderCircle className="contact-spinner" size={17} aria-hidden="true" />Sending your message…</> : <>Send message<Send size={16} aria-hidden="true" /></>}</button>
                <p className="contact-form-note">A project, an opportunity, or a hello. All welcome.</p>
              </form>
            </TiltCard>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}
