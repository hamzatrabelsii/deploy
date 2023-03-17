import { Component } from '@angular/core';
import { google } from 'googleapis';
import {FormControl, FormGroup} from "@angular/forms";
import {TiktokServiceService} from "./services/tiktok-service.service";
import axios from 'axios';

import * as fs from "fs";
import {GoogleApiService} from "./services/google-api.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialAppFront';
  allInstagramReels: string[] = [];
  selectCount : number = 0;
  tiktokForm: FormGroup;
  private apiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';

  constructor(private http: HttpClient, private tiktokServiceService: TiktokServiceService, private readonly google : GoogleApiService) {


    this.tiktokForm = new FormGroup({
      'tiktokPageLink' : new FormControl(null)
    });
  }

  ngOnInit(): void {

    this.allInstagramReels=[];

  }

  selectReel() {
    this.selectCount++;
  }

  onSubmitTikTok() {
    console.log(this.tiktokForm.value.tiktokPageLink);
    this.tiktokServiceService.getAllTiktokReels("https://www.tiktok.com/@r__aziz?lang=en").subscribe(res => {
      this.allInstagramReels.push(...res);
      console.log(this.allInstagramReels);
      console.log("sucess");
    });

  }

  onFolderSelected(event: any) {
    console.log(process.cwd());
    let fileSelector = document.getElementById('fileselector');
    console.log(fileSelector);


  }


   test(){

     const axios = require('axios');
     const inputElement = document.querySelector('input[type="file"]');
     // @ts-ignore
     const videoFile = inputElement.files[0];
     console.log("teeeeeees");
     this.tiktokServiceService.uploadVideo(videoFile).subscribe(res => {
       console.log("sucess");
     });

     }


  onFileSelect(event: any) {
    const videoBlob = event.target.files[0];
    console.log(videoBlob);
    console.log(this.google.getAccessToken());
    const accessToken = this.google.getAccessToken();

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${accessToken}`)
      .set('Content-Type', 'application/json');

    const videoFile = new File([videoBlob], videoBlob.name, {type: videoBlob.type});
    this.google.uploadVideo(accessToken,videoFile);
  }

}

