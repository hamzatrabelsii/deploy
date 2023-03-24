import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {GoogleApiService} from "../../services/google-api.service";

@Component({
  selector: 'app-concatenate-videos',
  templateUrl: './concatenate-videos.component.html',
  styleUrls: ['./concatenate-videos.component.css']
})
export class ConcatenateVideosComponent {
  // @ts-ignore
  file: File;
  videoSelected = false;
  loading = false;
  isUploaded = false;
  // @ts-ignore
  @ViewChild('videoFile') nativeInputFile: ElementRef ;
  @ViewChild('video') video: any;
  url: string ="";
  videosSelected:any[] =[];
  formData = new FormData();

  constructor(private dialog: MatDialog ,private http: HttpClient) {
  }



  selectVideo(data: any) {
    this.videoSelected = true;
    if (navigator.userAgent.search('firefox')) {
      this.file = data.target.files[0];
    } else {
      this.file = data.srcElement.files[0];
    }
    this.videosSelected.push(this.file)
    this.formData.append('file', this.file);
    this.video.nativeElement.src = window.URL.createObjectURL(this.file);
  }

  pickFile() {
    this.nativeInputFile.nativeElement.click();
  }


  concatenateVideos() {
    this.http.post('http://localhost:8080/instagram/cc', this.formData)
      .subscribe((data: any) => {
        console.log(data); // Do something with the file contents
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });

  }
}
