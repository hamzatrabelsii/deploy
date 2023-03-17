import { Injectable } from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";

const oAthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '266374059661-dpn2rtd1fsdnmee03g93j478t1j2ocig.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private apiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';
  private readonly BASE_URL = '/api/upload/youtube/v3/videos';

  constructor(private http: HttpClient,private readonly oAthService : OAuthService) {
    oAthService.configure(oAthConfig);
    oAthService.loadDiscoveryDocument().then( () => {
      oAthService.tryLoginImplicitFlow().then( () => {
        if(!oAthService.hasValidAccessToken()) {
          oAthService.initLoginFlow()
        }else {
          oAthService.loadUserProfile().then( (userProfile) => {
            console.log(JSON.stringify(userProfile))
            const accessToken = this.oAthService.getAccessToken();
            console.log('Access Token:', accessToken);
            const headers = new HttpHeaders()
              .set('Authorization', `Bearer ${accessToken}`)
              .set('Content-Type', 'application/json');

            // Make POST request to YouTube Data API v3
          //  this.http.post(this.apiUrl, videoData, { headers });
          })
        }
      })
    })
  }

  getAccessToken(){
    return this.oAthService.getAccessToken();
  }

  uploadVideo(accessToken: string, video : any) {
    if (!accessToken) {
      throw  new Error('authentication is required');
    }
    const data = {
      snippet: {
        title: "input.title",
        description: "input.description",
        tags: "input.tags",
        categoryId: 22
      },
      status: {
        privacyStatus: "input.privacyStatus",
        embeddable: true
      }
    };
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken)
      .set('Content-Type', 'application/json; charset=UTF-8')
      .set('X-Upload-Content-Length', 3018514 + '')
      .set('X-Upload-Content-Type', 'video/*');

    const url = 'https://www.googleapis.com/api/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status,contentDetails';

    console.log("heeere");
    this.http.post(url, data, {headers, observe: 'response', responseType: 'text'})
      .pipe(switchMap(newData => {
        const newRequest = new HttpRequest('PUT', "newData.headers.get('location')", video, {reportProgress: true});
        return this.http.request(newRequest);
      })).subscribe(
      response => console.log('Video uploaded!', response),
      error => console.error('Error uploading video:', error)
    );
  }






}
