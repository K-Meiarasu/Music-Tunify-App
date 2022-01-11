import { Component, OnInit } from '@angular/core';
import { MusicserviceService } from '../musicservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public search_album:any= null
  public _album:any

  constructor(private service:MusicserviceService) { }

  ngOnInit(): void {
  }

  public search(){
    this.service.getAllAlbum(this.search_album).subscribe(album=>{
      this._album=album.tracks.items
    })
  }
}
