import { Component, computed, input, signal } from '@angular/core';
import { ViewportEnterDirective } from '@ui/directives/viewport-enter';
import { NgOptimizedImage } from '@angular/common';
import { ViewportLeaveDirective } from '@ui/directives/viewport-leave';

@Component({
  selector: 'app-reveal-stagger',
  imports: [ViewportEnterDirective, NgOptimizedImage, ViewportLeaveDirective],
  templateUrl: './reveal-stagger.html',
  styleUrl: './reveal-stagger.scss',
})
export class RevealStagger {
  readonly delay = input(500);
  readonly src = input('');
  readonly alt = input('');
  readonly offset = input(5);
  readonly columnsCount = input(10);
  readonly columns = computed(() =>
    Array(10)
      .fill(null)
      .map((_, i) => i),
  );

  readonly contentTransitionDelay = computed(() => {
    const delay = 1000;

    return this.visible() ? delay + this.delay() : 0;
  });

  readonly columnTransitionDuration = computed(() => {
    return this.visible() ? this.delay() : 0;
  });

  readonly visible = signal(false);

  handleViewportEnter(): void {
    this.visible.set(true);
  }

  handleViewportLeave(): void {
    this.visible.set(false);
  }

  protected columnTransitionDelayFor(column: number): number {
    return this.visible() ? this.delay() + ((column + 1) % this.offset()) * 200 : 0;
  }
}
