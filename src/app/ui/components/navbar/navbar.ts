// navbar.ts
import { isPlatformBrowser, NgClass, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { Component, DestroyRef, inject, NgZone, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { auditTime, map, startWith } from 'rxjs/operators';

import { Breakpoint } from '@core/breakpoints/breakpoint';
import { MenuItemType } from '../menu-item/menu-item-type';
import { MenuItem } from '@ui/components/menu-item/menu-item';
import { Icon } from '@ui/components/icon/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [NgTemplateOutlet, MenuItem, NgClass, Icon, NgOptimizedImage],
})
export class Navbar implements OnInit {
  readonly isMenuOpen = signal(false);
  readonly isScrolled = signal(false);

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

  private readonly breakpoint = inject(Breakpoint);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platform = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      this.breakpointChangeListener();
      this.setupScrollEffects();
    }
  }

  protected handleToggleMenuClick(): void {
    this.isMenuOpen.update((v) => !v);
    document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
  }

  protected handleOverlayMenuClick(): void {
    this.isMenuOpen.set(false);

    document.body.style.overflow = '';
  }

  private setupScrollEffects(): void {
    this.zone.runOutsideAngular(() => {
      fromEvent(window, 'scroll')
        .pipe(
          auditTime(50),
          map(() => window.scrollY > 16),
          startWith(window.scrollY > 16),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe((scrolled) => {
          if (scrolled !== this.isScrolled()) {
            this.zone.run(() => this.isScrolled.set(scrolled));
          }
        });
    });
  }

  private breakpointChangeListener(): void {
    this.breakpoint.observe('max-md').subscribe(() => {
      this.isMenuOpen.set(false);
      document.body.style.overflow = '';
    });
  }
}
