import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { ArrowRight, Search, Clock, Calendar, Tag } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { BLOG_POSTS, BLOG_CATEGORIES, type BlogPost } from "@/data/blogPosts";

const ease = [0.16, 1, 0.3, 1] as const;
const BASE = "https://vigorant.com";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogSeo() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${BASE}/blog#webpage`,
    url: `${BASE}/blog`,
    name: "Vigorant Blog — Healthcare Practice Growth",
    description:
      "Articles, playbooks, and strategy guides on SEO, AI search, paid advertising, website CRO, and reputation for dental, medical, and chiropractic practices.",
    blogPost: BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.date,
      author: { "@type": "Organization", name: p.author },
      url: `${BASE}/blog/${p.slug}`,
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${BASE}/resources` },
      { "@type": "ListItem", position: 3, name: "Blog", item: `${BASE}/blog` },
    ],
  };
  return (
    <Helmet>
      <title>Healthcare Marketing Blog | Vigorant</title>
      <meta
        name="description"
        content="Strategy articles, playbooks, and guides on SEO, AI search, paid ads, website CRO, and reputation for dental, medical, and chiropractic practices."
      />
      <link rel="canonical" href="/blog" />
      <meta property="og:title" content="Healthcare Marketing Blog | Vigorant" />
      <meta property="og:description" content="Articles and playbooks for healthcare practice growth." />
      <meta property="og:url" content="/blog" />
      <meta name="robots" content="index,follow" />
      <script type="application/ld+json">{JSON.stringify(webPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.slug}`} className="block h-full group">
      <article className="rounded-2xl bg-white border border-brand-purple/12 p-7 h-full flex flex-col transition-colors group-hover:border-brand-purple/30">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-3 py-1">
            {post.category}
          </span>
          {post.featured && (
            <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-deep bg-brand-lavender/40 rounded-full px-3 py-1">
              Featured
            </span>
          )}
        </div>
        <h3 className="font-display text-xl sm:text-2xl text-brand-deep mt-4 leading-snug">{post.title}</h3>
        <p className="mt-3 text-text-secondary text-[15px] leading-[1.7] flex-1">{post.excerpt}</p>
        <div className="mt-5 flex items-center gap-4 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5"><Calendar size={13} aria-hidden />{formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1.5"><Clock size={13} aria-hidden />{post.readMinutes} min read</span>
        </div>
        <span className="mt-5 inline-flex items-center text-brand-purple font-semibold">
          Read article <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </article>
    </Link>
  );
}

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof BLOG_CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOG_POSTS.filter((p) => {
      const catOk = category === "All" || p.category === category;
      if (!catOk) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: BLOG_POSTS.length };
    BLOG_POSTS.forEach((p) => {
      map[p.category] = (map[p.category] ?? 0) + 1;
    });
    return map;
  }, []);

  const featured = BLOG_POSTS.find((p) => p.featured);

  return (
    <>
      <BlogSeo />
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main" className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
          <div aria-hidden className="absolute inset-0 z-0 grid-overlay" />
          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(247 93% 64% / 0.18), transparent 70%)", filter: "blur(80px)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-12 -left-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, hsl(248 100% 75% / 0.14), transparent 70%)", filter: "blur(60px)" }}
          />
          <div className="container relative z-10">
            <nav aria-label="Breadcrumb" className="text-sm text-text-muted mb-6">
              <Link to="/" className="hover:text-brand-purple">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <Link to="/resources" className="hover:text-brand-purple">Resources</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span aria-current="page" className="text-text-secondary">Blog</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-purple bg-brand-purple/8 border border-brand-purple/20 rounded-full px-4 py-1.5"
            >
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
              Vigorant Blog
            </motion.div>
            <h1
              className="font-display font-bold text-brand-deep leading-[1.05] mt-5"
              style={{ fontSize: "clamp(36px, 6.5vw, 68px)", letterSpacing: "-0.03em" }}
            >
              Healthcare practice <span className="gradient-text">growth, decoded.</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 max-w-2xl text-lg text-text-secondary leading-[1.7]"
            >
              Strategy articles, playbooks, and field notes on SEO, AI search, paid advertising, website CRO,
              reputation, and analytics — written by the team that ships them.
            </motion.p>

            {/* Search */}
            <div className="mt-8 max-w-2xl">
              <label htmlFor="blog-search" className="sr-only">Search the blog</label>
              <div className="relative">
                <Search aria-hidden size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  id="blog-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles, topics, tags…"
                  className="w-full h-12 sm:h-14 pl-11 pr-4 rounded-full bg-white border border-brand-purple/20 text-[15px] text-brand-deep placeholder:text-text-muted/70 focus:outline-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 transition"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        {featured && category === "All" && !query && (
          <section className="pb-12 sm:pb-16">
            <div className="container">
              <Link to={`/blog/${featured.slug}`} className="block group">
                <article
                  className="rounded-3xl overflow-hidden border border-brand-purple/15 p-8 sm:p-12 text-white"
                  style={{ background: "var(--gradient-dark)" }}
                >
                  <span className="font-mono-ui text-[11px] uppercase tracking-[0.12em] text-brand-lavender bg-white/10 border border-white/20 rounded-full px-3 py-1 inline-block">
                    Featured · {featured.category}
                  </span>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-3xl text-white/80 text-base sm:text-lg">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-5 text-xs text-white/70 flex-wrap">
                    <span className="inline-flex items-center gap-1.5"><Calendar size={13} aria-hidden />{formatDate(featured.date)}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock size={13} aria-hidden />{featured.readMinutes} min read</span>
                    <span className="inline-flex items-center gap-1.5"><Tag size={13} aria-hidden />{featured.author}</span>
                  </div>
                  <span className="mt-6 inline-flex items-center text-white font-semibold">
                    Read featured article <ArrowRight size={16} className="ml-1.5 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* CATEGORY FILTER + GRID */}
        <section className="pb-20 sm:pb-28">
          <div className="container">
            <div role="tablist" aria-label="Blog categories" className="flex flex-wrap gap-2.5 mb-10">
              {BLOG_CATEGORIES.map((c) => {
                const active = c === category;
                const count = counts[c] ?? 0;
                return (
                  <button
                    key={c}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setCategory(c)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                      active
                        ? "bg-brand-purple text-white border-brand-purple"
                        : "bg-white text-text-secondary border-brand-purple/20 hover:border-brand-purple/40 hover:text-brand-deep"
                    }`}
                  >
                    {c}
                    <span className={`ml-2 text-xs font-mono-ui ${active ? "text-white/80" : "text-text-muted"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-brand-purple/15 bg-white p-12 text-center">
                <p className="text-lg text-text-secondary">No articles match your search.</p>
                <button
                  onClick={() => { setQuery(""); setCategory("All"); }}
                  className="mt-4 inline-flex items-center text-brand-purple font-semibold"
                >
                  Clear filters <ArrowRight size={16} className="ml-1.5" aria-hidden />
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            )}

            <p className="mt-8 text-sm text-text-muted">
              Showing {filtered.length} of {BLOG_POSTS.length} articles
              {category !== "All" && <> in <span className="text-brand-deep font-semibold">{category}</span></>}
              {query && <> matching <span className="text-brand-deep font-semibold">"{query}"</span></>}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 text-white" style={{ background: "var(--gradient-dark)" }}>
          <div className="container max-w-3xl text-center">
            <span className="section-label-light">Get the next one in your inbox</span>
            <h2 className="font-extrabold mt-3" style={{ fontSize: "clamp(28px, 5vw, 44px)", letterSpacing: "-0.03em" }}>
              New playbooks, every week.
            </h2>
            <p className="mt-5 text-white/80 text-lg">
              Subscribe to the Vigorant newsletter for fresh articles on AI search, SEO, paid acquisition, and
              healthcare website conversion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/free-audit"
                className="btn-on-dark inline-flex items-center font-semibold px-6 py-3 rounded-full"
              >
                Get a free practice audit <ArrowRight size={18} className="ml-2" aria-hidden />
              </Link>
              <Link
                to="/resources"
                className="btn-on-dark-outline inline-flex items-center font-semibold px-6 py-3 rounded-full"
              >
                Browse all resources
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
