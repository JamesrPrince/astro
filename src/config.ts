import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
website: "https://ekko.dev", // placeholder domain
author: "Ekko",
profile: "https://github.com/ekko",
desc: "Software engineer passionate about building scalable applications and solving complex problems.",
title: "Ekko | Software Engineer",
ogImage: "astropaper-og.jpg",
lightAndDarkMode: true,
postPerIndex: 4,
postPerPage: 6,
scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
showArchives: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
{
    name: "Github",
    href: "https://github.com/ekko",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
},
{
    name: "LinkedIn",
    href: "https://linkedin.com/in/ekko",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
},
{
    name: "Mail",
    href: "mailto:ekko@ekko.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
},
];
