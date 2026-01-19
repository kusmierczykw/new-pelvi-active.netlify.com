import { Component, signal } from '@angular/core';
import { SectionContainer } from '@ui/section-container/section-container';
import { SectionTitle } from '@ui/section-title/section-title';
import { Guid } from '@core/types';

interface Service {
  id: Guid;
  name: string;
  price: string;
  description?: string;
}

@Component({
  selector: 'app-prices-section',
  imports: [SectionContainer, SectionTitle],
  templateUrl: './prices-section.html',
  styleUrl: './prices-section.scss',
})
export class PricesSection {
  readonly services = signal<Service[]>([
    {
      id: 'f3eb46b9-0e8b-4f62-8825-061df41d6a7c',
      name: 'Pierwsza wizyta (diagnostyczna)',
      price: '250 zł',
      description: 'czas trwania do 90 min.',
    },
    {
      id: '46d4f9ae-f3d5-4a15-9812-b77badccb437',
      name: 'Wizyta terapeutyczna',
      price: '200 zł',
      description: 'czas trwania do 60 min.',
    },
    {
      id: '2c87d738-295b-45fc-a645-1ffe6dd15ff3',
      name: 'Masaż leczniczy (częściowy, całościowy)',
      price: '120 - 200 zł',
      description: 'czas trwania 30 - 60 min.',
    },
    {
      id: 'd2f72014-6a14-4bcd-bd5a-b8001990751f',
      name: 'Taping medyczny',
      price: '50 - 70 zł',
      description: 'aplikacja',
    },
    {
      id: 'bb661184-02cb-4569-a425-9c822042b8ed',
      name: 'Wizyta domowa',
      price: 'cena ustalana indywidualnie',
    },
  ]);
}
