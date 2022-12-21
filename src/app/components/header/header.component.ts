import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
	readonly imgSrc = '../../../favicon.ico';
	// readonly imgSrc = 'https://avatars.mds.yandex.net/i?id=b1ba5d199d0c1598bb5762fc6faf2f5526a0cf1a-5513755-images-thumbs&n=13';

	onLogValue(event: MouseEvent) {
		// event.stopPropagation();
		console.log(event);
	}
}
