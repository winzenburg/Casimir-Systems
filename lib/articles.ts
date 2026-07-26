export interface ArticleSection {
  heading?: string;
  body: string;
}

export interface Article {
  slug: string;
  tag: string;
  title: string;
  date: string;
  readTime: string;
  color: string;
  description: string;
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'foci-problem-foreign-influence-dod-co-investment',
    tag: 'Intelligence Insight',
    title: "The FOCI Problem: Why Foreign Influence is the DoD's Biggest Co-Investment Blind Spot",
    date: 'Apr 14, 2026',
    readTime: '8 min read',
    color: '#2563EB',
    description:
      'Foreign Ownership, Control, or Influence screening sits at the center of every DoD co-investment decision, yet most acquisition workflows treat it as an afterthought. Here is why that is a systemic problem, and what it costs.',
    sections: [
      {
        body: `Every co-investment decision the Department of Defense makes carries a question that rarely gets answered fast enough: who actually controls this company? Not on paper, in practice. That gap between legal ownership and effective control is where Foreign Ownership, Control, or Influence, FOCI, lives. And right now, most DoD co-investment workflows treat FOCI screening as an afterthought rather than a prerequisite.`,
      },
      {
        heading: 'What FOCI Actually Means',
        body: `FOCI is defined under the National Industrial Security Program Operating Manual (NISPOM) as any situation in which a foreign interest has the power, direct or indirect, to direct or decide matters affecting the management or operations of a cleared company in a manner that could be adverse to U.S. national security. In practice, this means foreign board seats, investor influence, supply chain dependencies, IP licensing arrangements, and academic partnerships, any vector through which a foreign government or foreign-owned entity can access, influence, or extract sensitive technology.

The challenge is that FOCI exposure rarely looks like a red flag. It looks like a strategic partnership with a European commercial satellite firm. It looks like Series B funding from a fund with indirect ties to a sovereign wealth vehicle. It looks like a co-inventor on a patent whose home institution has a dual-use research agreement with a state-affiliated university. None of these individually triggers an automatic exclusion. All of them require analysis.`,
      },
      {
        heading: 'The Blind Spot in Current Workflows',
        body: `The standard DoD co-investment workflow moves roughly like this: an S&T analyst identifies a promising company through open-source research, runs a preliminary capability assessment, hands it to a contracting officer for due diligence, and somewhere late in the process, often after significant relationship-building has already occurred, a FOCI review gets initiated.

That sequencing is backwards. FOCI screening should be a first-pass filter, not a final-gate review. When it happens late, two things go wrong. First, resources have already been invested in companies that may not survive FOCI review. Second, and more dangerously, companies that should fail FOCI screening sometimes get accommodated rather than excluded, because the relationship cost of exclusion has become too high.

This is not a hypothetical. A 2024 review of SBIR award recipients found that a measurable percentage of Phase II awardees had undisclosed or inadequately disclosed foreign investment relationships that would have triggered additional FOCI review had they been identified at the solicitation phase. The pipeline leak is real.`,
      },
      {
        heading: 'Why Automated Screening Changes the Equation',
        body: `The fundamental problem with FOCI screening in current workflows is that it is labor-intensive and non-standardized. Two contracting officers at two different program offices applying the same NISPOM criteria to the same company can reach different conclusions, because the data they are drawing on is different, the analytical frameworks they are applying are inconsistent, and the time pressure they are operating under is asymmetric.

Automated FOCI screening does not replace the contracting officer's judgment. It standardizes and accelerates the data assembly that judgment depends on. When a system can automatically surface corporate ownership chains, cross-reference investors against known foreign state-affiliated funds, flag academic partnerships with dual-use research exposure, and score the overall FOCI risk posture of a company in minutes rather than weeks, the contracting officer can apply their expertise to the cases that actually need it, rather than spending most of their time assembling the briefing package.

The bigger practical effect is consistency, not speed. When FOCI screening is automated against a standardized data model, the same criteria apply to every company in the pipeline, eliminating the audit risk that comes from inconsistent manual review.`,
      },
      {
        heading: 'What Contracting Officers Need',
        body: `When we talk to contracting officers about what would most improve their FOCI workflow, three things come up consistently. First: a single, authoritative source of entity data that does not require them to triangulate across SAM.gov, USASpending, Crunchbase, and a dozen other sources to build a basic ownership picture. Second: a structured risk output, not a raw data dump, that maps the exposure to the relevant regulatory framework so it can be defended in an audit. Third: integration with the broader co-investment workflow rather than a siloed screening tool that requires duplicate data entry.

These are not exotic requirements. They are the basic infrastructure that should exist for any decision environment where the cost of a wrong call is measured in national security exposure rather than quarterly earnings.

FOCI is not going to get easier to manage as the commercial technology ecosystem becomes more globally integrated. The companies developing the most advanced dual-use technologies, in hypersonics, directed energy, space propulsion, advanced materials, operate in a global capital environment. Foreign investment in these sectors is structural, not anomalous. That means FOCI exposure is going to be a feature of virtually every interesting co-investment candidate, not an edge case.

The question is not whether DoD can avoid FOCI exposure in its co-investment portfolio. It cannot. The question is whether it can identify, characterize, and manage that exposure systematically, before relationship costs make exclusion politically difficult, and before technology transfer makes exclusion moot.`,
      },
    ],
  },
  {
    slug: 'directed-energy-2026-commercial-st-landscape-ussf',
    tag: 'Analysis',
    title: 'Directed Energy in 2026: Mapping the Commercial S&T Landscape for USSF Priorities',
    date: 'Mar 28, 2026',
    readTime: '12 min read',
    color: '#10B981',
    description:
      'Directed energy has moved from a long-term research priority to an active deployment imperative for U.S. Space Force. This analysis maps the commercial technology landscape, tracks private capital flows, and identifies co-investment signals for USSF analysts.',
    sections: [
      {
        body: `Directed energy weapons, systems that deliver energy in the form of high-energy lasers, high-power microwaves, or particle beams to disable or destroy targets, have been a fixture of DoD research programs since the 1970s. What has changed in 2026 is the commercial technology ecosystem surrounding them. Advances in fiber laser efficiency, beam control algorithms, power density, and thermal management, driven largely by commercial photonics and semiconductor markets, have compressed the development timeline for operationally relevant directed energy systems in ways that were not anticipated even five years ago.

For U.S. Space Force, which operates in a contested domain where kinetic weapons carry significant escalation and debris risks, directed energy represents a structurally attractive capability. This analysis maps the current commercial S&T landscape, identifies the private capital flowing into it, and surfaces the co-investment signals most relevant to USSF priorities.`,
      },
      {
        heading: 'The Technology Stack: Three Distinct Markets',
        body: `Directed energy is not a monolithic technology category. From a co-investment perspective, it is more useful to think of it as three distinct technology stacks with different maturity profiles, capital requirements, and dual-use characteristics.

High-Energy Laser (HEL) systems are the most commercially mature segment. The commercial photonics and industrial laser markets have driven fiber laser efficiency from roughly 20% wall-plug efficiency in 2010 to over 50% in current generation systems. Companies including II-VI (now Coherent), nLIGHT, and IPG Photonics have built industrial-scale manufacturing bases around fiber laser technology that directly feeds military HEL programs. The critical challenge, beam combination at scale and adaptive optics for atmospheric compensation, is where the most active commercial development is occurring, with a cluster of venture-backed startups working on AI-driven wavefront sensing and beam control.

High-Power Microwave (HPM) systems present a different profile. The commercial ecosystem is thinner, largely because HPM technology has fewer obvious civilian applications, but the electronics and semiconductor markets have produced significant spillovers in solid-state power generation and pulsed power systems. The dual-use signal here runs through commercial 5G and satellite communications infrastructure, the same gallium nitride amplifier technology that enables dense millimeter-wave communication also enables high-efficiency HPM generation.

Counter-UAS directed energy represents the fastest-growing sub-segment by commercial investment activity in the past 24 months. The proliferation of commercial drones as both consumer products and weapons systems has created a civilian and military market for non-kinetic defeat mechanisms. Companies in this segment are raising substantial Series B and C rounds and represent the most immediately commercializable directed energy applications, with direct relevance to USSF ground infrastructure protection.`,
      },
      {
        heading: 'Private Capital Flows: Where VC Is Moving',
        body: `Venture capital investment in directed energy-adjacent companies has accelerated significantly since 2023. Total disclosed investment in companies with material directed energy technology components exceeded $2.1 billion in 2025, up from approximately $800 million in 2022. This figure includes investment in HEL component suppliers, beam control software companies, counter-UAS platform developers, and advanced power systems companies whose technology is directly applicable to directed energy systems.

The funding geography has shifted. While defense-focused venture funds, including Shield Capital, Lux Capital, and In-Q-Tel, remain active, a growing share of directed energy investment is coming from multi-stage commercial funds whose primary thesis is the counter-UAS civilian market. This creates a co-investment dynamic that USSF analysts should understand: the technology USSF needs for space domain awareness and ground infrastructure protection is being funded by commercial investors with no defense orientation, which means the FOCI screening profile of these companies looks different than traditional prime contractor supply chain.

Several specific investment signals are worth noting. Fiber beam combination, the key technical challenge for scaling HEL systems to tactically relevant power levels, has attracted at least six venture-backed companies in the last 18 months, most of them founded by researchers from national laboratory programs. Thermal management for high-duty-cycle laser operation, historically an underinvested area, is seeing renewed commercial activity driven by demand from both defense HEL programs and commercial data center laser cooling applications. Autonomous beam tracking and target discrimination, which sits at the intersection of directed energy and AI, is attracting cross-sector investment from both defense-oriented and commercial AI funds.`,
      },
      {
        heading: 'USSF Co-Investment Priorities: Mapping the Signals',
        body: `U.S. Space Force's directed energy priorities, as articulated through SpaceWERX solicitations and publicly available program documentation, cluster around three capability themes. First, space domain awareness and object characterization. Second, ground-based infrastructure protection from counter-space threats. Third, on-orbit capability development for future contested operations.

The commercial S&T landscape maps onto these priorities with varying degrees of alignment.

Space domain awareness applications are the most commercially distant. The power levels, pointing precision, and operational environments required for meaningful space domain awareness applications significantly exceed what current commercial systems can deliver. The co-investment signal here is primarily in enabling technologies, beam control algorithms, high-brightness laser sources, and photonic sensing, rather than in complete system developers.

Ground infrastructure protection has the strongest commercial ecosystem alignment. Counter-UAS directed energy is a commercially active market with multiple companies at TRL 6–7 that are directly applicable to protecting Space Force launch facilities, satellite ground stations, and radar installations. The co-investment opportunity here is real and near-term.

On-orbit directed energy is the most speculative from a commercial ecosystem standpoint but represents the highest long-term strategic value. Companies working on space-based solar power, which requires many of the same beam forming, power generation, and thermal management capabilities as on-orbit directed energy, represent a potentially important indirect investment signal that USSF co-investment analysis has not systematically tracked.`,
      },
      {
        heading: 'What This Means for S&T Analysts',
        body: `Directed energy is no longer a research-only domain that USSF can treat as a long-cycle development problem. The commercial technology ecosystem has matured to the point where co-investment decisions made in the next 12–24 months will have meaningful effects on USSF's access to critical enabling technologies in the 2028–2032 timeframe.

The specific analytical challenge for S&T analysts is that the most relevant commercial activity is distributed across technology sectors, photonics, semiconductors, AI, counter-UAS, that do not neatly map to traditional defense technology categories. Building an accurate picture of the directed energy co-investment landscape requires synthesizing signals from commercial venture databases, technical publications, patent filings, and government contract awards across multiple industrial sectors simultaneously.

That synthesis problem is exactly what structured co-investment intelligence tools are designed to address. Tracking these signals manually across disconnected data sources can't keep pace with how fast this technology landscape is moving.`,
      },
    ],
  },
  {
    slug: 'zero-code-intelligence-dod-acquisition-analyst',
    tag: 'Perspective',
    title: "Zero-Code Intelligence: Why the Future of DoD Acquisition Belongs to the Analyst, Not the Engineer",
    date: 'Mar 10, 2026',
    readTime: '6 min read',
    color: '#F59E0B',
    description:
      "The defense acquisition workforce is not short on data. It is short on tools that put data in the hands of the people who need it without requiring an engineer in the loop. Zero-code intelligence platforms are changing that, and the implications for how DoD makes decisions are significant.",
    sections: [
      {
        body: `There is a persistent myth in defense technology that the problem with DoD acquisition is a lack of data. This is not true. The DoD generates, collects, and purchases access to staggering volumes of data relevant to acquisition decisions, government contract awards, patent filings, corporate financial disclosures, academic research outputs, venture investment records, foreign ownership filings, technology readiness assessments. The problem is not data scarcity. The problem is that accessing, synthesizing, and acting on that data requires technical intermediaries that most acquisition workflows cannot afford to maintain.

The result is a paradox: the DoD has more relevant data available to it than at any point in its history, and its analysts are less able to act on it quickly than they should be.`,
      },
      {
        heading: 'The Engineer-in-the-Loop Problem',
        body: `Most enterprise data platforms, including the ones used in defense acquisition contexts, are built around a model that places engineers or data scientists between the data and the decision-maker. To run a meaningful query, you need to know SQL, or understand the data model, or submit a request to an analytics team, or wait for a scheduled report that may or may not answer the question you actually have.

This is not a minor inconvenience. It is a structural bottleneck that fundamentally shapes how acquisition decisions get made. When the cost of a data query is measured in days rather than minutes, analysts do not query. They work from the data they already have, supplemented by whatever they can find through manual web searches and institutional memory. The analysis that results is not wrong, experienced S&T analysts are genuinely skilled at synthesizing incomplete information. But it is slower, less comprehensive, and less defensible than it should be.

The downstream effect is that the DoD's co-investment decisions, which are made on multi-year cycles and involve commitments of significant RDT&E resources, are often based on a less complete picture of the commercial technology landscape than the data that exists would support, if that data were accessible.`,
      },
      {
        heading: 'What Zero-Code Actually Means',
        body: `Zero-code intelligence is not a new category of software. It is a design philosophy applied to analytical tools: the principle that every capability the platform provides should be accessible to any qualified analyst without engineering support. Queries should be expressible in natural language. Visualizations should be interactive without requiring configuration. Exports should produce briefing-ready outputs, not raw data files that require formatting before they can be used.

This sounds obvious. It is surprisingly rare in practice, particularly in the defense technology context where tools are often procured for their technical capability rather than their operator usability.

The distinction matters because zero-code determines who can use the tool at scale. Convenience is beside the point. An S&T analyst at Task Force Futures should be able to query the full commercial innovation landscape for directed energy companies with active SBIR Phase II awards, cross-reference against known foreign investment exposure, and produce a briefing package for a leadership review, without submitting a data request to an analytics team and waiting three days. If the tool requires engineering support to operate, that workflow is structurally inaccessible to most of the acquisition workforce.`,
      },
      {
        heading: 'The Implications for How DoD Makes Decisions',
        body: `When analytical tools are accessible to analysts without engineering intermediaries, several things change in the acquisition workflow.

Speed increases, but not in the way people typically imagine. The speed gain is not primarily in the individual query, it is in the iteration cycle. When a contracting officer can run a follow-on query based on what an initial analysis reveals, without waiting for an engineering turnaround, the analytical process becomes genuinely exploratory rather than confirmatory. Decisions stop being validated against pre-formed hypotheses and start being shaped by what the data actually shows.

The quality of the audit trail also changes. When analysis is conducted through a structured platform with logging and source attribution, every recommendation has a traceable evidence chain. This matters enormously in a contracting environment where acquisition decisions are subject to protest, audit, and oversight review. An investment recommendation that can be traced back to specific data sources, specific queries, and specific analytical conclusions is a fundamentally different artifact than a recommendation supported by an analyst's judgment alone.

Finally, the distribution of analytical capacity changes. When tools require engineering support, analytical capacity concentrates at program offices that have engineering staff. When tools are zero-code, analytical capacity can be distributed across the acquisition workforce, including at smaller program offices, forward-deployed organizations, and junior analysts who have the domain expertise to ask good questions but not the technical expertise to operate complex data platforms.`,
      },
      {
        heading: 'What This Means for the Acquisition Workforce',
        body: `The zero-code intelligence transition does not make analysts redundant. It makes the analyst's domain expertise, the judgment about which questions matter, which signals are significant, which companies merit deeper investigation, the scarce resource rather than the technical ability to access data.

This is a meaningful shift. The acquisition workforce has deep, hard-won expertise in DoD mission domains, technology assessment, and contracting law. That expertise has historically been underutilized because the tools available to express it were inaccessible. Zero-code platforms do not replace that expertise. They give it an environment in which it can operate at the speed and scale the current threat environment demands.

The future of DoD acquisition intelligence belongs to the analyst who can ask the right question, not to the engineer who can run the query.`,
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
