import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('hoverEffect', [
      state('default', style({ transform: 'scale(1)' })), // Estado inicial
      state('hover', style({ transform: 'scale(1.1)' })), // Estado al pasar el mouse
      transition('default <=> hover', animate('300ms ease-in-out')), // Animación entre estados
    ]),
    trigger('clickEffect', [
      state('default', style({ transform: 'scale(1)' })),
      state('clicked', style({ transform: 'scale(0.9)' })),
      transition('default <=> clicked', animate('200ms ease-in-out')),
    ]),
  ],
})
export class NavBarComponent {
  hoveredSection: string = '';
  activeSection: string = '#about';

  handleScroll(event: Event, section: string): void {
    event.preventDefault();
    const target = document.querySelector(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = section; // Actualiza la sección activa
    }
  }
}
