import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ArchivosComponent } from './components/archivos/archivos.component';
import { SubirArchivosComponent } from './components/subir-archivos/subir-archivos.component';
import { HomeRoutingModule } from './home-routing.module';
import { UploadedComponent } from './components/subir-archivos/components/uploaded/uploaded.component';

import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    HomeComponent,
    ArchivosComponent,
    SubirArchivosComponent,
    UploadedComponent,
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class HomeModule {}
