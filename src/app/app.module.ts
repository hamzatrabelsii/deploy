import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BadgeModule} from 'primeng/badge';
import {ButtonModule} from 'primeng/button';
import { SafePipe } from './pipes/safe.pipe';
import { ReelToSelectComponent } from './components/reel-to-select/reel-to-select.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ReelToSelectComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BadgeModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
