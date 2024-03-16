import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Nosotros',
          href: getPermalink('/about'),
        },
    {
      text: 'Servicios',
      href: getPermalink('/services'),
    },
    {
      text: 'Precios',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Escríbenos', href: 'https://google.com', target: '_blank' }],
};

export const footerData = {
  footNote: `
    <a class="text-blue-600 underline dark:text-muted" href="https://google.com/"> © Interwireless</a> ·  Todos los derechos reservados.
  `,
};
