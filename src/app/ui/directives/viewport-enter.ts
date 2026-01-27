import {
  Directive,
  ElementRef,
  inject,
  input,
  NgZone,
  OnDestroy,
  OnInit,
  output,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[appViewportEnter]' })
export class ViewportEnterDirective implements OnInit, OnDestroy {
  readonly viewportEnterThreshold = input(0.35);
  readonly viewportEnterRootMargin = input('0px 0px 0px 0px');
  readonly viewportEnter = output<void>();

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private readonly platform = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            return;
          }

          this.zone.run(() => this.viewportEnter.emit());
        },
        {
          threshold: this.viewportEnterThreshold(),
          rootMargin: this.viewportEnterRootMargin(),
        },
      );

      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
