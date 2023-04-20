// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hashdata Docs',
  tagline: 'Documentation of Hashdata\'s Softwares',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.hashdata.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hashdata-org', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hashdata-org/docs/tree/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hashdata-org/docs/tree/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hashdata-social-card.webp',
      navbar: {
        title: 'Hashdata\'s Documentation',
        logo: {
          alt: 'Hashdata Docs',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'}
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Web',
            items: [
              {
                label: 'Main home page',
                to: 'https://www.hashdata.app',
              }
            ],
          },
          {
            title: 'Apps',
            items: [
              {
                label: 'Android App',
                to: 'https://play.google.com/store/apps/details?id=br.com.hashdata.mobileapp',
              },
              {
                label: 'iOS App (Apple)',
                to: 'https://itunes.apple.com/br/app/hashdata/id1379827155?ls=1&mt=8',
              },
              {
                label: 'Forms Web App',
                to: 'https://my.hashdata.app',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/@hashdata9298/videos',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hashdata, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
