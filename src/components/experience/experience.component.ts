import { Component } from '@angular/core';
import {PdfModalComponent} from "../../common/pdf-modal-component/pdf-modal-component.component";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  url: string = '';
  constructor(private dialog: MatDialog) {}

  openPdfModal(){
    this.dialog.open(PdfModalComponent, {
      data: {
        pdfSrc: environment.production ?'/curriculum-web/assets/pdf/cv.pdf'  :  '/assets/pdf/cv.pdf'
      },
      width: '80%',
      height: '80%',
      panelClass: ['custom-modal-panel', 'macos-modal'],
      enterAnimationDuration: '400ms',
      exitAnimationDuration: '300ms'
    });
  }
}
