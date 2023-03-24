import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {TiktokServiceService} from "../../services/tiktok-service.service";
import {GoogleApiService} from "../../services/google-api.service";

@Component({
  selector: 'app-reels-list',
  templateUrl: './reels-list.component.html',
  styleUrls: ['./reels-list.component.css']
})
export class ReelsListComponent {
  title = 'socialAppFront';
  allInstagramReels: string[] = [];
  selectCount : number = 0;
  tiktokForm: FormGroup;

  constructor(private dialog: MatDialog ,private http: HttpClient, private tiktokServiceService: TiktokServiceService, private readonly google : GoogleApiService) {


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
    this.tiktokServiceService.getAllTiktokReels(this.tiktokForm.value.tiktokPageLink).subscribe(res => {
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

}
