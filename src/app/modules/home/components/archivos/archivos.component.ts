import { Component, OnInit } from '@angular/core';
import { Files } from './models/res-res';
import { DownloadService } from './services/archivos.service';

import { Injectable, NgModule } from '@angular/core';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css'],
})
export class ArchivosComponent implements OnInit {
  public archivos: string[] = [];
  public url: string;
  constructor(private _downLoadService: DownloadService) {
    this.url = 'http://localhost:3000/upload/';
  }

  ngOnInit(): void {
    this.getFiles();
  }

  public getFiles() {
    this._downLoadService.getFiles().subscribe((data: Files) => {
      this.archivos = data.files;
    });
  }

  //download the file from the api service

}
