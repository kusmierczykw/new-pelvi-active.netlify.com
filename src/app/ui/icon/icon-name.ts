export const Icons = {
  ['x-lg']: 'bi bi-x-lg',
  ['list']: 'bi bi-list',
} as const;

export type IconName = keyof typeof Icons;
export type IconCssClass = (typeof Icons)[IconName];
