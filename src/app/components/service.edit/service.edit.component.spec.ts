import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceeditComponent } from './service.edit.component';

describe('ServiceeditComponent', () => {
  let component: ServiceeditComponent;
  let fixture: ComponentFixture<ServiceeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceeditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
