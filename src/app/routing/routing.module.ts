import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ProductGraphComponent} from '../product-graph/product-graph.component';
import {NotFoundComponent} from '../error-page/not-found/not-found.component';
import {ServerErrorComponent} from '../error-page/server-error/server-error.component';


export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'grafici', component: ProductGraphComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'internal-error', component: ServerErrorComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
