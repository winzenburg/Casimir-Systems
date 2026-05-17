import type { Metadata } from 'next';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security Posture — Casimir Systems',
  description: 'Security architecture, compliance posture, and data handling practices for Casimir Systems and the Casimir Intelligence platform.',
  alternates: { canonical: 'https://www.casimirsystems.com/security' },
};

const FRAMEWORKS = [
  { label: 'NIST SP 800-171', desc: 'Protecting Controlled Unclassified Information in Nonfederal Systems' },
  { label: 'CMMC Level 2',    desc: 'Cybersecurity Maturity Model Certification — Advanced Practices' },
  { label: 'DFARS 252.204-7012', desc: 'Safeguarding Covered Defense Information and Cyber Incident Reporting' },
  { label: 'CUI / FOUO',     desc: 'Controlled Unclassified Information and For Official Use Only handling' },
  { label: 'OMB M-26-04',    desc: 'Responsible AI use in federal agency decision-making' },
  { label: 'SBIR Data Rights', desc: 'IP protection per DFARS 252.227-7018 and applicable SBIR clauses' },
];

const CONTROLS = [
  {
    icon: Lock,
    title: 'Access Control',
    items: [
      'Role-based access control (RBAC) with least-privilege enforcement',
      'Multi-factor authentication required for all platform access',
      'Session management with configurable timeout policies',
      'Full audit trail on every data access and mutation event',
    ],
  },
  {
    icon: Eye,
    title: 'Data Handling',
    items: [
      'CUI and FOUO data handled in accordance with NIST 800-171 §3.1–3.14',
      'Data encrypted at rest (AES-256) and in transit (TLS 1.3)',
      'No commingling of government data with commercial analytics systems',
      'Structured retention and deletion policies per contract requirements',
    ],
  },
  {
    icon: Shield,
    title: 'AI / LLM Governance',
    items: [
      'All LLM inputs and outputs logged in a tamper-evident audit log',
      'Model outputs are advisory only — human-in-the-loop for all decisions',
      'No training on government-provided data without explicit authorization',
      'OMB M-26-04 compliant AI use documentation maintained per contract',
    ],
  },
  {
    icon: FileCheck,
    title: 'Supply Chain & Vendor Risk',
    items: [
      'Authorized software bill of materials (SBOM) maintained for all components',
      'Third-party dependencies reviewed for FOCI exposure and known vulnerabilities',
      'Infrastructure hosted on FedRAMP-authorized cloud providers',
      'Incident response plan tested and maintained per DFARS 252.204-7012',
    ],
  },
];

export default function SecurityPage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Trust & Compliance</div>
          <h1 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}>
            Security Posture
          </h1>
          <p className="max-w-2xl" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, lineHeight: 1.75 }}>
            Casimir Systems is built compliance-first. Security and data handling requirements are not afterthoughts — they are baked into the architectural foundation of every system we ship.
          </p>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20 px-6 lg:px-10" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Applicable Frameworks</div>
          <h2 className="font-bold text-[#0B132B] mb-10" style={{ fontSize: 'clamp(22px,2.5vw,32px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
            Standards we architect against
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FRAMEWORKS.map((f) => (
              <div key={f.label} className="flex gap-4 p-5 rounded-xl" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: '#2563EB' }} />
                <div>
                  <div className="font-semibold text-[#0B132B] mb-1" style={{ fontSize: 14, fontFamily: 'Inter, sans-serif' }}>{f.label}</div>
                  <div className="text-[#64748B]" style={{ fontSize: 13, fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Controls */}
      <section className="py-20 px-6 lg:px-10" style={{ background: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Platform Controls</div>
          <h2 className="font-bold text-[#0B132B] mb-10" style={{ fontSize: 'clamp(22px,2.5vw,32px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
            How we protect your data
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CONTROLS.map(({ icon: Icon, title, items }) => (
              <div key={title} className="p-8 rounded-xl" style={{ background: '#fff', border: '1px solid #E2E8F0' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.15)' }}>
                    <Icon className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <h3 className="font-semibold text-[#0B132B]" style={{ fontSize: 16, fontFamily: 'Inter, sans-serif' }}>{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[#64748B]" style={{ fontSize: 13, fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.6 }}>
                      <span className="text-[#10B981] mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 lg:px-10 text-center" style={{ background: '#0B132B' }}>
        <div className="max-w-lg mx-auto">
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 24, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
            Security questions or concerns?
          </h2>
          <p className="mb-6" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, lineHeight: 1.75 }}>
            For security inquiries, vulnerability disclosures, or compliance documentation requests, contact us at{' '}
            <a href="mailto:security@casimirsystems.com" className="text-[#2563EB] hover:text-[#60a5fa] transition-colors">
              security@casimirsystems.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
