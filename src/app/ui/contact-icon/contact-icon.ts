import { Component, input } from '@angular/core';
import { Icon } from '@ui/icon/icon';
import { IconName } from '@ui/icon/icon-name';

@Component({
  selector: 'app-contact-icon',
  imports: [Icon],
  templateUrl: './contact-icon.html',
  styleUrl: './contact-icon.scss',
})
export class ContactIcon {
  readonly name = input.required<IconName>();
}
