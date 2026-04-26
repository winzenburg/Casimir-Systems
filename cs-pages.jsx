
// ── Casimir Systems: Page Components ─────────────────────────────────────────
// Company: Casimir Systems (AI defense contractor)
// Product: Casimir Intelligence (Space Force co-investment platform)

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
function HomePage({ onNavigate }) {
  const problems = [
    { label: 'Fragmented Intelligence', desc: 'S&T ecosystems span thousands of companies, patent filings, and investment signals. No single platform synthesizes them into actionable co-investment strategy.', icon: '◈' },
    { label: 'Opaque Risk Layers', desc: 'FOCI exposure, CMMC readiness, and TRL assessments exist in silos. Contracting officers face weeks of manual due diligence with no auditable trail.', icon: '⚑' },
    { label: 'Speed Mismatch', desc: 'Commercial innovation cycles in 18 months. DoD acquisition cycles in 18 years. Casimir Intelligence bridges that gap with real-time ecosystem synthesis.', icon: '⟳' },
  ];
  const competitors = [
    { name: 'Govini', type: 'Defense Analytics', note: 'Broad data platform. Complex, costly, requires dedicated analyst teams.' },
    { name: 'Strider Technologies', type: 'Entity Risk', note: 'Deep foreign influence detection. Not built for co-investment workflows.' },
    { name: 'Primer AI', type: 'NLP / Document AI', note: 'Strong document synthesis. Narrow scope, no ecosystem mapping.' },
    { name: 'Sayari', type: 'Corporate Intelligence', note: 'Ownership & entity resolution. No S&T or investment layer.' },
    { name: 'Accrete AI', type: 'Anomaly Detection', note: 'Open-source signal processing. Not purpose-built for acquisition.' },
    { name: 'Vannevar Labs', type: 'Agentic AI', note: 'Software-defined intelligence. Opaque reasoning, high integration cost.' },
    { name: 'Rebellion Defense', type: 'Defense Software', note: 'Broad mission software. Less focused on co-investment decision support.' },
    { name: '9-HI', type: 'Tech Selection', note: 'Closest competitor. Quantitative scoring, but limited ecosystem scope.' },
  ];
  const capabilities = [
    { title: 'Ecosystem Mapping', desc: 'Visualize the full S&T landscape — companies, investors, technologies, and relationships — in a dynamic, queryable network graph.', color: '#2563EB' },
    { title: 'Co-Investment Analysis', desc: 'Identify alignment between RDT&E priorities and private capital flows. Surface dual-use opportunities before the competition.', color: '#10B981' },
    { title: 'Institutional Risk Layers', desc: 'Multi-gate risk architecture: FOCI screening, CMMC readiness, TRL scoring, and supply chain exposure — all with full audit trails.', color: '#F59E0B' },
    { title: 'Zero-Code Interface', desc: 'Designed for S&T staff and contracting officers, not data scientists. Query, filter, and generate reports without writing a single line of code.', color: '#8B5CF6' },
  ];
  const trustStats = [
    { value: '2,847+', label: 'Companies Tracked' },
    { value: '$4.2B', label: 'Investment Flows Mapped' },
    { value: '99.7%', label: 'Synthesis Accuracy' },
    { value: '<4 hrs', label: 'Time to First Insight' },
  ];

  return (
    <div>
      {/* ── Hero: Company level ──────────────────────────────────────── */}
      <section data-screen-label="01 Hero" style={{
        minHeight: '100vh', background: '#0B132B', position: 'relative',
        display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 64,
      }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 600, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 40px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', width: '100%' }}>

          <div>
            {/* Company headline */}
            <h1 style={{ fontSize: 'clamp(36px, 4.5vw, 64px)', fontWeight: 800, color: '#fff',
              fontFamily: 'Inter, sans-serif', lineHeight: 1.1, letterSpacing: '-0.03em',
              marginBottom: 24, animation: 'heroReveal 0.7s 0.15s ease forwards', opacity: 0 }}>
              Building the Software<br />
              <span style={{ color: '#2563EB' }}>that Secures the Future.</span>
            </h1>

            {/* Company description */}
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif',
              lineHeight: 1.7, maxWidth: 480, marginBottom: 28,
              animation: 'heroReveal 0.7s 0.3s ease forwards', opacity: 0 }}>
              Casimir Systems is an agile defense technology firm specializing in AI-driven decision support and data synthesis — built for immediate operational impact, not multi-year deployments.
            </p>

            {/* Product callout chip */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
              padding: '8px 16px', borderRadius: 8, marginBottom: 36,
              animation: 'heroReveal 0.7s 0.35s ease forwards', opacity: 0, cursor: 'pointer' }}
              onClick={() => onNavigate('platform')}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB' }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Flagship product:
              </span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontFamily: 'Inter, sans-serif' }}>
                Casimir Intelligence
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>→</span>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap',
              animation: 'heroReveal 0.7s 0.45s ease forwards', opacity: 0 }}>
              <button className="btn-primary" onClick={() => onNavigate('contact')}
                style={{ padding: '14px 28px', fontSize: 15 }}>
                Request Platform Access
              </button>
              <button className="btn-secondary" onClick={() => onNavigate('platform')}
                style={{ padding: '14px 28px', fontSize: 15 }}>
                Explore Casimir Intelligence
              </button>
            </div>


          </div>

          {/* Right: network graph */}
          <div style={{ position: 'relative', animation: 'heroReveal 1s 0.4s ease forwards', opacity: 0 }}>
            <div style={{ position: 'absolute', inset: -20,
              background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <NetworkGraph width={560} height={440} dark={true} />
          </div>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────────────── */}
      <section data-screen-label="02 Problem" style={{ padding: '96px 40px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="The Challenge" center
              title="Intelligence exists. Synthesis doesn't."
              subtitle="DoD co-investment decisions require aligning fragmented commercial data, compliance requirements, and strategic priorities — in real time." />
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 56 }}>
            {problems.map((p, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div style={{ background: '#fff', borderRadius: 12, padding: 32,
                  border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow='var(--shadow-md)'; e.currentTarget.style.transform='translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow='var(--shadow-sm)'; e.currentTarget.style.transform='translateY(0)'; }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(37,99,235,0.08)', borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 20 }}>{p.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#0B132B', fontFamily: 'Inter, sans-serif', marginBottom: 12 }}>{p.label}</h3>
                  <p style={{ fontSize: 14, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Competitive Landscape ─────────────────────────────────────── */}
      <section data-screen-label="03 Landscape" style={{ padding: '96px 40px', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#2563EB', fontFamily: 'Inter, sans-serif', marginBottom: 12 }}>The Landscape</div>
                <h2 style={{ fontSize: 36, fontWeight: 700, color: '#0B132B',
                  fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 20 }}>
                  The market is crowded.<br />The whitespace is ours.
                </h2>
                <p style={{ fontSize: 16, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75, marginBottom: 28 }}>
                  Existing platforms are either too broad to be actionable, too narrow to drive decisions, or too complex for the acquisition workforce to use without dedicated engineering support.
                </p>
                <div style={{ background: 'linear-gradient(135deg, #0B132B, #1E2D4E)', borderRadius: 12,
                  padding: 24, border: '1px solid rgba(37,99,235,0.2)' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: 12 }}>Casimir Systems' Whitespace</div>
                  {[
                    'Zero-code interface — no engineering team required',
                    'Purpose-built for co-investment decision support',
                    'Full reasoning auditability — no black-box AI',
                    'USSF / TF-F workflow native',
                  ].map((pt, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(37,99,235,0.3)',
                        border: '1px solid rgba(37,99,235,0.5)', flexShrink: 0, marginTop: 2,
                        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#2563EB' }} />
                      </div>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitor table */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#64748B', letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: 16 }}>Competitive Landscape</div>
                <div style={{ border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden' }}>
                  {competitors.map((c, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr',
                      borderBottom: i < competitors.length - 1 ? '1px solid #E2E8F0' : 'none',
                      background: i % 2 === 0 ? '#fff' : '#F8FAFC' }}>
                      <div style={{ padding: '12px 16px', borderRight: '1px solid #E2E8F0' }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: '#0B132B', fontFamily: 'Inter, sans-serif' }}>{c.name}</div>
                        <div style={{ fontSize: 10, color: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', marginTop: 2, letterSpacing: '0.03em' }}>{c.type}</div>
                      </div>
                      <div style={{ padding: '12px 16px', fontSize: 12, color: '#64748B',
                        fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.55 }}>{c.note}</div>
                    </div>
                  ))}
                  {/* Casimir row — highlighted */}
                  <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr',
                    background: '#0B132B' }}>
                    <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', fontFamily: 'Inter, sans-serif' }}>Casimir Systems</div>
                      <div style={{ fontSize: 10, color: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif', marginTop: 2 }}>Co-Investment AI</div>
                    </div>
                    <div style={{ padding: '14px 16px', fontSize: 12, color: 'rgba(255,255,255,0.7)',
                      fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.55 }}>
                      Zero-code · USSF-native · Fully auditable · Purpose-built for co-investment.
                      <span style={{ color: '#10B981', fontWeight: 600 }}> The only platform that does this.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Product Introduction: Casimir Intelligence ────────────────── */}
      <section data-screen-label="04 Product" style={{ padding: '96px 40px', background: '#0B132B' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              {/* Product label — distinct from company */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)',
                padding: '4px 14px', borderRadius: 99, marginBottom: 20 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#2563EB',
                  textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Product</span>
                <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif' }}>by Casimir Systems</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, color: '#fff',
                fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
                Casimir Intelligence
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif',
                lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
                Automated intelligence fusion for Space Force co-investment decisions. A zero-code platform that synthesizes S&T ecosystem data into clear, auditable recommendations.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <PlatformMockup />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Capabilities of Casimir Intelligence ─────────────────────── */}
      <section data-screen-label="05 Capabilities" style={{ padding: '96px 40px', background: '#fff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="Casimir Intelligence · Capabilities" center
              title="Built for the speed of commercial innovation"
              subtitle="Four integrated capabilities purpose-built for U.S. Space Force Task Force Futures co-investment workflows." />
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 56 }}>
            {capabilities.map((c, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div style={{ borderRadius: 12, padding: 28, border: '1px solid #E2E8F0',
                  background: '#fff', transition: 'all 0.2s', cursor: 'default' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.boxShadow = `0 0 0 1px ${c.color}20, var(--shadow-md)`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: 4, height: 32, background: c.color, borderRadius: 2, marginBottom: 20 }} />
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#0B132B', fontFamily: 'Inter, sans-serif', marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontSize: 13, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Stats ───────────────────────────────────────────────── */}
      <section data-screen-label="06 Trust" style={{ padding: '64px 40px', background: '#0B132B' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1,
            background: 'rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
            {trustStats.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div style={{ background: '#0B132B', padding: '40px 32px', textAlign: 'center' }}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: '#fff',
                    fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', marginBottom: 8 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section data-screen-label="07 CTA" style={{ padding: '96px 40px',
        background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff', fontFamily: 'Inter, sans-serif',
              letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.2 }}>
              Ready to align capital with mission?
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', fontFamily: 'IBM Plex Sans, sans-serif',
              lineHeight: 1.7, marginBottom: 40 }}>
              Request access to Casimir Intelligence and have your first S&T ecosystem synthesis in under four hours.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => onNavigate('contact')}
                style={{ background: '#fff', color: '#1E3A8A', border: 'none', padding: '14px 32px',
                  borderRadius: 6, fontSize: 15, fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'IBM Plex Sans, sans-serif', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                Request Platform Access
              </button>
              <button className="btn-secondary" onClick={() => onNavigate('platform')}>
                Explore Casimir Intelligence
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

// ── PLATFORM PAGE: Casimir Intelligence ──────────────────────────────────────
function PlatformPage({ onNavigate }) {
  const features = [
    {
      eyebrow: 'Core Capability 01',
      title: 'S&T Ecosystem Mapping',
      desc: 'Query the full commercial innovation landscape. Casimir Intelligence synthesizes patent filings, funding rounds, government contracts, and academic research into a dynamic, queryable network graph.',
      points: ['Real-time data synthesis from 40+ authoritative sources', 'Company-investor-technology relationship mapping', 'TRL scoring with DoD-standard methodology', 'Exportable ecosystem snapshots for briefings'],
    },
    {
      eyebrow: 'Core Capability 02',
      title: 'Institutional Risk Assessment',
      desc: 'Every co-investment recommendation is backed by a multi-layer risk gate architecture designed for the DoD acquisition environment. No black boxes — every flag is traceable to a primary source.',
      points: ['FOCI screening against DCSA databases', 'CMMC Level 2 readiness scoring', 'Supply chain exposure analysis', 'Full audit trail for contracting officers'],
    },
    {
      eyebrow: 'Core Capability 03',
      title: 'Co-Investment Decision Support',
      desc: 'Align RDT&E budget priorities with private venture capital flows. Casimir Intelligence surfaces co-investment opportunities that match Objective Force Design priorities.',
      points: ['VC flow tracking across 200+ defense-relevant funds', 'SBIR/STTR pipeline integration', 'Dual-use technology identification', 'One-click investment memo generation'],
    },
  ];
  const securityBadges = [
    { label: 'NIST 800-171', sub: 'Compliant' },
    { label: 'FedRAMP', sub: 'In Process' },
    { label: 'CUI/FOUO', sub: 'Handling Certified' },
    { label: 'CMMC Level 2', sub: 'Ready' },
    { label: 'IL4', sub: 'Compatible' },
    { label: 'DISA STIG', sub: 'Hardened' },
  ];

  return (
    <div>
      {/* Hero: Product branding */}
      <section data-screen-label="01 Intelligence Hero" style={{ background: '#0B132B', padding: '120px 40px 80px', position: 'relative' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <ScrollReveal>
            {/* Product / Company lockup */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6,
                background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)',
                padding: '5px 14px', borderRadius: 99 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#2563EB',
                  textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Product</span>
              </div>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'IBM Plex Sans, sans-serif' }}>by</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}>Casimir Systems</span>
            </div>

            <h1 style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, color: '#fff',
              fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
              Aligning Private Capital<br />
              <span style={{ color: '#2563EB' }}>with National Security.</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif',
              lineHeight: 1.7, maxWidth: 600, margin: '0 auto 48px' }}>
              A zero-code, fully auditable platform that maps S&T ecosystems and tracks venture capital flows in real-time — purpose-built for U.S. Space Force co-investment decision support.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button className="btn-primary" onClick={() => onNavigate('contact')}
                style={{ padding: '13px 28px', fontSize: 15 }}>Request Access</button>
              <button className="btn-secondary" onClick={() => onNavigate('solutions')}
                style={{ padding: '13px 28px', fontSize: 15 }}>View Solutions</button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <div style={{ marginTop: 64, maxWidth: 960, margin: '64px auto 0' }}>
              <PlatformMockup />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section data-screen-label="02 Features" style={{ padding: '96px 40px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={100}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: 80, alignItems: 'center', marginBottom: 96,
                direction: i % 2 === 1 ? 'rtl' : 'ltr' }}>
                <div style={{ direction: 'ltr' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: '#2563EB', fontFamily: 'Inter, sans-serif', marginBottom: 12 }}>
                    {f.eyebrow}
                  </div>
                  <h2 style={{ fontSize: 32, fontWeight: 700, color: '#0B132B',
                    fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.25 }}>
                    {f.title}
                  </h2>
                  <p style={{ fontSize: 16, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif',
                    lineHeight: 1.75, marginBottom: 28 }}>{f.desc}</p>
                  {f.points.map((pt, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#10B981',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span style={{ fontSize: 14, color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>
                <div style={{ direction: 'ltr', background: '#0B132B', borderRadius: 16,
                  padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  minHeight: 300, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <NetworkGraph width={320} height={240} dark={true} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SBIR / D2P2 Context */}
      <section data-screen-label="03 SBIR Context" style={{ padding: '96px 40px', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.2)',
                  padding: '4px 12px', borderRadius: 99, marginBottom: 20 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#2563EB',
                    textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>SBIR D2P2</span>
                  <span style={{ width: 1, height: 10, background: 'rgba(37,99,235,0.2)' }} />
                  <span style={{ fontSize: 11, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif' }}>Topic SF254-D1201</span>
                </div>
                <h2 style={{ fontSize: 32, fontWeight: 700, color: '#0B132B', fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 20 }}>
                  Purpose-built for a specific mission requirement.
                </h2>
                <p style={{ fontSize: 15, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75, marginBottom: 24 }}>
                  Casimir Intelligence was architected in direct response to SBIR solicitation topic <strong style={{ color: '#0B132B' }}>SF254-D1201</strong>, issued by U.S. Space Force Task Force Futures. The solicitation calls for a Direct-to-Phase II (D2P2) contract, requiring demonstrated Phase I-equivalent feasibility at time of proposal — meaning Casimir Intelligence must be a working platform, not a concept.
                </p>
                <p style={{ fontSize: 15, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75, marginBottom: 32 }}>
                  The D2P2 mechanism is the DoD's fast-track innovation pathway, bypassing Phase I to accelerate deployment of technologies with proven commercial viability. TF-F needs this capability now — not in three years.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['S&T Ecosystem Synthesis','Co-Investment Decision Support','Zero-Code Interface','ASOT Data Fusion','Dual-Use Technology ID','FOCI Risk Screening','CMMC Readiness Scoring','CUI/FOUO Compliant','Open Architecture','Modular Design'].map((tag, i) => (
                    <span key={i} style={{ fontSize: 11, fontWeight: 500,
                      background: i % 3 === 0 ? 'rgba(37,99,235,0.07)' : i % 3 === 1 ? 'rgba(16,185,129,0.07)' : 'rgba(245,158,11,0.07)',
                      color: i % 3 === 0 ? '#1D4ED8' : i % 3 === 1 ? '#065F46' : '#92400E',
                      border: '1px solid ' + (i % 3 === 0 ? 'rgba(37,99,235,0.15)' : i % 3 === 1 ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)'),
                      padding: '4px 10px', borderRadius: 99, fontFamily: 'IBM Plex Sans, sans-serif' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#64748B', letterSpacing: '0.1em',
                  textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: 20 }}>
                  Solicitation Requirements → Platform Capabilities
                </div>
                {[
                  { req: 'ASOT Synthesis', cap: 'Fuses data from 40+ verified sources — government contracts, VC filings, patent databases, and academic research — into a single, queryable intelligence layer.' },
                  { req: 'Real-Time VC Flow Tracking', cap: 'Investment monitoring across 200+ defense-relevant funds, mapped against RDT&E priorities and Objective Force Design themes.' },
                  { req: 'Multi-Layer Risk Gates', cap: 'FOCI screening, CMMC Level 2 readiness, TRL scoring (DoD 1–9 scale), and supply chain exposure — each with a full, auditable evidence chain.' },
                  { req: 'Zero-Code Operational Interface', cap: 'No engineering support required. S&T analysts and contracting officers query, filter, and export in minutes — not weeks.' },
                  { req: 'Modular, Open Architecture', cap: 'REST API-first design enables integration with existing DoD data environments. Modules deploy independently or as a full stack.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 0',
                    borderBottom: i < 4 ? '1px solid #E2E8F0' : 'none' }}>
                    <div style={{ flexShrink: 0, marginTop: 3 }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#F0FDF4',
                        border: '1px solid rgba(16,185,129,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#0B132B',
                        fontFamily: 'Inter, sans-serif', marginBottom: 4 }}>{item.req}</div>
                      <div style={{ fontSize: 13, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif',
                        lineHeight: 1.65 }}>{item.cap}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 24, background: '#0B132B', borderRadius: 10, padding: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    fontFamily: 'Inter, sans-serif', marginBottom: 8 }}>D2P2 Feasibility Standard</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)',
                    fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7, margin: 0 }}>
                    The D2P2 mechanism requires proof of Phase I-equivalent feasibility at proposal submission. Casimir Intelligence is a functioning platform — not a prototype or concept — satisfying this requirement at time of solicitation.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Security */}
      <section data-screen-label="04 Security" style={{ padding: '80px 40px', background: '#0B132B' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="Security & Compliance" dark center
              title="Built to operate in the DoD environment."
              subtitle="Casimir Intelligence meets or exceeds all compliance requirements for handling Controlled Unclassified Information in defense acquisition contexts." />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 48 }}>
              {securityBadges.map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 10, padding: '16px 24px', textAlign: 'center', minWidth: 130 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', fontFamily: 'Inter, sans-serif', marginBottom: 4 }}>{b.label}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>{b.sub}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div style={{ marginTop: 48 }}>
              <button className="btn-primary" onClick={() => onNavigate('contact')}
                style={{ padding: '14px 32px', fontSize: 15 }}>
                Request Security Documentation
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

// ── SOLUTIONS PAGE ────────────────────────────────────────────────────────────
function SolutionsPage({ onNavigate }) {
  const [activePersona, setActivePersona] = React.useState(0);
  const personas = [
    {
      title: 'S&T Analysts',
      subtitle: 'Task Force Futures · AFWERX · SPACEWERX',
      challenge: 'You are responsible for identifying and tracking commercial technologies that align with the Objective Force Design. Your current workflow requires manual web searches, spreadsheets, and weeks of synthesis work before a single briefing can be prepared.',
      jobs: [
        'Map the full competitive landscape for a given S&T domain in hours, not weeks',
        'Automatically track funding rounds and government contracts as they happen',
        'Generate ecosystem briefing packages with a single export',
        'Identify emerging dual-use technologies before competitors do',
      ],
    },
    {
      title: 'Contracting Officers',
      subtitle: 'DoD Acquisition Workforce · DCMA · AFMC',
      challenge: 'Every co-investment recommendation that lands on your desk requires a defensible risk assessment. Determining FOCI exposure, CMMC readiness, and supply chain risk currently takes weeks of manual investigation with no standardized audit trail.',
      jobs: [
        'Run FOCI screening against verified government databases in minutes',
        'Generate audit-ready risk assessments with full source documentation',
        'Score CMMC readiness levels using automated compliance checks',
        'Produce investment memos that meet DAFARS requirements',
      ],
    },
    {
      title: 'Innovation Leaders',
      subtitle: 'COMSO · SpaceWERX · DIU · AFWERX',
      challenge: 'Your mission is to align the U.S. defense industrial base with private capital. You need to demonstrate to senior leadership that co-investment decisions are strategic, evidenced, and defensible — but the data is scattered across hundreds of disconnected sources.',
      jobs: [
        'Align RDT&E budget priorities with real-time VC flow data',
        'Identify co-investment opportunities that match Objective Force Design',
        'Track portfolio company TRL progression over time',
        'Brief leadership with one-click executive summary generation',
      ],
    },
  ];

  return (
    <div>
      <section data-screen-label="01 Solutions Hero" style={{ background: '#0B132B', padding: '120px 40px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="Casimir Intelligence · Solutions" dark center
              title="Precision tools for the people making the decisions."
              subtitle="Casimir Intelligence is designed around the specific Jobs To Be Done of the U.S. Space Force acquisition workforce." />
          </ScrollReveal>
        </div>
      </section>

      <section data-screen-label="02 Personas" style={{ padding: '96px 40px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 4, background: '#E2E8F0', borderRadius: 10,
            padding: 4, marginBottom: 56, width: 'fit-content' }}>
            {personas.map((p, i) => (
              <button key={i} onClick={() => setActivePersona(i)}
                style={{ padding: '10px 24px', borderRadius: 7, border: 'none', cursor: 'pointer',
                  fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, fontWeight: 500,
                  background: activePersona === i ? '#fff' : 'transparent',
                  color: activePersona === i ? '#0B132B' : '#64748B',
                  boxShadow: activePersona === i ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.2s' }}>
                {p.title}
              </button>
            ))}
          </div>

          {personas.map((p, i) => (
            i === activePersona && (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#2563EB', fontFamily: 'Inter, sans-serif', marginBottom: 8 }}>{p.subtitle}</div>
                  <h2 style={{ fontSize: 32, fontWeight: 700, color: '#0B132B',
                    fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.25 }}>
                    {p.title}
                  </h2>
                  <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12, padding: 24, marginBottom: 28 }}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#64748B', letterSpacing: '0.08em',
                      textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: 10 }}>The Challenge</div>
                    <p style={{ fontSize: 15, color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>{p.challenge}</p>
                  </div>
                  <button className="btn-primary" onClick={() => onNavigate('contact')}
                    style={{ padding: '13px 24px', fontSize: 14 }}>
                    Request a Tailored Demo →
                  </button>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#64748B', letterSpacing: '0.08em',
                    textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: 20 }}>Jobs To Be Done</div>
                  {p.jobs.map((j, k) => (
                    <div key={k} style={{ display: 'flex', gap: 16, padding: '16px 0',
                      borderBottom: k < p.jobs.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%',
                        background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, fontSize: 12, fontWeight: 700, color: '#2563EB',
                        fontFamily: 'Inter, sans-serif' }}>{k + 1}</div>
                      <p style={{ fontSize: 15, color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif',
                        lineHeight: 1.65, paddingTop: 4 }}>{j}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
}

// ── ABOUT PAGE ────────────────────────────────────────────────────────────────
function AboutPage({ onNavigate }) {
  const values = [
    { title: 'Authoritative & Trusted', desc: 'We understand the stakes of national security and the rigorous compliance it demands. NIST 800-171, ITAR, FedRAMP — we speak the language of institutional trust from day one.' },
    { title: 'Agile & Builder-Focused', desc: 'We are a team of builders, not consultants. We ship working software fast. Our applications are designed for immediate operational impact, not multi-year deployments.' },
    { title: 'Strategic & Visionary', desc: 'We see the broader geopolitical landscape and build tools to navigate it. Every product we ship is grounded in a clear, well-scoped DoD mission requirement.' },
    { title: 'Modular by Design', desc: 'Our applications are zero-code, open-architecture, and built to integrate. We bridge commercial innovation speed with institutional compliance requirements.' },
  ];

  return (
    <div>
      <section data-screen-label="01 About Hero" style={{ background: '#0B132B', padding: '120px 40px 96px', position: 'relative' }}>
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <ScrollReveal>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#2563EB', fontFamily: 'Inter, sans-serif', marginBottom: 20 }}>The Company</div>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, color: '#fff',
              fontFamily: 'Inter, sans-serif', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 24 }}>
              Building the software<br />that secures the future.
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', fontFamily: 'IBM Plex Sans, sans-serif',
              lineHeight: 1.75, maxWidth: 680, margin: '0 auto 40px' }}>
              Casimir Systems is an agile defense technology firm building AI-driven decision support applications for the U.S. Department of Defense. We ship working software fast — designed for immediate operational impact, not multi-year deployments.
            </p>
            {/* Product portfolio chip */}
            <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 99, padding: '6px 16px', cursor: 'pointer' }}
              onClick={() => onNavigate('platform')}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2563EB' }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif' }}>Current product:</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#fff', fontFamily: 'Inter, sans-serif' }}>Casimir Intelligence →</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section data-screen-label="02 Values" style={{ padding: '96px 40px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="Company Character · The Strategic Builder" center
              title="Authoritative. Agile. Built to ship."
              subtitle="Casimir Systems doesn't sell enterprise transformation. We build precise, modular software that works on day one — and we stand behind it with evidence, not marketing." />
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 56 }}>
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div style={{ background: '#fff', borderRadius: 12, padding: 32, border: '1px solid #E2E8F0', display: 'flex', gap: 20 }}>
                  <div style={{ width: 4, background: '#2563EB', borderRadius: 2, flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#0B132B', fontFamily: 'Inter, sans-serif', marginBottom: 10 }}>{v.title}</h3>
                    <p style={{ fontSize: 14, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.75 }}>{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section data-screen-label="03 Founder" style={{ padding: '96px 40px', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#2563EB', fontFamily: 'Inter, sans-serif', marginBottom: 40, textAlign: 'center' }}>Founder & Principal Investigator</div>
          </ScrollReveal>

          {/* Main founder card */}
          <ScrollReveal delay={100}>
            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64,
              background: '#F8FAFC', borderRadius: 16, border: '1px solid #E2E8F0',
              padding: 48, marginBottom: 40 }}>

              {/* Left: avatar + identity */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%',
                  overflow: 'hidden', border: '3px solid rgba(37,99,235,0.25)', marginBottom: 20, flexShrink: 0 }}>
                  <img src="uploads/aragonai-e26bbfb1-6987-449b-b444-4ba0f028fcd6.jpeg"
                    alt="Ryan Winzenburg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: '#0B132B',
                  fontFamily: 'Inter, sans-serif', marginBottom: 4 }}>Ryan Winzenburg</div>
                <div style={{ fontSize: 13, color: '#2563EB', fontWeight: 500,
                  fontFamily: 'IBM Plex Sans, sans-serif', marginBottom: 4 }}>Founder & Principal Investigator</div>
                <div style={{ fontSize: 12, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', marginBottom: 20 }}>
                  Denver, CO
                </div>
                <div style={{ fontSize: 11, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif',
                  lineHeight: 1.6, textAlign: 'center', padding: '0 8px' }}>
                  Near Peterson Space Force Base<br />& Schriever Space Force Base
                </div>
                <div style={{ marginTop: 24, width: '100%', height: 1, background: '#E2E8F0' }} />
                <div style={{ marginTop: 20, fontSize: 11, color: '#64748B',
                  fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7, textAlign: 'left', width: '100%' }}>
                  <div style={{ fontWeight: 600, color: '#0B132B', marginBottom: 8, fontSize: 12 }}>Current Role</div>
                  Senior UX Design Leader<br />
                  <span style={{ color: '#64748B' }}>Comcast Business</span>
                </div>
              </div>

              {/* Right: bio + narrative */}
              <div>
                <p style={{ fontSize: 16, color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif',
                  lineHeight: 1.8, marginBottom: 24 }}>
                  Ryan Winzenburg has spent 25+ years solving one problem: making complex systems navigable for the people who depend on them most. As a UX leader and information architect, he has built decision-support interfaces across federal government, healthcare, telecommunications, and enterprise technology — at organizations where the cost of a bad decision is measured in lives, dollars, or national infrastructure.
                </p>
                <p style={{ fontSize: 16, color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif',
                  lineHeight: 1.8, marginBottom: 32 }}>
                  Casimir Systems is the synthesis of that career. The architecture behind Casimir Intelligence — multi-layer risk gates, zero-code interfaces, real-time data synthesis — draws directly from systems Ryan has built and validated in the field. He has compressed product development cycles from 18 months to 4–6 weeks using AI-augmented workflows, and he brings that same operational velocity to the DoD co-investment problem.
                </p>

                {/* Key experience grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { org: 'U.S. Dept. of the Interior', sub: 'Office of Natural Resources Revenue', detail: 'Federal information systems for resource management' },
                    { org: 'CVS Health / Aetna', sub: 'Enterprise UX', detail: 'Task completion 50% → 90% on mission-critical healthcare apps' },
                    { org: 'Pitney Bowes', sub: 'Design Systems', detail: 'Standardized design architecture across 300+ products' },
                    { org: 'CenturyLink / Level3', sub: 'Enterprise B2B', detail: 'Telecom platform design for enterprise customers' },
                    { org: 'MapQuest / AOL', sub: 'Information Architecture', detail: 'Early-scale consumer platform UX' },
                    { org: 'Comcast Business', sub: 'Senior UX Design Leader', detail: 'Current role — enterprise platform design' },
                  ].map((e, i) => (
                    <div key={i} style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 10,
                      padding: '14px 16px' }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: '#0B132B',
                        fontFamily: 'Inter, sans-serif', marginBottom: 2 }}>{e.org}</div>
                      <div style={{ fontSize: 11, color: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif',
                        marginBottom: 4 }}>{e.sub}</div>
                      <div style={{ fontSize: 11, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif',
                        lineHeight: 1.55 }}>{e.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Proof of feasibility: AI platforms */}
          <ScrollReveal delay={150}>
            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#64748B', letterSpacing: '0.1em',
                textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: 16 }}>
                Demonstrated Feasibility · AI Platforms in Production
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: '#0B132B', borderRadius: 12, padding: 28,
                  border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8,
                      background: 'rgba(37,99,235,0.2)', border: '1px solid rgba(37,99,235,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9h12M9 3v12M5 5l8 8M13 5l-8 8" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', fontFamily: 'Inter, sans-serif' }}>Winzinvest</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>Automated Trading Platform</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'IBM Plex Sans, sans-serif',
                    lineHeight: 1.7, margin: 0 }}>
                    Automated trading execution with 13-layer risk gate analysis — the direct architectural precedent for Casimir Intelligence's multi-layer institutional risk framework. Validates the feasibility of real-time, multi-variable risk synthesis at production scale.
                  </p>
                </div>
                <div style={{ background: '#0B132B', borderRadius: 12, padding: 28,
                  border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8,
                      background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="6" stroke="#10B981" strokeWidth="1.5"/>
                        <path d="M6 9l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', fontFamily: 'Inter, sans-serif' }}>Kinlet</div>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}>Caregiver SaaS Platform</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'IBM Plex Sans, sans-serif',
                    lineHeight: 1.7, margin: 0 }}>
                    Behavioral design frameworks applied to a zero-code caregiver platform, demonstrating the ability to build complex, compliance-sensitive SaaS products with compressed timelines — from concept to production in 4–6 weeks.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Hiring note */}
          <ScrollReveal delay={200}>
            <div style={{ marginTop: 32, padding: 28, background: '#F8FAFC', borderRadius: 12,
              border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#0B132B',
                  fontFamily: 'Inter, sans-serif', marginBottom: 6 }}>Building the team.</div>
                <div style={{ fontSize: 13, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>
                  Casimir Systems is actively recruiting for key roles in intelligence analysis, platform engineering, and DoD acquisition advisory. If you have relevant experience and share the mission, we want to hear from you.
                </div>
              </div>
              <button className="btn-primary" onClick={() => onNavigate('contact')}
                style={{ padding: '12px 24px', fontSize: 13, whiteSpace: 'nowrap' }}>
                Join the Mission →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

// ── RESOURCES PAGE ────────────────────────────────────────────────────────────
function ResourcesPage({ onNavigate }) {
  const articles = [
    { tag: 'Intelligence Insight', title: 'The FOCI Problem: Why Foreign Influence is the DoD\'s Biggest Co-Investment Blind Spot', date: 'Apr 14, 2026', readTime: '8 min read' },
    { tag: 'Analysis', title: 'Directed Energy in 2026: Mapping the Commercial S&T Landscape for USSF Priorities', date: 'Mar 28, 2026', readTime: '12 min read' },
    { tag: 'Perspective', title: 'Zero-Code Intelligence: Why the Future of DoD Acquisition Belongs to the Analyst, Not the Engineer', date: 'Mar 10, 2026', readTime: '6 min read' },
  ];
  const glossaryTerms = [
    ['ASOT', 'Authoritative Source of Truth — a recognized, verified, and trusted data source.'],
    ['Co-Investment', 'The strategic alignment of government RDT&E funding with private venture capital to accelerate dual-use technology.'],
    ['D2P2', 'Direct-to-Phase II — the SBIR funding mechanism that bypasses Phase I.'],
    ['FOCI', 'Foreign Ownership, Control, or Influence — a critical risk factor in defense acquisition.'],
    ['TRL', 'Technology Readiness Level — the DoD scale (1–9) used to assess technology maturity.'],
    ['TF-F', 'Task Force Futures — the primary USSF stakeholder responsible for future space capabilities.'],
    ['Dual-Use Technology', 'Technology developed for commercial markets that also has defense applications.'],
    ['RDT&E', 'Research, Development, Test, and Evaluation — the DoD budget category for new technologies.'],
  ];

  return (
    <div>
      <section data-screen-label="01 Resources Hero" style={{ background: '#0B132B', padding: '120px 40px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="Casimir Systems · Intelligence Hub" dark center
              title="Thought leadership from the frontier of defense tech."
              subtitle="Analysis, whitepapers, and research from the Casimir Systems intelligence team." />
          </ScrollReveal>
        </div>
      </section>

      <section data-screen-label="02 Articles" style={{ padding: '96px 40px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="Latest Insights" title="Intelligence Briefings" />
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 40 }}>
            {articles.map((a, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E2E8F0',
                  overflow: 'hidden', cursor: 'pointer', transition: 'box-shadow 0.2s, transform 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow='var(--shadow-md)'; e.currentTarget.style.transform='translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)'; }}>
                  <div style={{ height: 4, background: '#2563EB' }} />
                  <div style={{ padding: 28 }}>
                    <div style={{ display: 'inline-block', background: 'rgba(37,99,235,0.08)',
                      color: '#2563EB', padding: '3px 10px', borderRadius: 4,
                      fontSize: 11, fontWeight: 500, fontFamily: 'IBM Plex Sans, sans-serif', marginBottom: 16 }}>
                      {a.tag}
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: '#0B132B',
                      fontFamily: 'Inter, sans-serif', lineHeight: 1.45, marginBottom: 20 }}>{a.title}</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      fontSize: 12, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif' }}>
                      <span>{a.date}</span>
                      <span>{a.readTime}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section data-screen-label="03 Glossary" style={{ padding: '80px 40px', background: '#fff', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="Reference" title="S&T Intelligence Glossary"
              subtitle="Standard terminology used across the DoD co-investment and SBIR ecosystem." />
          </ScrollReveal>
          <div style={{ marginTop: 40, border: '1px solid #E2E8F0', borderRadius: 12, overflow: 'hidden' }}>
            {glossaryTerms.map(([term, def], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr',
                borderBottom: i < glossaryTerms.length - 1 ? '1px solid #E2E8F0' : 'none',
                background: i % 2 === 0 ? '#fff' : '#F8FAFC' }}>
                <div style={{ padding: '18px 24px', fontSize: 13, fontWeight: 600, color: '#2563EB',
                  fontFamily: 'Inter, sans-serif', borderRight: '1px solid #E2E8F0' }}>{term}</div>
                <div style={{ padding: '18px 24px', fontSize: 14, color: '#334155',
                  fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>{def}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ── CONTACT PAGE ──────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = React.useState({ name:'', org:'', role:'', email:'', message:'' });
  const [submitted, setSubmitted] = React.useState(false);
  const roles = ['S&T Analyst', 'Contracting Officer', 'Innovation Leader / Program Manager', 'Researcher / Academic', 'Investor / VC', 'Other'];

  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <div>
      <section data-screen-label="01 Contact Hero" style={{ background: '#0B132B', padding: '120px 40px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ScrollReveal>
            <SectionHeader eyebrow="Request Access · Casimir Intelligence" dark center
              title="Access Casimir Intelligence."
              subtitle="Complete this form and the Casimir Systems team will reach out within one business day to schedule a platform demonstration." />
          </ScrollReveal>
        </div>
      </section>

      <section data-screen-label="02 Form" style={{ padding: '80px 40px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 960, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#0B132B', fontFamily: 'Inter, sans-serif', marginBottom: 16 }}>What to expect</h3>
            {[
              { step: '01', title: 'Intake Review', desc: 'Your access request is reviewed within 1 business day.' },
              { step: '02', title: 'Scoped Demo', desc: 'A 45-minute Casimir Intelligence demonstration tailored to your S&T domain.' },
              { step: '03', title: 'Pilot Access', desc: 'Qualifying organizations receive 30-day pilot access to the full platform.' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#0B132B',
                  color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, fontFamily: 'Inter, sans-serif', flexShrink: 0 }}>{s.step}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0B132B', fontFamily: 'Inter, sans-serif', marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
            <div style={{ background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)',
              borderRadius: 10, padding: 16, fontSize: 12, color: '#334155',
              fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.65 }}>
              All information provided is handled under CUI/FOUO protocols by Casimir Systems. This form does not transmit classified information.
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div style={{ background: '#fff', borderRadius: 16, padding: 40, border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-md)' }}>
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Dr. Jane Smith', required: true },
                  { id: 'org', label: 'Organization', type: 'text', placeholder: 'U.S. Space Force, Task Force Futures', required: true },
                  { id: 'email', label: 'Government or Institutional Email', type: 'email', placeholder: 'jane.smith@spaceforce.mil', required: true },
                ].map(field => (
                  <div key={field.id} style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 500,
                      color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif', marginBottom: 6 }}>
                      {field.label} {field.required && <span style={{ color: '#EF4444' }}>*</span>}
                    </label>
                    <input type={field.type} required={field.required} placeholder={field.placeholder}
                      value={form[field.id]} onChange={e => setForm({...form, [field.id]: e.target.value})}
                      style={{ width: '100%', padding: '10px 14px', border: '1px solid #CBD5E1',
                        borderRadius: 6, fontSize: 14, fontFamily: 'IBM Plex Sans, sans-serif',
                        color: '#0B132B', outline: 'none', background: '#fff' }}
                      onFocus={e => e.target.style.borderColor = '#2563EB'}
                      onBlur={e => e.target.style.borderColor = '#CBD5E1'} />
                  </div>
                ))}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 500,
                    color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif', marginBottom: 6 }}>
                    Role <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <select required value={form.role} onChange={e => setForm({...form, role: e.target.value})}
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #CBD5E1',
                      borderRadius: 6, fontSize: 14, fontFamily: 'IBM Plex Sans, sans-serif',
                      color: form.role ? '#0B132B' : '#94A3B8', outline: 'none', background: '#fff' }}>
                    <option value="" disabled>Select your role...</option>
                    {roles.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 500,
                    color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif', marginBottom: 6 }}>
                    What S&T domain are you most interested in?
                  </label>
                  <textarea rows={3} placeholder="e.g., Directed energy, hypersonics, autonomous systems, satellite communications..."
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid #CBD5E1',
                      borderRadius: 6, fontSize: 14, fontFamily: 'IBM Plex Sans, sans-serif',
                      color: '#0B132B', outline: 'none', resize: 'vertical', background: '#fff' }}
                    onFocus={e => e.target.style.borderColor = '#2563EB'}
                    onBlur={e => e.target.style.borderColor = '#CBD5E1'} />
                </div>
                <button type="submit" className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 15 }}>
                  Request Access to Casimir Intelligence
                </button>
              </div>
            </form>
          ) : (
            <div style={{ background: '#fff', borderRadius: 16, padding: 56, textAlign: 'center',
              border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#F0FDF4',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14l5.5 5.5L22 9" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0B132B', fontFamily: 'Inter, sans-serif', marginBottom: 12 }}>Access Request Received</h3>
              <p style={{ fontSize: 15, color: '#64748B', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}>
                The Casimir Systems team will reach out within one business day to schedule your Casimir Intelligence demonstration.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, {
  HomePage, PlatformPage, SolutionsPage, AboutPage, ResourcesPage, ContactPage,
});
