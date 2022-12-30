import {Component, Input, OnInit, Output} from "@angular/core";

@Component({
	selector: "app-rating",
	templateUrl: "./rating.component.html",
	styleUrls: ["./rating.component.css"],
})
export class RatingComponent implements OnInit {
	private DEFAULT_STARTS_NUMBER = 5;
	@Input() value!: number;
	@Output() activeStarts: boolean[] = [];

	ngOnInit(): void {
		for (let i = 0; i < this.DEFAULT_STARTS_NUMBER; i++) {
			if (this.value >= i + 1) {
				this.activeStarts[i] = true;
			} else {
				this.activeStarts[i] = false;
			}
		}
	}
}
