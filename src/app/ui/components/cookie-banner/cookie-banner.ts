import { Component, inject, OnInit, signal } from '@angular/core';
import { LocalStorageService } from '@core/storage/local-storage.service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss',
})
export class CookieBanner implements OnInit {
  private readonly cookieBannerKey = 'fc156ae2-11af-446d-a6d8-b9c364bb1e74';
  private readonly storage = inject(LocalStorageService);

  protected readonly visible = signal(false);

  public ngOnInit(): void {
    if (this.shouldShowCookieBanner()) {
      this.visible.set(true);
    }
  }

  public handleCloseClick(): void {
    this.visible.set(false);
  }

  public handleAcceptClick(): void {
    this.visible.set(true);
    this.storage.setItem(this.cookieBannerKey, 'true');
  }

  private shouldShowCookieBanner(): boolean {
    return !this.storage.isExists(this.cookieBannerKey);
  }
}
