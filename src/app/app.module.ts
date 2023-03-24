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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppRoutingModule} from "./app-routing.module";
import { UploadFromDiskComponent } from './components/upload-from-disk/upload-from-disk.component';
import { ReelsListComponent } from './components/reels-list/reels-list.component';
import { ConcatenateVideosComponent } from './components/concatenate-videos/concatenate-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ReelToSelectComponent,
    UploadFromDiskComponent,
    ReelsListComponent,
    ConcatenateVideosComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BadgeModule,
    ButtonModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
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
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
