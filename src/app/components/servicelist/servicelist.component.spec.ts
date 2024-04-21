import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicelistComponent } from './servicelist.component';

describe('ServicelistComponent', () => {
  let component: ServicelistComponent;
  let fixture: ComponentFixture<ServicelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
