import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { SEO, Navbar, Hero, About, Experience, Studies, Contact, Footer, Top, Bottom } from '../components/';

const IndexPage = ({ data }: { data: any }) => {
  const [lang, useLang] = useState<string | any>(window.location.pathname.length > 1 ? window.location.pathname.substring(1, 3) : 'en');

  function HandleLang(e: string) {
    useLang(e);
    navigate(`/${e}`);
  }

  return (
    <>
      <SEO title="Jesús David Bossa" image={data.placeholderImage.publicURL} pathname=" " />
      <Top>
        <Navbar lang={lang} change={HandleLang} />
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
