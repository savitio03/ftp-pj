import { Component, OnInit } from '@angular/core';
import { UploadService } from './services';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UploadedComponent } from './components/uploaded/uploaded.component';

@Component({
  selector: 'app-subir-archivos',
  templateUrl: './subir-archivos.component.html',
  styleUrls: ['./subir-archivos.component.css'],
})
export class SubirArchivosComponent implements OnInit {
  private fileTmp: any;

  constructor(
    private _uploadService: UploadService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  //Lo que hacemos aquí es que cuando el usuario seleccione un archivo, se va a ejecutar este método
  //y lo que va a hacer es que va a tomar el archivo que el usuario seleccionó y lo va a guardar en una variable
  //que se llama fileTmp, y lo que va a hacer es que va a guardar el archivo en formato raw y el nombre del archivo
  getFile($event: any): void {
    const [file] = $event.target.files;

    this.fileTmp = {
      fileRaw: file,
      fileName: file.name,
    };
  }

  sendFile($event: any): void {
    const body = new FormData();
    body.append('file', this.fileTmp.fileRaw, this.fileTmp.fileName);

    this._uploadService.sendPost(body).subscribe((res) => {
      console.log(res);
      this.openDialog();
    });
  }

  openDialog() {
    this.dialog.open(UploadedComponent);
  }
}
