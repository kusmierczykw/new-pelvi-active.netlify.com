export const Icons = {
  ['x-lg']: 'bi bi-x-lg',
  ['list']: 'bi bi-list',
  ['justify-right']: 'bi bi-justify-right',
  ['justify-left']: 'bi bi-justify-left',
  ['geo-alt-fill']: 'bi bi-geo-alt-fill',
  ['browser-chrome']: 'bi bi-browser-chrome',
  ['telephone-fill']: 'bi bi-telephone-fill',
  ['envelope-fill']: 'bi bi-envelope-fill',
} as const;

export type IconName = keyof typeof Icons;
export type IconCssClass = (typeof Icons)[IconName];
