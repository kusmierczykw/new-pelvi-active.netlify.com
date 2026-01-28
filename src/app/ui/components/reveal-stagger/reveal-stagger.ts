import { Component, computed, input, signal } from '@angular/core';
import { ViewportEnterDirective } from '@ui/directives/viewport-enter';
import { ViewportLeaveDirective } from '@ui/directives/viewport-leave';

@Component({
  selector: 'app-reveal-stagger',
  imports: [ViewportEnterDirective, ViewportLeaveDirective],
  templateUrl: './reveal-stagger.html',
  styleUrl: './reveal-stagger.scss',
})
export class RevealStagger {
  readonly delay = input(500);
  readonly src = input('');
  readonly alt = input('');
  readonly offset = input(4);
  readonly columnsCount = input(5);
  readonly columns = computed(() =>
    Array(this.columnsCount())
      .fill(null)
      .map((_, i) => i),
  );

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
    return this.visible() ? this.delay() / 2 + ((column + 1) % this.offset()) * 200 : 0;
  }
}
