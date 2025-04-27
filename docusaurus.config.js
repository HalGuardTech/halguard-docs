// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: ' HalGuard',
  tagline: 'Guarding Reality. Defending Trust.',
  favicon: 'img/logo_with_bg.png',

  url: 'https://halguard.io', // Update to your real production URL
  baseUrl: '/',

  organizationName: 'halguard', // Your GitHub org/user
  projectName: 'halguard-docs', // Your GitHub repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/halguard/halguard-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/halguard/halguard-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/halguard-social-card.jpg', // Update with your social share image
    navbar: {
      title: 'HalGuard',
      logo: {
        alt: 'HalGuard Logo',
        src: 'img/logo.png', // Update with your logo file
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'halguardSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Knowledge Hub', position: 'left'},
        {
          href: 'https://github.com/halguard/halguard-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro/what-is-halguard',
            },
            {
              label: 'HalGuard Shield',
              to: '/docs/voice-shield/overview',
            },
            {
              label: 'Architecure Guide',
              to: '/docs/architecture/system-overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/halguard', // Replace with your LinkedIn page
            },
            {
              label: 'Slack Community',
              href: 'https://halguard.io/slack-invite', // Replace with your invite link
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Knowledge Hub',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/halguard/halguard-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HalGuard. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
