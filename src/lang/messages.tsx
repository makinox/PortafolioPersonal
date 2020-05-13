const message = {
  en: {
    'nav.about': 'About',
    'nav.exp': 'Experience',
    'nav.edu': 'Education',
    'nav.contact': 'Contact',

    'hero.sub': 'Software engineer',

    'about.title': 'A little bit about me ...',
    'about.p1': 'I am a guy from Colombia who likes programming very much, usually curious about all that fantastic technology offers.',
    'about.p2':
      'During the last two years, I have dedicated myself to developing and innovating in technology projects, contributing to their development and future.',
    'about.p3':
      'I work in frontend, backend and devop. I build and design different types of software turning them into incredible products and services.',
    'about.p4': 'Let me show you.',

    'exp.title': "A couple of things I've done",
    'exp.sub1': 'Project in production',
    'exp.sub2': 'Personal project',

    'edu.title': 'What I have learned so far',
    'edu.sub': 'You can find all the supports here',
    'edu.button': 'Certificates',

    'contact.title': 'Contact',
    'contact.sub': "Let's talk",
  },
  es: {
    'nav.about': 'Acerca',
    'nav.exp': 'Experiencia',
    'nav.edu': 'Educación',
    'nav.contact': 'Contactame',

    'hero.sub': 'Ingeniero de software',

    'about.title': 'Un poco sobre mi ...',
    'about.p1': 'Soy un chico de Colombia que le gusta mucho programar, normalmente curioso por todo aquello fantástico que ofrece la tecnología.',
    'about.p2':
      'Durante los dos últimos años, me he dedicado a desarrollar e innovar en proyectos de tecnología, contribuyendo a su desarrollo y futuro.',
    'about.p3':
      'Trabajo en frontend, backend y devop. Construyo y diseño diferentes tipos de software convirtiéndolos en productos y servicios increíbles.',
    'about.p4': 'Déjame mostrarte.',

    'exp.title': 'Un par de cosas que he hecho',
    'exp.sub1': 'Proyecto en producción',
    'exp.sub2': 'Proyecto personal',

    'edu.title': 'Que sé hasta ahora',
    'edu.sub': 'Puedes encontrar todos los soportes aquí',
    'edu.button': 'Certificados',

    'contact.title': 'Contacto',
    'contact.sub': 'Háblemos',
  },
};

export function getMessage<L extends keyof typeof message, K extends keyof typeof message.en>(lang: L, key: K) {
  return message[lang][key];
}
