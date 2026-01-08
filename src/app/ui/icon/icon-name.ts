export const Icons = {
  ['x-lg']: 'bi bi-x-lg',
  ['list']: 'bi bi-list',
  ['justify-right']: 'bi bi-justify-right',
  ['justify-left']: 'bi bi-justify-left',
} as const;

export type IconName = keyof typeof Icons;
export type IconCssClass = (typeof Icons)[IconName];
