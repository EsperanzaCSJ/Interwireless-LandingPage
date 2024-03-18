import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Nosotros',
          href: getPermalink('/nosotros'),
        },
    {
      text: 'Precios',
      href: getPermalink('/precios'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [{ text: 'Escríbenos', href: 'https://wa.link/dhuebg', target: '_blank' }],
};

export const footerData = {
  footNote: `
    <a class="text-orange-600 underline dark:text-muted" href="/contacto"> © Interwireless</a> ·  Todos los derechos reservados.
  `,
};
