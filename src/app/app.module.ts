import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "./components/card/card.module";
import {MatIconModule} from "@angular/material/icon";
import {RatingModule} from "./components/rating/rating.module";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CardModule, MatIconModule, RatingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
