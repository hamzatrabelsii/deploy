import {Component, Input, ViewChild} from '@angular/core';
import {InstagramServiceService} from "../../services/instagram-service.service";
import {ReelsCounterService} from "../../services/reels-counter.service";

@Component({
  selector: 'app-reel-to-select',
  templateUrl: './reel-to-select.component.html',
  styleUrls: ['./reel-to-select.component.css']
})
export class ReelToSelectComponent {
  @Input() reelToDisplay: string = "";
  @Input() count : number =0;
  reelSelected : boolean = false;
  isAbleToDeselect: boolean = false;
  @ViewChild('reelLink') reelLink: any;

  constructor(private  reelsCounterService: ReelsCounterService) {
  }

  ngOnInit(): void {

  }

  selectReel() {


    if (this.reelSelected === false){
      this.reelsCounterService.incCounter();
      this.reelSelected = !this.reelSelected;
      this.count=this.reelsCounterService.counter;
      this.reelsCounterService.selectedReelsToConcatenate.push(this.reelLink.nativeElement.attributes.src.value);
      console.log(this.reelsCounterService.selectedReelsToConcatenate);
    }else{
      if(this.count!==this.reelsCounterService.counter){
        this.isAbleToDeselect=true;
      }else{
        this.reelsCounterService.decCounter();
        this.reelSelected = !this.reelSelected;
        this.count=this.reelsCounterService.counter;
        this.reelsCounterService.selectedReelsToConcatenate.pop();
        console.log(this.reelsCounterService.selectedReelsToConcatenate);
      }
    }
  }
}
