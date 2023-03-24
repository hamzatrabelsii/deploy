import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {TiktokServiceService} from "../../services/tiktok-service.service";
import {GoogleApiService} from "../../services/google-api.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-upload-from-disk',
  templateUrl: './upload-from-disk.component.html',
  styleUrls: ['./upload-from-disk.component.css']
})
export class UploadFromDiskComponent {
  // @ts-ignore
  file: File;
  videoSelected = false;
  loading = false;
  isUploaded = false;
  // @ts-ignore
  @ViewChild('videoFile') nativeInputFile: ElementRef ;
  @ViewChild('video') video: any;
  url: string ="";

  constructor(private dialog: MatDialog ,private http: HttpClient, private readonly google : GoogleApiService) {
  }



  selectVideo(data: any) {
    this.videoSelected = true;
    if (navigator.userAgent.search('firefox')) {
      this.file = data.target.files[0];
    } else {
      this.file = data.srcElement.files[0];
    }


    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post('http://localhost:8080/instagram/cc', formData)
      .subscribe((data: any) => {
        console.log(data); // Do something with the file contents
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });

    this.video.nativeElement.src = window.URL.createObjectURL(this.file);
  }

  pickFile() {
    this.nativeInputFile.nativeElement.click();
  }

  youtubeSubmit() {
    const accessToken = this.google.getAccessToken();
    console.log('hhh',this.file)

    this.google.uploadVideo(accessToken,this.file);

  }

}
