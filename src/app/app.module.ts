import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterOutlet} from "@angular/router";
import {NavBarComponent} from "../components/nav-bar/nav-bar.component";
import {AboutComponent} from "../components/about/about.component";
import {ExperienceComponent} from "../components/experience/experience.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MouseBackgroundDirective} from "../directive/mouse-background.directive";
import {MatDialogModule} from "@angular/material/dialog";
import {PdfModalComponent} from "../common/pdf-modal-component/pdf-modal-component.component";
import {MyProjectsComponent} from "../components/my-projects/my-projects.component";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    ExperienceComponent,
    MouseBackgroundDirective,
    PdfModalComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxExtendedPdfViewerModule,
    CommonModule,
    RouterOutlet,
    NgOptimizedImage,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
