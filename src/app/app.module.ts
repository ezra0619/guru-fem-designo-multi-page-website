import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuBarComponent } from './shared-components/menu-bar/menu-bar.component';
import { MainFooterComponent } from './shared-components/main-footer/main-footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LargeInfoBubbleComponent } from './shared-components/large-info-bubble/large-info-bubble.component';
import { DefaultButtonComponent } from './shared-components/default-button/default-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuBarComponent,
    MainFooterComponent,
    AboutPageComponent,
    LargeInfoBubbleComponent,
    DefaultButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
