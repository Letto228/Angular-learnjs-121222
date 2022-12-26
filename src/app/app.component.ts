import {Component, Output} from "@angular/core";
import {products} from "./mock-product";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "Angular-learnjs-121222";
	@Output() product = products[0];
}
