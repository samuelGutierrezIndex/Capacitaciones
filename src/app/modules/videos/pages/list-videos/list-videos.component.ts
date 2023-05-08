import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videos } from '@data/interfaces/videos';
import { VideosService } from '@data/services/videos.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent implements OnInit {
  public title: string;
  public videos: Videos[] = [];

  constructor(
    private videoServices: VideosService,
    private router: Router
  ){
    this.title = 'Videos modulo comercial';
  }

  ngOnInit() { 
    this.videoServices.getAllVideos().subscribe(data => {
      this.videos = data;
    })
  }

}
