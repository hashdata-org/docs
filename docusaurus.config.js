// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Hashdata Docs',
    tagline: 'Documentation of Hashdata\'s Softwares',
    url: 'https://docs.hashdata.app', // Set the /<baseUrl>/ pathname under which your site is served
    baseUrl: '/docs/',
    favicon: 'img/favicon.ico',
    organizationName: 'hashdata-org', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    staticDirectories: ['static'],

    themeConfig: {
        docs: {
          sidebar: {
              hideable: true,
              autoCollapseCategories: true,
          },
        },
        imageZoom: {
            selector: '.markdown img:not(.no-zoom)',
            options: {
                margin: 24,
                background: '#d6d6d6',
                scrollOffset: 10,
            }
        },

        // Replace with your project's social card
        image: 'img/hashdata-social-card.webp',
        navbar: {
            title: 'Documentação HashData ',
            logo: {
                alt: 'Hashdata Docs',
                src: 'img/logo.svg',
            },
            items: [
                {to: '/', label: 'Guia do Usuário', position: 'right'},
                {
                    href: 'https://hashdata.com.br',
                    label: 'Portal Web',
                    position: 'right',
                    'aria-label': 'Abre o portal Hashdata em uma nova janela.',
                },
                {
                    href: 'https://my.hashdata.app',
                    label: 'Aplicativo Desktop',
                    position: 'right',
                    'aria-label': 'Abre o aplicativo Hashdata em uma nova janela.',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Portal Web',
                    items: [
                        {
                            label: 'Página Inicial',
                            to: 'https://www.hashdata.app',
                        }
                    ],
                },
                {
                    title: 'Aplicativos',
                    items: [
                        {
                            label: 'Android',
                            to: 'https://play.google.com/store/apps/details?id=br.com.hashdata.mobileapp',
                        },
                        {
                            label: 'iOS (Apple)',
                            to: 'https://itunes.apple.com/br/app/hashdata/id1379827155?ls=1&mt=8',
                        },
                        {
                            label: 'Desktop',
                            to: 'https://my.hashdata.app',
                        }
                    ],
                },
                {
                    title: 'Redes Sociais',
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
            theme: lightTheme,
            darkTheme: darkTheme,
        },
    },

    presets: [
        ['@docusaurus/preset-classic',
            ({
                docs: {
                    routeBasePath: '/', sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/hashdata-org/docs/tree/master/',
                    path: 'docs',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                }, blog: {
                    showReadingTime: true, // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/hashdata-org/docs/tree/master/'
                }, theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),],],
    plugins: [
        'plugin-image-zoom'],
    markdown: {
        mermaid: true,
    },
    themes: [
        '@docusaurus/theme-mermaid'],
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'pt', locales: ['pt', 'en', 'es'],
    },
};

module.exports = config;
