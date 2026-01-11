import { inject, Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

export const Breakpoints = {
  ['max-sm']: '40rem',
  ['max-md']: '48rem',
  ['max-lg']: '64rem',
  ['max-2xl']: '96rem',
};

export type BreakpointName = keyof typeof Breakpoints;

@Injectable({
  providedIn: 'root',
})
export class Breakpoint {
  private readonly breakpointObserver = inject(BreakpointObserver);

  observe(name: BreakpointName): Observable<boolean> {
    const value = Breakpoints[name];

    return this.breakpointObserver
      .observe([`(max-width: ${value})`])
      .pipe(map(({ matches }) => matches));
  }
}
