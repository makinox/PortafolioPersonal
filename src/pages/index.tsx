import React, { useState } from 'react';
import { SEO, Navbar, Hero, About, Experience, Studies, Contact, Footer, Top, Bottom } from '../components/';
import { graphql } from 'gatsby';

const IndexPage = ({ data }: { data: any }) => {
  const [lang, useLang] = useState<'en' | 'es'>('en');
  const getLang = (e: any) => useLang(e.target.value);
  // console.log(data.placeholderImage.publicURL);

  return (
    <>
      <SEO title="Jesús David Bossa" image={data.placeholderImage.publicURL} pathname=" " />
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

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "preview.png" }) {
      publicURL
    }
  }
`;
