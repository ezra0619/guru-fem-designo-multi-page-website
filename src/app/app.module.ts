import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuBarComponent } from './shared-components/menu-bar/menu-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LargeInfoBubbleComponent } from './shared-components/large-info-bubble/large-info-bubble.component';
import { DefaultButtonComponent } from './shared-components/default-button/default-button.component';
import { CardPagesDisplayComponent } from './shared-components/card-pages-display/card-pages-display.component';
import { AboutUsCardsComponent } from './components/about-us-cards/about-us-cards.component';
import { PageFooterComponent } from './shared-components/page-footer/page-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuBarComponent,
    AboutPageComponent,
    LargeInfoBubbleComponent,
    DefaultButtonComponent,
    CardPagesDisplayComponent,
    AboutUsCardsComponent,
    PageFooterComponent,
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
