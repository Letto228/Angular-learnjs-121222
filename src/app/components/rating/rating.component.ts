import {Component, Input, OnInit, Output} from "@angular/core";

@Component({
	selector: "app-rating",
	templateUrl: "./rating.component.html",
	styleUrls: ["./rating.component.css"],
})
export class RatingComponent implements OnInit {
	private DEFAULT_STARTS_NUMBER = 5;
	@Input() ratingValue!: number;
	stars: number[] = [];

	ngOnInit() {
		for (let i = 0; i < this.DEFAULT_STARTS_NUMBER; i++) {
			this.stars[i] = i + 1;
		}
	}

	isActive(star: number) {
		return star <= this.ratingValue;
	}
}
