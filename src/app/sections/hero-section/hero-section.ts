import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { Scrolling } from '@ui/components/scrolling/scrolling';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [Scrolling],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection implements AfterViewInit {
  private readonly videoElementRef =
    viewChild.required<ElementRef<HTMLVideoElement>>('videoElementRef');
  private readonly platform = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platform)) {
      const videoElementRef = this.videoElementRef().nativeElement;

      if (!videoElementRef) {
        return;
      }

      videoElementRef.playbackRate = 0.8;

      void videoElementRef.play();
    }
  }
}
