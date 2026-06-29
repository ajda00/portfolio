"use client";

import { useRef, useState } from "react";
import { getDictionary } from "../../lib/i18n";
import type { Lang } from "../../lib/types";
import SectionReveal from "../SectionReveal";

interface Props {
  lang: Lang;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact({ lang }: Props) {
  const l = getDictionary(lang);
  const sectionId = l.nav.items[3];

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (id === "email" && emailError) setEmailError(false);
  };

  const handleEmailBlur = () => {
    if (formData.email && !emailRegex.test(formData.email)) {
      setEmailError(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: l.contact.fillAll,
      });
      nameRef.current?.focus();
      return;
    }
    if (!formData.email) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: l.contact.fillAll,
      });
      emailRef.current?.focus();
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setEmailError(true);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: l.contact.invalidEmail,
      });
      emailRef.current?.focus();
      return;
    }
    if (!formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: l.contact.fillAll,
      });
      messageRef.current?.focus();
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: data.message || l.contact.success,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error instanceof Error ? error.message : l.contact.error,
      });
    }
  };

  return (
    <section id={sectionId} className="bg-app py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <SectionReveal className="text-center mb-12 md:mb-16">
          <h2
            className="font-display text-ink leading-[1.05] tracking-[-0.03em] mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            <span className="font-light">{l.contact.title.split(" ").slice(0, -1).join(" ")} </span>
            <span className="font-bold">{l.contact.title.split(" ").slice(-1)[0]}</span>
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-[55ch] mx-auto">
            {l.contact.subtitle}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <form
            className="space-y-5 bg-bg-elev p-8 md:p-10 rounded-3xl shadow-soft"
            onSubmit={handleSubmit}
            noValidate
          >
            <div
              aria-live="polite"
              role={formStatus.isError ? "alert" : undefined}
              className={formStatus.message ? "" : "sr-only"}
            >
              {formStatus.message && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    formStatus.isError
                      ? "bg-red-50 text-red-700"
                      : "bg-yellow-soft text-ink"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[13px] font-medium text-muted mb-1.5"
                >
                  {l.contact.name}
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-line bg-app text-ink placeholder:text-muted-soft focus:ring-2 focus:ring-ink focus:border-transparent outline-none transition-all text-base"
                  placeholder={l.contact.namePlaceholder}
                  disabled={formStatus.isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[13px] font-medium text-muted mb-1.5"
                >
                  {l.contact.email}
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleEmailBlur}
                  aria-invalid={emailError || undefined}
                  aria-describedby={emailError ? "email-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl border bg-app text-ink placeholder:text-muted-soft focus:ring-2 focus:border-transparent outline-none transition-all text-base ${
                    emailError
                      ? "border-red-300 focus:ring-red-500"
                      : "border-line focus:ring-ink"
                  }`}
                  placeholder={l.contact.emailPlaceholder}
                  disabled={formStatus.isSubmitting}
                />
                {emailError && (
                  <p
                    id="email-error"
                    className="mt-1.5 text-[12px] text-red-600"
                  >
                    {l.contact.invalidEmail}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[13px] font-medium text-muted mb-1.5"
              >
                {l.contact.message}
              </label>
              <textarea
                ref={messageRef}
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-line bg-app text-ink placeholder:text-muted-soft focus:ring-2 focus:ring-ink focus:border-transparent outline-none transition-all text-base"
                placeholder={l.contact.messagePlaceholder}
                disabled={formStatus.isSubmitting}
              />
            </div>
            <button
              type="submit"
              className="press inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-ink text-white font-medium text-[14px] hover:opacity-90 disabled:opacity-50"
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting && (
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                    opacity="0.25"
                  />
                  <path
                    d="M22 12a10 10 0 0 1-10 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
              {formStatus.isSubmitting ? l.contact.sending : l.contact.send}
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
