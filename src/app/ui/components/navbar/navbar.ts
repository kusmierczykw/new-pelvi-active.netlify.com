import { Component, inject, NgZone, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { MenuItemType } from '../menu-item/menu-item-type';
import { MenuItem } from '@ui/components/menu-item/menu-item';
import { isPlatformBrowser, NgClass, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { Breakpoint } from '@core/breakpoints/breakpoint';
import { Icon } from '@ui/components/icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [MenuItem, NgOptimizedImage, Icon, NgTemplateOutlet, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);
  readonly breakpoint = inject(Breakpoint);

  private readonly zone = inject(NgZone);
  private readonly platform = inject(PLATFORM_ID);

  private onScroll?: () => void;

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      this.breakpointChangeListener();
      this.setupScrollListener();
    }
  }

  ngOnDestroy(): void {
    this.onScroll?.();
  }

  readonly items = signal<MenuItemType[]>([
    new MenuItemType({
      id: '957ef73d-30fb-432b-ad30-8b0aebf0ec5b',
      label: 'Start',
      anchor: '567752ac-8d2d-41ea-bbf8-90dd87d8385e',
    }),
    new MenuItemType({
      id: '6e6c6236-ef33-45da-9e9a-b3dc00e6c866',
      label: 'O mnie',
      anchor: 'f691266a-9ea8-4e75-9c99-2ad92f93c3c8',
    }),
    new MenuItemType({
      id: 'c620776e-1c15-4472-8ceb-6adedd1cb4b9',
      label: 'Kursy i szkolenia',
      anchor: 'acd4354b-2d47-4ba6-a6df-6b36e7fea6d8',
    }),
    new MenuItemType({
      id: 'd7b0f320-97cb-4227-ba68-8c095c1b284a',
      label: 'Oferta',
      anchor: '1a5cd9c7-76b8-4ee7-ab7c-b1e55c869724',
    }),
    new MenuItemType({
      id: 'c090a649-a7fb-411d-baba-00f2db5bc228',
      label: 'Cennik',
      anchor: 'a4fa47d5-a2c9-4430-98fb-22290cd88499',
    }),
    new MenuItemType({
      id: 'ecc99d46-d558-49a0-a87b-9c1df0245104',
      label: 'Kontakt',
      anchor: 'b060abf2-70ff-4e72-bb4b-e72a4ddefc13',
    }),
  ]);

  private setupScrollListener(): void {
    const threshold = 50;

    this.zone.runOutsideAngular(() => {
      const handler = () => {
        const y = window.scrollY || document.documentElement.scrollTop || 0;
        const next = y > threshold;

        if (next !== this.isScrolled()) {
          this.zone.run(() => this.isScrolled.set(next));
        }
      };

      window.addEventListener('scroll', handler, { passive: true });
      handler();

      this.onScroll = () => window.removeEventListener('scroll', handler);
    });
  }

  protected handleToggleMenuClick(): void {
    this.isMenuOpen.update((value) => !value);
  }

  private breakpointChangeListener(): void {
    this.breakpoint.observe('max-md').subscribe(() => {
      this.isMenuOpen.set(false);
    });
  }
}
