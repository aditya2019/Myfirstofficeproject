import { Component, OnInit } from '@angular/core';
import { SongApiService } from '../../services/song-api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  providers: [SongApiService ]
})

export class FeedbackComponent implements OnInit {
  public feedbackData:any={};
  public errorMsg:any={};
  public showError : boolean = false;
  public correct= '';
  public response :any={};
  // service providers into feedback
  constructor(private songApiService: SongApiService) { }

  ngOnInit() {
  }
  //  calling feedbackSubmit method of service with user data (feedbackData)
  feedbackSubmit(feedbackData){
    console.log(feedbackData);
    this.songApiService.feedbackSubmit(feedbackData).subscribe((res)=>{
      this.response=res;
      this.correct='yes'
    },(error:any)=>{
      this.errorMsg = JSON.parse(error._body);
      console.log(this.errorMsg.error);
      //this.wrong='yes';
    })
  }

}
