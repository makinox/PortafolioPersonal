import React, { useState } from 'react';
import { SEO, Navbar, Hero, About, Experience, Studies, Contact, Footer, Top, Bottom } from '../components/';

const IndexPage = () => {
  const [lang, useLang] = useState<'en' | 'es'>('en');
  const getLang = (e: any) => useLang(e.target.value);

  return (
    <>
      <SEO title="Jesús Bossa" />
      <Top>
        <Navbar lang={lang} change={getLang} />
        <Hero lang={lang} />
        <About lang={lang} />
      </Top>
      <Experience lang={lang} />
      <Studies lang={lang} />
      <Bottom>
        <Contact lang={lang} />
        <Footer />
      </Bottom>
    </>
  );
};

export default IndexPage;
