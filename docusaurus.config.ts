import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '個人サイト',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://furutani-site.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'furuSchool', // Usually your GitHub org/user name.
  projectName: '個人サイト', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      {
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'site',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'introSidebar',
          position: 'left',
          label: 'このサイトについて',
        },
        {
          type: 'docSidebar',
          sidebarId: 'mathSidebar',
          position: 'left',
          label: '数学',
        },
        {
          type: 'docSidebar',
          sidebarId: 'physicsSidebar',
          position: 'left',
          label: '物理',
        },       
        {
          type: 'docSidebar',
          sidebarId: 'informationSidebar',
          position: 'left',
          label: '情報系',
        },    
        {
          type: 'docSidebar',
          sidebarId: 'programmingSidebar',
          position: 'left',
          label: 'プログラミング',
        },    
        {
          type: 'docSidebar',
          sidebarId: 'weatherSidebar',
          position: 'left',
          label: '気象',
        },    
        {
          type: 'docSidebar',
          sidebarId: 'othersSidebar',
          position: 'left',
          label: 'その他',
        },     
        {
          href: 'https://github.com/furuSchool',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '記事',
          items: [
            {
              label: 'このサイトについて',
              to: '/docs/intro',
            },
            {
              label: '数学',
              to: '/docs/math',
            },
            {
              label: '物理',
              to: '/docs/physics',
            },
            {
              label: '情報系',
              to: '/docs/information',
            },
            {
              label: 'プログラミング',
              to: '/docs/programming',
            },
            {
              label: '気象',
              to: '/docs/weather',
            },
            {
              label: 'その他',
              to: '/docs/others',
            },
          ],
        },
        {
          title: '外部リンク',
          items: [
            {
              label: '役職決め',
              href: 'https://furuschool.github.io/yakushoku-sort/',
            },
            {
              label: '気象データ可視化サイト',
              href: 'https://capstone-project-a-fjk.onrender.com/',
            },
            {
              label: '竜馬の一生を体験してみよう',
              href: 'https://storymaps.arcgis.com/stories/6b8b5d07c543411a88dff8f960c8aad7',
            },
            {
              label: '東京の今と昔を『写真 × 地図』で冒険しよう',
              href: 'https://gihdedhbfj.reearth.io/',
            },
            {
              label: 'QRコードを体験してみよう！',
              href: 'https://ut-code.github.io/qrcode/',
            },
            {
              label: '灯火のサイエンス',
              href: 'https://www.fire-science.net/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/furuSchool',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 古谷優人. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
