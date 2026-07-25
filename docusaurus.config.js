// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Assignment 3',
  tagline: 'TWR2019',
  favicon: 'img/kp.png',

// custom plugin
  themes: ['@docusaurus/theme-live-codeblock'],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kalins-place.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TWR2019-AS3/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kalins-place', // Usually your GitHub org/user name.
  projectName: 'TWR2019-AS3', // Usually your repo name.
  deploymentBranch: "static-output",
  trailingSlash: true,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
//        blog: {
//          showReadingTime: true,
//          feedOptions: {
//            type: ['rss', 'atom'],
//            xslt: true,
//          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
//          onInlineTags: 'warn',
//          onInlineAuthors: 'warn',
//          onUntruncatedBlogPosts: 'warn',
//        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AS3 Index',
        logo: {
          alt: 'Assignment 3 Index Page',
          src: 'img/kp.png',
        },
        items: [
          {
            label: 'About Page',
            to: '/docs/about'
          },
          {
            label: 'Contact Page',
            to: '/docs/contact'
          },
          {
            label: 'Plugin Page',
            to: '/docs/plugin'
          },
//          {to: '/blog', label: 'Blog', position: 'left'},
//          {
//            href: 'https://github.com/facebook/docusaurus',
//            label: 'GitHub',
//            position: 'right',
//          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Custom Pages',
            items: [
              {
                label: 'About',
                to: 'docs/about',
              },
              {
                label: 'Contact',
                to: 'docs/contact',
              },
              {
                label: 'Custom Plugin',
                to: 'docs/plugin',
              },
            ],
          },
          {
            title: 'Author',
            items: [
              {
                label: 'Kalin',
                href: 'https://github.com/kalins-place',
              },
            ],
          },
          {
            title: 'Technologies and Tools',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io',
              },
              {
                label: 'NodeJS',
                href: 'https://nodejs.org',
              },
              {
                label: 'Sublime Text',
                href: 'https://www.sublimetext.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kalin's Place. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
