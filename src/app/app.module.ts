import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MahasiswaComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
