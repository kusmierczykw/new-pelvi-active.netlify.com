import { Component, input } from '@angular/core';
import { MenuItemType } from './menu-item-type';

@Component({
  selector: 'app-menu-item',
  imports: [],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.scss',
})
export class MenuItem {
  readonly item = input.required<MenuItemType>();
}
