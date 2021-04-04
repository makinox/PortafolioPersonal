import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { getMessage } from '../lang/messages';
import { SEO, Navbar, Hero, About, Experience, Studies, Contact, Footer, Top, Bottom, Gallery } from '../components/';

const IndexPage = ({ data }: { data: any }) => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  const [lang, useLang] = useState<string | any>(url.length > 1 ? url.substring(1, 3) : 'en');

  function HandleLang(e: string) {
    useLang(e);
    navigate(`/${e}`);
  }

  return (
    <>
      <SEO title="Jesús David Bossa" lang={lang} image={data.placeholderImage.publicURL} description={getMessage(lang, 'about.p1')} pathname=" " />
      <Top>
        <Navbar lang={lang} change={HandleLang} />
        <Hero lang={lang} />
        <About lang={lang} />
      </Top>
      <Experience lang={lang} />
      <Studies lang={lang} />
      <Gallery lang={lang} />
      <Bottom>
        <Contact lang={lang} />
        <Footer />
      </Bottom>
    </>
  );
};

export default IndexPage;
