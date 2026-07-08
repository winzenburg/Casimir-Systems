import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service: Casimir Systems',
  description: 'Terms of service for Casimir Systems and the Casimir Intelligence platform.',
  alternates: { canonical: 'https://www.casimirsystems.com/terms' },
};

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing or using this website or any Casimir Systems product, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use our services.`,
  },
  {
    title: 'Use of Services',
    body: `Casimir Systems provides AI-powered decision support applications for U.S. government and defense organizations. Access to the Casimir Intelligence platform is governed by individual contracts, memoranda of agreement, or authorized demonstration arrangements. Unauthorized access or use is strictly prohibited.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content, software, and technology on this website and within Casimir Systems products, including but not limited to the Casimir Intelligence platform, its algorithms, user interfaces, and documentation, are the proprietary property of Casimir Systems, Inc. and are protected by applicable intellectual property laws. SBIR Data Rights apply as specified in applicable DFARS clauses.`,
  },
  {
    title: 'Government Rights',
    body: `Software and technical data delivered under SBIR contracts are subject to SBIR data rights as set forth in DFARS 252.227-7018 and the contract-specific data rights legend. The Government's rights to use, reproduce, or disclose such data are restricted during the protection period specified in the applicable contract.`,
  },
  {
    title: 'Disclaimer of Warranties',
    body: `This website and its content are provided "as is" without warranty of any kind, express or implied. Casimir Systems makes no warranties regarding the accuracy, completeness, or suitability of any information on this site for any particular purpose. Platform warranties and SLAs are defined in individual government contracts.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the maximum extent permitted by applicable law, Casimir Systems shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services. Total liability shall not exceed amounts paid under the applicable contract in the preceding twelve months.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms are governed by the laws of the State of Colorado, without regard to conflict of law principles, except where federal law applies by virtue of government contracting obligations. Disputes shall be resolved in the appropriate federal or state courts located in Denver, Colorado.`,
  },
  {
    title: 'Changes to Terms',
    body: `We reserve the right to modify these Terms at any time. We will notify users of material changes by updating the date at the top of this page. Continued use of our services after changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: 'Contact',
    body: `Questions about these Terms of Service should be directed to legal@casimirsystems.com or via the contact form at casimirsystems.com/contact.`,
  },
];

export default function TermsPage() {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      <section className="pt-36 pb-20 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-[#2563EB] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Legal</div>
          <h1 className="text-white font-bold mb-4" style={{ fontSize: 'clamp(28px,3vw,42px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.025em' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15 }}>
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-semibold text-[#0B132B] mb-3" style={{ fontSize: 18, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>
                {s.title}
              </h2>
              <p className="text-[#64748B] leading-relaxed" style={{ fontSize: 15, fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.8 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
