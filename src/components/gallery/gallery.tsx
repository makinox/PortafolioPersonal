import React from 'react';
import { getMessage } from '../../lang/messages';
import { GalleryCarousel, GallerySubtitle } from './styles';

export default ({ lang }: { lang: 'en' | 'es' }) => {
  const images = [
    {
      imageLink:
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/12522677338215326975087590077419826624949270999928198336691844128954088685569',
      imageSrc:
        'https://lh3.googleusercontent.com/3rFl3YRz-IkuASM30c1OVck3qbab2JKiMuxIzhnDwYv68wSdz6wQjcHB9xMA9j2_uU2F2aB2s_hzBNr3DbjE9CFiqK5jDHzoYs0L=s0',
    },
    {
      imageLink:
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/12522677338215326975087590077419826624949270999928198336691844131153111941121',
      imageSrc:
        'https://lh3.googleusercontent.com/zWXbprVjUr0n2Mhwy__1_g0bTqgeEAE2DhcoO-CnOIJ8MRNHyMTddLimEuJPz1O2oBFRqm_IYjp0r2cm8lBNakRzhIvApjjIneoqjQ=s0',
    },
    {
      imageLink:
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/12522677338215326975087590077419826624949270999928198336691844130053600313345',
      imageSrc:
        'https://lh3.googleusercontent.com/glPwws3LkfUK5VBIHA6qnihJf8uYC0gqkh1htbSjw6j2kn62FrNlTcQZ_V-eJ5Nl_x2Ai_3jX1fCg6t2IPcisHQnc3XyTE549dK6=s0',
    },
    {
      imageLink:
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/12522677338215326975087590077419826624949270999928198336691844133352135196673',
      imageSrc:
        'https://lh3.googleusercontent.com/iSL63W_55GAGO2ntoPZ1PBVNdgotnx9soAJ8opXN4CmxBqilVBqMqjUaHIgO2vQLVljUfIfXQr4MCOb5V3Y_Zs0fCs5XrH11iB6wLw=s0',
    },
    {
      imageLink:
        'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/12522677338215326975087590077419826624949270999928198336691844134451646824449',
      imageSrc:
        'https://lh3.googleusercontent.com/9b70EJM1-yUw0bU2sUHXFP7g6PM2HVitldnKP_TsRZxBS5zhdd3bJWcW5M-wBzKcuTflMd_YAQZ8CD_1ub9cEf-4Sue-_UlKUIFOyg=s0',
    },
  ];

  return (
    <section id="gallery">
      <GallerySubtitle>
        <h3>{getMessage(lang, 'gallery.title')}</h3>
      </GallerySubtitle>
      <GalleryCarousel>
        {images.map((el, idx) => (
          <a key={idx} href={el.imageLink} target="_blank" rel="icon noopener noreferrer" aria-label={`Fotografia ${idx} tomada por Jesus Bossa`}>
            <img src={el.imageSrc} alt="Fotografia tomada por Jesus Bossa" loading="lazy" />
          </a>
        ))}
      </GalleryCarousel>
    </section>
  );
};
