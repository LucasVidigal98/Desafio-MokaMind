import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

export class DataTable {
  name: string | undefined;
  value: number | undefined;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSource: Array<DataTable> | undefined;

  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
    this.service.getData().subscribe(data => this.dataSource = data);
  }

}
