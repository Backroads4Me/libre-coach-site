// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://rvlink.app',

  integrations: [
    starlight({
      title: 'RV Link',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      lastUpdated: true,
      editLink: {
        baseUrl: 'https://github.com/Backroads4Me/rv-link-site/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Backroads4Me'
        },
        {
          icon: 'discourse',
          label: 'Community Forum',
          href: 'https://forum.rvlink.app'
        },
      ],
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'What is RV-Link?', slug: 'introduction/what-is-rvlink' },
            { label: 'Hardware Options', slug: 'introduction/hardware-options' },
            { label: 'Choose Your Path', slug: 'introduction/choose-your-path' },
          ],
        },
        {
          label: 'Installation Guide',
          items: [
            { label: 'DIY Build', slug: 'installation/diy-build' },
            { label: 'Manual Install', slug: 'installation/manual-install' },
            { label: 'Hardware Assembly', slug: 'installation/hardware-assembly' },
            { label: 'Connect to RV CAN Bus', slug: 'installation/can-connection' },
            { label: 'Identify Your Switches', slug: 'installation/identifying-switches' },
          ],
        },
        {
          label: 'Home Assistant Setup',
          autogenerate: { directory: 'home-assistant' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Troubleshooting',
          autogenerate: { directory: 'troubleshooting' },
        },
        {
          label: 'Community',
          autogenerate: { directory: 'community' },
        },
      ],
    }),
  ],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "compile",
  }),
});
