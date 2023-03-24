import {Component, ElementRef, ViewChild} from '@angular/core';
import { google } from 'googleapis';
import {FormControl, FormGroup} from "@angular/forms";
import {TiktokServiceService} from "./services/tiktok-service.service";
import axios from 'axios';

import * as fs from "fs";
import {GoogleApiService} from "./services/google-api.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog ,private http: HttpClient, private tiktokServiceService: TiktokServiceService, private readonly google : GoogleApiService) {
  }


}

