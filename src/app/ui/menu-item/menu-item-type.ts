import { RouterLink } from '@core/types';
import { Guid } from '@core/types/guid';

export class MenuItemType {
  constructor(
    private readonly data: {
      id: Guid;
      label: string;
      routerLink: RouterLink;
    },
  ) {}

  get id(): Guid {
    return this.data.id;
  }

  get label(): string {
    return this.data.label;
  }

  get routerLink(): RouterLink {
    return this.data.routerLink;
  }
}
