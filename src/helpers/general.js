import slugify from 'slugify';

export const navbarLinks = [
  {
    path: '/',
    name: 'Home'
  }
];

const slugifyOptions = {
  replacement: '-', // replace spaces with replacement
  remove: null, // regex to remove characters
  lower: true // result in lower case
};

export const slugifyText = text => slugify(text, slugifyOptions);
