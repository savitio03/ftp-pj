import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.component.html',
  styleUrls: ['./uploaded.component.css']
})
export class UploadedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  recargar(){
    window.location.reload();
  }
}
