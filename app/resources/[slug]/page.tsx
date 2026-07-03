import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ARTICLES, getArticle } from '@/lib/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `https://www.casimirsystems.com/resources/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div style={{ background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Header */}
      <section className="pt-36 pb-20 px-6 lg:px-10" style={{ background: '#0B132B' }}>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-[12px] font-medium mb-8 transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Intelligence Hub
          </Link>
          <div
            className="inline-block rounded px-2.5 py-0.5 text-[11px] font-medium mb-5"
            style={{ background: `${article.color}22`, color: article.color, fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            {article.tag}
          </div>
          <h1
            className="font-extrabold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(28px,3.5vw,48px)', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            {article.title}
          </h1>
          <p
            className="text-lg mb-8"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.7 }}
          >
            {article.description}
          </p>
          <div className="flex items-center gap-4" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13 }}>
            <span>Casimir Systems</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-10 md:p-14"
            style={{ background: '#fff', border: '1px solid #E2E8F0' }}
          >
            {article.sections.map((section, i) => (
              <div key={i} className={i > 0 ? 'mt-10' : ''}>
                {section.heading && (
                  <h2
                    className="font-bold text-[#0B132B] mb-4"
                    style={{ fontSize: 22, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em', lineHeight: 1.3 }}
                  >
                    {section.heading}
                  </h2>
                )}
                <div>
                  {section.body.split('\n\n').map((para, j) => (
                    <p
                      key={j}
                      className={j > 0 ? 'mt-5' : ''}
                      style={{ fontSize: 16, color: '#334155', fontFamily: 'IBM Plex Sans, sans-serif', lineHeight: 1.85 }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-10 flex items-center justify-between">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-[13px] font-medium transition-colors"
              style={{ color: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              <ArrowLeft className="w-4 h-4" />
              All articles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-medium text-white transition-all duration-200 hover:-translate-y-px text-[13px]"
              style={{ background: '#2563EB', fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
