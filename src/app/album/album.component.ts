import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicserviceService } from '../musicservice.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public album_id:any=null
  public track_id:any=null
  constructor(private active:ActivatedRoute,private service:MusicserviceService) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe(pmap=>{
      this.album_id=pmap.get('id')
    })
    this.service.getTracks(this.album_id).subscribe(song=>{
      this.track_id=song.items
    })
  }

}
