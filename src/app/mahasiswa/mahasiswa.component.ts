import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit, Renderer2 } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css'],
})
export class MahasiswaComponent implements OnInit, AfterViewInit {
  table1: any;
  constructor(private http: HttpClient, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.table1 = $('#table1').DataTable();
    this.bind_mahasiswa();
  }
  ngOnInit(): void {}
  bind_mahasiswa(): void {
    this.http
      .get('https://stmikpontianak.net/011100862/tampilMahasiswa.php')
      .subscribe((data: any) => {
        this.table1.clear();

        let counter = 1;

        data.forEach((element: any) => {
          let tempatTanggalLahir =
            element.TempatLahir + ', ' + element.TanggalLahir;

          let row = [
            counter,
            element.NIM,
            element.Nama,
            element.JenisKelamin,
            tempatTanggalLahir,
            element.JP,
            element.Alamat,
            element.StatusNikah,
            element.TahunMasuk,
          ];
          counter++;
          this.table1.row.add(row);
        });
        this.table1.draw(false);
      });
  }
}
