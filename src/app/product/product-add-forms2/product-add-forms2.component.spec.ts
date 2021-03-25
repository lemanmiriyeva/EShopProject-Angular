import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddForms2Component } from './product-add-forms2.component';

describe('ProductAddForms2Component', () => {
  let component: ProductAddForms2Component;
  let fixture: ComponentFixture<ProductAddForms2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddForms2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddForms2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
