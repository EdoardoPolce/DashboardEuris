import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ProductGraphComponent} from '../product-graph/product-graph.component';


export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'grafici', component: ProductGraphComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
