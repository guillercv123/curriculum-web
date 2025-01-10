// pdf-modal.component.ts
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-pdf-modal',
  template: `
    <div [@macOSAnimation]  class="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ease-out" (click)="onCloseModal($event)">
      <div class="bg-white p-8 rounded-lg w-11/12 sm:w-3/4 lg:w-1/2 transition-transform transform opacity-0 scale-95 sm:scale-100"
           [ngClass]="{
              'opacity-100 scale-100': isModalOpen,
              'opacity-0 scale-95': !isModalOpen
            }"
           (click)="onModalClick($event)">
        <ngx-extended-pdf-viewer
          [src]="data.pdfSrc"
          [height]="'500px'"
          [zoom]="'auto'"
          [showToolbar]="true"
          [showSecondaryToolbarButton] ="false"
          [showSidebarButton]="false"
          [showFindButton]="false"
          [showPagingButtons]="false"
          [showZoomButtons]="true"
          [showPresentationModeButton]="false"
          [showPrintButton]="false"
          [showOpenFileButton] = "false"
          [showDownloadButton]="true"
          backgroundColor="#ffffff">
        </ngx-extended-pdf-viewer>
      </div>
    </div>
  `,
  styleUrl: './pdf-modal-component.component.css',
  animations: [
    trigger('macOSAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.6) translateY(-20px)'
        }),
        animate('300ms cubic-bezier(0.2, 0.0, 0.2, 1)',
          style({
            opacity: 1,
            transform: 'scale(1) translateY(0)'
          })
        )
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0.0, 1, 1)',
          style({
            opacity: 0,
            transform: 'scale(0.9) translateY(10px)'
          })
        )
      ])
    ])
  ]
})
export class PdfModalComponent implements OnInit {
  isModalOpen = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { pdfSrc: string },
    private dialogRef: MatDialogRef<PdfModalComponent>
  ) {}
  ngOnInit() {
      this.isModalOpen = true;
  }

  onCloseModal(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.dialogRef.close();
    }
  }

  onModalClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
