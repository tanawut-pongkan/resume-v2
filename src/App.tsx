import React, { useEffect, useMemo, useState } from 'react';
import Navbar, { SectionLink } from './components/Navbar';
import Section from './components/Section';
import Hero from './components/Hero';
import ContactDetails from './components/ContactDetails';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Languages from './components/Languages';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { ToastProvider } from './components/Toast';
import resumeEn from './data/resume.en';
import resumeTh from './data/resume.th';

const sectionLinks: SectionLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'contact', label: 'Contact' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact-cta', label: 'Contact CTA' },
];

function App() {
  const [locale, setLocale] = useState<'en' | 'th'>('en');
  const [activeId, setActiveId] = useState<string>('hero');

  const resume = useMemo(() => (locale === 'en' ? resumeEn : resumeTh), [locale]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0.2, 0.5, 1] }
    );

    sectionLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [locale]);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <Navbar
          sections={sectionLinks}
          activeId={activeId}
          locale={locale}
          onLocaleToggle={() => setLocale((prev) => (prev === 'en' ? 'th' : 'en'))}
        />
        <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-12 pt-8 sm:px-6 lg:px-8 print-max-width">
          <Hero data={resume} />
          <Section id="contact" title="Contact / Personal Details" subtitle="Quick ways to reach Tanawut">
            <ContactDetails data={resume} />
          </Section>
          <Section id="about" title="About Me">
            <About summary={resume.summary} />
          </Section>
          <Section id="experience" title="Experience" subtitle="Newest first">
            <ExperienceTimeline items={resume.experiences} />
          </Section>
          <Section id="education" title="Education">
            <Education items={resume.education} />
          </Section>
          <Section id="skills" title="Skills" subtitle="ATS-friendly categories">
            <Skills skills={resume.skills} />
          </Section>
          <Section id="projects" title="Projects" subtitle="Portfolio placeholders">
            <Projects items={resume.projects} />
          </Section>
          <Section id="certifications" title="Certifications">
            <Certifications items={resume.certifications} />
          </Section>
          <Section id="achievements" title="Achievements">
            <Achievements items={resume.achievements} />
          </Section>
          <Section id="languages" title="Languages">
            <Languages items={resume.languages} />
          </Section>
          <Section id="contact-cta" title="Contact CTA" subtitle="Final call to action">
            <ContactCTA data={resume} />
          </Section>
          <Footer />
        </main>
      </div>
    </ToastProvider>
  );
}

export default App;
