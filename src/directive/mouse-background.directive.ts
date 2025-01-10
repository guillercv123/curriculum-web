import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMouseBackground]'
})
export class MouseBackgroundDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Estilos iniciales para el fondo dinámico
    this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');
    this.renderer.setStyle(this.el.nativeElement, 'top', '0');
    this.renderer.setStyle(this.el.nativeElement, 'left', '0');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'height', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'z-index', '30');
    this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background 0.3s ease');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const x = event.clientX;
    const y = event.clientY;

    const gradient = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 70%)`;
    this.renderer.setStyle(this.el.nativeElement, 'background', gradient);
  }
}
