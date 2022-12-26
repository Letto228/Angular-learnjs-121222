import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CardComponent} from "./card.component";
import {MatCardModule} from "@angular/material/card";
import {RatingModule} from "../rating/rating.module";

@NgModule({
	declarations: [CardComponent],
	imports: [CommonModule, MatCardModule, RatingModule],
	exports: [CardComponent],
})
export class CardModule {}
