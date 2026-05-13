'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/scroll-reveal';

const ROLES = ['S&T Analyst', 'Contracting Officer', 'Innovation Leader / Program Manager', 'Researcher / Academic', 'Investor / VC', 'Other'];

const STEPS = [
  { step: '01', title: 'Intake Review', desc: 'Your access request is reviewed within 1 business day.' },
  { step: '02', title: 'Scoped Demo', desc: 'A 45-minute Casimir Intelligence demonstration tailored to your S&T domain.' },
  { step: '03', title: 'Pilot Access', desc: 'Qualifying organizations receive 30-day pilot access to the full platform.' },
];

interface FormState {
  name: string;
  org: string;
  role: string;
  email: string;
  message: string;
}

const INPUT_STYLE = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #CBD5E1',
  borderRadius: 6,
  fontSize: 14,
  fontFamily: 'IBM Plex Sans, sans-serif',
  color: '#0B132B',
  outline: 'none',
  background: '#fff',
  boxSizing: 'border-box' as const,
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', org: '', role: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json() as { error?: string };
      if (!res.ok) throw new Error(json.error ?? 'Submission failed.');
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    (e.target as HTMLElement).style.borderColor = '#2563EB';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    (e.target as HTMLElement).style.borderColor = '#CBD5E1';
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Request Access · Casimir Intelligence</div>
            <h1 className="font-extrabold text-white mb-5" style={{ fontSize: 'clamp(36px,4vw,56px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Access Casimir Intelligence.
            </h1>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
              Complete this form and the Casimir Systems team will reach out within one business day to schedule a platform demonstration.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left sidebar */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#0B132B] mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>What to expect</h3>
            {STEPS.map((s, i) => (
              <div key={i} className="flex gap-4 mb-7">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold text-white" style={{ background: '#0B132B', fontFamily: 'Inter, sans-serif' }}>{s.step}</div>
                <div>
                  <div className="text-[14px] font-semibold text-[#0B132B] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{s.title}</div>
                  <div className="text-[13px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
            <div className="rounded-xl p-4 text-[12px] text-[#334155]" style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>
              All information provided is handled under CUI/FOUO protocols by Casimir Systems. This form does not transmit classified information.
            </div>
          </div>

          {/* Form card */}
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="rounded-2xl p-10" style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                {/* Text fields */}
                {([
                  { id: 'name' as keyof FormState, label: 'Full Name', type: 'text', placeholder: 'Dr. Jane Smith', required: true },
                  { id: 'org' as keyof FormState, label: 'Organization', type: 'text', placeholder: 'U.S. Space Force, Task Force Futures', required: true },
                  { id: 'email' as keyof FormState, label: 'Government or Institutional Email', type: 'email', placeholder: 'jane.smith@spaceforce.mil', required: true },
                ]).map((field) => (
                  <div key={field.id} className="mb-5">
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                      {field.label} {field.required && <span className="text-[#EF4444]">*</span>}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={form[field.id]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      style={INPUT_STYLE}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                ))}

                {/* Role select */}
                <div className="mb-5">
                  <label className="block text-[13px] font-medium text-[#334155] mb-1.5" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    Role <span className="text-[#EF4444]">*</span>
                  </label>
                  <select
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    style={{ ...INPUT_STYLE, color: form.role ? '#0B132B' : '#94A3B8' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled>Select your role...</option>
                    {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-7">
                  <label className="block text-[13px] font-medium text-[#334155] mb-1.5" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    What S&T domain are you most interested in?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g., Directed energy, hypersonics, autonomous systems, satellite communications..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...INPUT_STYLE, resize: 'vertical' }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                {/* Error */}
                {submitError && (
                  <div className="mb-5 rounded-md px-4 py-3 text-[13px] text-[#DC2626]" style={{ background: '#FEF2F2', border: '1px solid #FECACA', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-md font-medium text-white transition-all duration-200"
                  style={{
                    background: '#2563EB',
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontSize: 15,
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    border: 'none',
                  }}
                >
                  {submitting ? 'Submitting…' : 'Request Access to Casimir Intelligence'}
                </button>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl p-12 text-center" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#F0FDF4', border: '2px solid rgba(16,185,129,0.3)' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l6 6 12-12" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 className="text-[22px] font-bold text-[#0B132B] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Request Received.</h3>
              <p className="text-[15px] text-[#64748B]" style={{ fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
                The Casimir Systems team will review your intake and reach out within one business day to schedule a scoped demonstration.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
