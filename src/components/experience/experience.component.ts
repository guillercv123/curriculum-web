import { Component } from '@angular/core';
import {PdfModalComponent} from "../../common/pdf-modal-component/pdf-modal-component.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  constructor(private dialog: MatDialog) {}
  openPdfModal(){
    this.dialog.open(PdfModalComponent, {
      data: {
        pdfSrc: '/assets/pdf/cv.pdf'  // Asegúrate de que esta ruta sea correcta
      },
      width: '80%',
      height: '80%',
      panelClass: ['custom-modal-panel', 'macos-modal'],
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '300ms'
    });
  }
}
