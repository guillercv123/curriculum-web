import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfModalComponentComponent } from './pdf-modal-component.component';

describe('PdfModalComponentComponent', () => {
  let component: PdfModalComponentComponent;
  let fixture: ComponentFixture<PdfModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfModalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
