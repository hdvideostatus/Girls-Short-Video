import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  videoData: any = [];
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    this.videoData = [
      {
        name: "Hindi",
        icon: "aperture-outline",
        videos: ['https://i.pinimg.com/originals/44/43/6d/44436d53e2eff84475683de898f629ae.gif']
      },
      {
        name: "English",
        icon: "film-outline",
        videos: 'https://media.tenor.com/images/12d113fc93462d8ff4ca81d7cded0c7e/tenor.gif'
      },
      {
        name: "Hote",
        icon: "happy-outline",
        videos: 'https://media.tenor.com/images/c8a4de0f5cca89769e6a9eeeb4fd354c/tenor.gif'
      },
      {
        name: "Sad",
        icon: "musical-notes-outline",
        videos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiduUIlhfrTtw3jH0WiZPpYczwIiybHOM5o8a3drN_sx8-kyiPHIa73jy9YyAoen4UOfM&usqp=CAU'
      }
    ]
  }

  goVideoSlides(item) {
    this.router.navigate(['/folder'], { queryParams: { item: JSON.stringify(item) } });
  }


}
