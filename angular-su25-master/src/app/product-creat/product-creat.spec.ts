import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreat } from './product-creat';

describe('ProductCreat', () => {
  let component: ProductCreat;
  let fixture: ComponentFixture<ProductCreat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCreat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCreat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
