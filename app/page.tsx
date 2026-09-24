import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { AutoScrollList } from "@/components/AutoScrollList";
import { BackgroundCarousel } from "@/components/BackgroundCarousel";
import { Carousel } from "@/components/Carousel";
import { Icon } from "@/components/Icon";
import { galleryImages } from "@/lib/gallery";
import {
  achievements,
  contribOrgs,
  contributions,
  education,
  experience,
  linkedInPosts,
  profile,
  projects,
  skills,
} from "@/lib/resume";

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

export default function Home() {
  const projectSlides: ReactNode[] = chunk(projects, 2).map((pair, i) => (
    <div className="project-grid" key={i}>
      {pair.map((p) => (
        <a
          className="project-card"
          href={p.url}
          target="_blank"
          rel="noopener"
          key={p.name}
        >
          <div className="project-image">
            <Image
              src={p.image}
              alt={`${p.name} preview`}
              width={1200}
              height={600}
            />
          </div>
          <div className="project-body">
            <div className="project-top">
              <span className="project-name">{p.name}</span>
              <span className="project-stars mono">
                <Icon name="star" size={12} />
                {p.stars}
              </span>
            </div>
            <span className="project-org mono">{p.org}</span>
            <p className="project-desc">{p.description}</p>
            <span className="project-lang">
              <span
                className="lang-dot"
                style={{ background: p.languageColor }}
              />
              {p.language}
            </span>
          </div>
        </a>
      ))}
    </div>
  ));

  const postSlides: ReactNode[] = chunk(linkedInPosts, 2).map((pair, i) => (
    <div className="li-grid" key={i}>
      {pair.map((p) => (
        <div className="li-item" key={p.src}>
          <div
            className="li-card"
            style={{ "--li-h": `${p.height}px` } as CSSProperties}
          >
            <iframe
              src={p.src}
              height={p.height}
              width="504"
              frameBorder={0}
              allowFullScreen
              title="Embedded post"
            />
          </div>
          <a
            className="li-fallback"
            href={p.href}
            target="_blank"
            rel="noopener"
          >
            Not loading? View on LinkedIn
          </a>
        </div>
      ))}
    </div>
  ));

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#top" className="nav-name" aria-label="Shreyas Hegde">
            <span className="brand-mark" />
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contributions">Contributions</a>
            <a href="#posts">Posts</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="splash">
        <BackgroundCarousel images={galleryImages} intervalMs={5000} />
        <div className="splash-content">
          <p className="splash-line splash-line-1">Hi, I&apos;m Shreyas.</p>
          <p className="splash-line splash-line-2">
            Compiler engineer and systems geek.
          </p>
        </div>
        <a href="#top" className="scroll-cue" aria-label="Scroll down">
          <span>Scroll</span>
          <span className="scroll-arrow">&#8595;</span>
        </a>
      </div>

      <main id="top">
        <header className="hero">
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <p className="bio">{profile.bio}</p>

          <div className="status-row">
            {profile.status.map((s) => (
              <span className="status-pill" key={s}>
                {s}
              </span>
            ))}
          </div>

          <div className="link-row">
            {profile.links.map((l) => (
              <a
                className="link-btn"
                href={l.href}
                key={l.label}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener" : undefined}
              >
                <Icon name={l.icon} size={15} />
                {l.label}
              </a>
            ))}
          </div>
        </header>

        <section id="experience">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((e) => (
              <div className="tl-entry" key={e.title}>
                <div className="tl-dot" />
                <div className="tl-body">
                  <div className="entry-head">
                    <span className="entry-title">{e.title}</span>
                    <span className="entry-date mono">{e.date}</span>
                  </div>
                  <div className="entry-sub">{e.sub}</div>
                  <ul>
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p className="section-intro">
            A few things I&apos;ve built or actively contribute to, pulled
            straight from GitHub with live stars.
          </p>
          <Carousel slides={projectSlides} autoPlayMs={6000} />
        </section>

        <section id="contributions">
          <h2>Open Source Contributions</h2>
          <AutoScrollList>
            {contributions.map((c) => (
              <a
                className="contrib-row"
                href={c.url}
                target="_blank"
                rel="noopener"
                key={c.url}
              >
                <span className="contrib-org mono">
                  {c.org}/{c.repo}
                </span>
                <span className="contrib-title">{c.title}</span>
                <span className={`contrib-status contrib-status-${c.status}`}>
                  <span className="contrib-dot" />
                  {c.status}
                </span>
              </a>
            ))}
          </AutoScrollList>

          <div className="org-row">
            {contribOrgs.map((o) => (
              <a
                className="org-logo"
                href={o.url}
                target="_blank"
                rel="noopener"
                key={o.name}
                title={o.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={o.logo} alt={o.name} width={56} height={56} />
                <span>{o.name}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="posts">
          <h2>Posts</h2>
          <Carousel slides={postSlides} autoPlayMs={7000} />
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          <div className="achieve-grid">
            {achievements.map((a) => (
              <div className="achieve-card" key={a.bold}>
                <div className="achieve-bold">{a.bold}</div>
                <p>{a.rest}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-groups">
            {skills.map((s) => (
              <div className="skills-group" key={s.group}>
                <div className="skills-label mono">{s.group}</div>
                <div className="chip-row">
                  {s.items.map((i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i.name}
                      className="skill-icon"
                      src={`/skills/${i.icon}.svg`}
                      alt={i.name}
                      title={i.name}
                      width={22}
                      height={22}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="entry">
            <div className="entry-head">
              <span className="entry-title">{education.school}</span>
              <span className="entry-date mono">{education.date}</span>
            </div>
            <div className="entry-sub">{education.sub}</div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="section-intro">
            Want to build something together?
          </p>
          <a className="link-btn" href="mailto:shreyashegde@acm.org">
            <Icon name="mail" size={15} />
            shreyashegde@acm.org
          </a>
        </section>

        <footer>
          <span className="brand-mark footer-mark" aria-label="Shreyas Hegde" />
          <span className="mono footer-copyright">
            &#169; {new Date().getFullYear()} Shreyas Hegde
          </span>
        </footer>
      </main>
    </>
  );
}
