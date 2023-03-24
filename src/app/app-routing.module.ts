import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {UploadFromDiskComponent} from "./components/upload-from-disk/upload-from-disk.component";
import {ReelsListComponent} from "./components/reels-list/reels-list.component";
import {ConcatenateVideosComponent} from "./components/concatenate-videos/concatenate-videos.component";

const routes: Routes =[
  { path: 'concatenate', component: ConcatenateVideosComponent},
  { path: 'export', component: ReelsListComponent},
  { path: 'upload', component: UploadFromDiskComponent},
  { path: 'home', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
