import { Component } from '@angular/core';
import { google } from 'googleapis';
import {FormControl, FormGroup} from "@angular/forms";
import {TiktokServiceService} from "./services/tiktok-service.service";
import axios from 'axios';

import * as fs from "fs";

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

  constructor(private  tiktokServiceService: TiktokServiceService) {

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
     uploadVideo()
       .then(data => {
         console.log(data);
       })
       .catch(error => {
         console.error(error);
       });


     async function uploadVideo() {
       const formData = new FormData();
       const accessToken = 'AIzaSyBho6W_p7YX25b_9CXWkRBFsZWWUTSFeww';
       formData.append('file', videoFile);
       console.log(formData);

       const response = await axios.post('https://www.googleapis.com/upload/youtube/v3/videos?part=snippet,status', formData, {
         headers: {
           'Content-Type': 'multipart/form-data',
           'Authorization': `Bearer ${accessToken}`
         }
       });
       console.log(response);

       return response.data;
     }




   }
}

