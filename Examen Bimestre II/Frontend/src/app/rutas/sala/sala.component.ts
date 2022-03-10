import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private router:ActivatedRoute, private cookieService: CookieService,private routerN:Router) { }

  room: string=""
  ngOnInit(): void {
    this.room= this.router.snapshot.paramMap.get('room')!
    this.cookieService.set('room',this.room)
    console.log(this.room)
  }

  nuevoJuego(){
    location.reload();
  }

}
