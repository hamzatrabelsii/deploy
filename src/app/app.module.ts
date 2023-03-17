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
import {OAuthModule} from "angular-oauth2-oidc";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";

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
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
