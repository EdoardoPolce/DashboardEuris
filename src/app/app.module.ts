import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './dashboard/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing/routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PanelListComponent} from './dashboard/panel-list/panel-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {ProductCardComponent} from './dashboard/panel-list/product-card/product-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PanelListComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    RoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
