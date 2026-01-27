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

@Directive({ selector: '[appViewportLeave]' })
export class ViewportLeaveDirective implements OnInit, OnDestroy {
  readonly viewportLeaveThreshold = input(0);
  readonly viewportLeaveRootMargin = input('0px 0px 0px 0px');
  readonly viewportLeave = output<void>();

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
            this.zone.run(() => this.viewportLeave.emit());
          }
        },
        {
          threshold: this.viewportLeaveThreshold(),
          rootMargin: this.viewportLeaveRootMargin(),
        },
      );

      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
