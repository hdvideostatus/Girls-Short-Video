import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  videoData: any = [];
  selectedData: any = [];
  serverURl: string = 'http://4kfullscreenvideostatus.com/girlsshortvideo/appv1/videoapi/getVideoList';
  loading: any;
  constructor(
    public http: HttpClient,
    public router: Router,
    public loadingController: LoadingController,
  ) {
    this.post({
      "start": "0"
    })
  }

  ngOnInit() {
    this.videoData = [
      {
        name: "New",
        icon: "assets/New.png",
        videos: []
      },
      {
        name: "Latest",
        icon: "assets/Latest.png",
        videos: []
      },
      {
        name: "Populer",
        icon: "assets/Populer.png",
        videos: []
      },
      {
        name: "Girls Swag",
        icon: "assets/Girls-Swag.png",
        videos: []
      }
    ]
  }

  post(data: any) {
    // let headers = new HttpHeaders()
    // headers.set('content-type', 'application/json')
    // headers.set('Access-Control-Allow-Origin', '*')
    return new Promise((resolve, reject) => {
      this.http.post(this.serverURl, data).subscribe((result) => {
        if (result['ResponseCode'] == 1) {
          for (let i in this.videoData) {
            this.videoData[i].videos = result['ResultData'];
          }
          // this.selectedData = result['ResultData']
        }
        console.log("result>>>>>", result);
        resolve(result);
      }, (error) => {
        reject(error);
      })
    })
  }

  arrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // goVideoSlides(item) {
  //   this.router.navigate(['/folder'], { queryParams: { item: JSON.stringify(item) } });
  // }
  async goVideoSlides(item) {
    this.selectedData = await this.arrayShuffle(item);
    this.router.navigate(['/folder'], { queryParams: { item: JSON.stringify(this.selectedData) } });
  }

  // async presentLoading() {
  //   this.loading = await this.loadingController.create({
  //     message: 'Loading...'
  //   });
  //   await this.loading.present();
  // }


}
