import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BrandsService } from '../../shared/brands/brands.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductsListComponent } from './products-list.component';
import { ProductsListModule } from './products-list.module';
import { IState } from '../../shared/store/reducer';
import { productsAllSelector } from '../../shared/store/products/products.selectors';
import { productsMock } from '../../shared/products/products.mock';
import { MemoizedSelector } from '@ngrx/store';
import { IProduct } from '../../shared/products/product.interface';
import { loadProducts } from '../../shared/store/products/products.actions';

describe('ProductsListComponent', () => {
	let component: ProductsListComponent;
	let fixture: ComponentFixture<ProductsListComponent>;
	let mockStore: MockStore<IState>;
	let dispatchSpy: jasmine.Spy;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProductsListModule, RouterTestingModule, BrowserAnimationsModule],
			providers: [
				provideMockStore(),
				{
					provide: BrandsService,
					useValue: {
						brands$: of([]),
						loadBrands(_: string | null) {
							return undefined;
						},
					},
				},
			],
		}).compileComponents();

		mockStore = TestBed.inject(MockStore);

		mockStore.overrideSelector(productsAllSelector as MemoizedSelector<IState, IProduct[]>, productsMock);

		dispatchSpy = spyOn(mockStore, 'dispatch');

		fixture = TestBed.createComponent(ProductsListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('Загрузка продуктов', done => {
		expect(dispatchSpy).toHaveBeenCalledWith(loadProducts(null));

		component.products$.subscribe(products => {
			expect(products).toEqual(productsMock);

			done();
		});
	});
});
