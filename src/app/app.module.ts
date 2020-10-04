import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './dashboard/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {RoutingModule} from './routing/routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PanelListComponent} from './dashboard/panel-list/panel-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {ProductCardComponent} from './dashboard/panel-list/product-card/product-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {ProductModalComponent} from './dashboard/product-modal/product-modal.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {ProductGraphComponent} from './product-graph/product-graph.component';
import {ToastrModule} from 'ngx-toastr';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NotFoundComponent } from './error-page/not-found/not-found.component';
import { ServerErrorComponent } from './error-page/server-error/server-error.component';
import {InterceptorService} from './interceptor/interceptor-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PanelListComponent,
    ProductCardComponent,
    ProductModalComponent,
    ProductGraphComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    ToastrModule.forRoot(),
    MatTooltipModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ProductModalComponent]
})
export class AppModule {
}
