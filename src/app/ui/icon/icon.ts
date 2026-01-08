import { Component, computed, input } from '@angular/core';
import { IconName, Icons } from '@ui/icon/icon-name';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly cssClass = computed(() => Icons[this.name()]);
}
