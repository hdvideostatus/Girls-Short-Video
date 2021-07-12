import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  getAllVideos: any = [];
  @ViewChild('isNewVideo') isNewVideo: ElementRef;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(IonSlides) slides: IonSlides;
  shownVideos: number = 0;
  previousInd: any = 0;

  slideOpts = {
    loop: false,
    initialSlide: 1,
    direction: 'vertical',
  };

  constructor(private activatedRoute: ActivatedRoute) {
    let getCatBioObj = this.activatedRoute.snapshot.queryParamMap.get('item');
    this.getAllVideos = JSON.parse(getCatBioObj);
    console.log("getCatBioObj>>>>>>>>>>", this.getAllVideos);
    this.shownVideos = 0;
    this.previousInd = 0;
    // this.spinner = false;
  }

  ngOnInit() {
    setTimeout(() => {
      let newVideoData = <HTMLVideoElement>document.getElementById("isNewVideo" + 0);
      console.log("newVideoData???", newVideoData);
      if (newVideoData) {
        newVideoData.play();
      }
      // this.isPlay = false;
    }, 50);
  }

  loadMoreData() {

  }

  slideChanged() {
    // this.isPlay = false;
    try {
      (<any>window).document.querySelectorAll('video').forEach(vid => {
        vid.pause();
        vid.currentTime = 0;
      });

      this.slides.getActiveIndex().then((index) => {
        if (index == 1) {
          this.shownVideos += 1;
        }
        setTimeout(() => {
          if (index > this.previousInd) {
            let newVideoData = <HTMLVideoElement>(
              document.getElementById("isNewVideo" + (index - 1))
            );
            if (newVideoData) {
              newVideoData.pause();
            }
          } else {
            let newVideoData = <HTMLVideoElement>(
              document.getElementById("isNewVideo" + (index + 1))
            );
            if (newVideoData) {
              newVideoData.pause();
            }
          }
          this.previousInd = index;

          let newVideoData = <HTMLVideoElement>(
            document.getElementById("isNewVideo" + index)
          );
          if (newVideoData) {
            newVideoData.play();
          }
        }, 100);
      });

    } catch (ee) {
    }
  }

  slideNextt() {
    console.log("index");
    this.slides.getActiveIndex().then((index) => {
      console.log("yyyyyyyy>>", index);
      // this.gs.checkFavVideo(this.getAllVideos[index].video_id);
    });
  }
  slidePrevv() {
    this.slides.getActiveIndex().then((index) => {
      console.log("iiiiii>>", index);
      // this.gs.checkFavVideo(this.getAllVideos[index].video_id);
    });
  }

}
