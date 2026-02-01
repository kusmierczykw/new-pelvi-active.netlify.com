import { Guid } from '@core/types/guid';

export class MenuItemType {
  constructor(
    private readonly data: {
      id: Guid;
      label: string;
      anchor: string;
    },
  ) {}

  get id(): Guid {
    return this.data.id;
  }

  get label(): string {
    return this.data.label;
  }

  get anchor(): string {
    return this.data.anchor;
  }
}
