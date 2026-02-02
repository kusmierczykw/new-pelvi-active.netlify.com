import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly _localStorage = isPlatformBrowser(inject(PLATFORM_ID)) ? localStorage : null;

  public setItem(key: string, value: string): void {
    this._localStorage?.setItem(key, value);
  }

  public getItem(key: string): string | null | undefined {
    return this._localStorage?.getItem(key);
  }

  public removeItem(key: string): void {
    this._localStorage?.removeItem(key);
  }

  public isExists(key: string): boolean {
    try {
      return !!this.getItem(key);
    } catch (error) {
      return false;
    }
  }
}
