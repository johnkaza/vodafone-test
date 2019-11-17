const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletL: '992px',
  laptop: '1024px',
  laptopM: '1180px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileS: `@media screen and (min-width: ${sizes.mobileS})`,
  mobileM: `@media screen and (min-width: ${sizes.mobileM})`,
  mobileL: `@media screen and (min-width: ${sizes.mobileL})`,
  tablet: `@media screen and (min-width: ${sizes.tablet})`,
  tabletL: `@media screen and (min-width: ${sizes.tabletL})`,
  laptop: `@media screen and (min-width: ${sizes.laptop})`,
  laptopM: `@media screen and (min-width: ${sizes.laptopM})`,
  laptopL: `@media screen and (min-width: ${sizes.laptopL})`,
  desktop: `@media screen and (min-width: ${sizes.desktop})`,
  desktopL: `@media screen and (min-width: ${sizes.desktop})`
};
