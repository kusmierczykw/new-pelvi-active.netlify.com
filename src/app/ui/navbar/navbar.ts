import { Component, inject, signal } from '@angular/core';
import { MenuItemType } from '../menu-item/menu-item-type';
import { MenuItem } from '@ui/menu-item/menu-item';
import { NgOptimizedImage } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  imports: [MenuItem, NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly visible = signal(true);
  readonly breakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.breakpointObserver.observe(['']).subscribe(() => {
      console.log('test');
    });
  }

  readonly items = signal<MenuItemType[]>([
    new MenuItemType({
      id: '957ef73d-30fb-432b-ad30-8b0aebf0ec5b',
      label: 'Start',
      routerLink: [],
    }),
    new MenuItemType({
      id: '6e6c6236-ef33-45da-9e9a-b3dc00e6c866',
      label: 'O mnie',
      routerLink: [],
    }),
    new MenuItemType({
      id: 'c620776e-1c15-4472-8ceb-6adedd1cb4b9',
      label: 'Kursy',
      routerLink: [],
    }),
    new MenuItemType({
      id: 'd7b0f320-97cb-4227-ba68-8c095c1b284a',
      label: 'Oferta',
      routerLink: [],
    }),
    new MenuItemType({
      id: 'c090a649-a7fb-411d-baba-00f2db5bc228',
      label: 'Cennik',
      routerLink: [],
    }),
    new MenuItemType({
      id: 'ecc99d46-d558-49a0-a87b-9c1df0245104',
      label: 'Kontakt',
      routerLink: [],
    }),
  ]);

  protected handleToggleClick(): void {
    this.visible.update((value) => !value);
  }
}
