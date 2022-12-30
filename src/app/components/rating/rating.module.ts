import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RatingComponent} from "./rating.component";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
	declarations: [RatingComponent],
	imports: [CommonModule, MatIconModule, MatGridListModule],
	exports: [RatingComponent],
})
export class RatingModule {}
