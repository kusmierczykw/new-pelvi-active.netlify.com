import { Component, computed, input } from '@angular/core';
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

  protected readonly isDefault = computed(() => this.variant() === 'default');
  protected readonly isPrimary = computed(() => this.variant() === 'primary');
}
