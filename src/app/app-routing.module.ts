import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { DataComponent } from './data/data.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path :'chart', component : ChartComponent},
  { path :'table', component: TableComponent },
  { path: 'data', component: DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
