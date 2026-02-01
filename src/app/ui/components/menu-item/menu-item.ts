import { Component, computed, input, Signal } from '@angular/core';
import { MenuItemType } from './menu-item-type';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  imports: [NgClass],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
})
export class MenuItem {
  readonly variant = input<'default' | 'primary'>('default');
  readonly item = input.required<MenuItemType>();
  readonly withCenteredIndicator = input<boolean>(false);
  readonly anchor = this.anchorSignal();

  protected readonly isDefault = computed(() => this.variant() === 'default');
  protected readonly isPrimary = computed(() => this.variant() === 'primary');

  private anchorSignal(): Signal<string> {
    return computed(() => {
      return `#${this.item().anchor}`;
    });
  }
}
