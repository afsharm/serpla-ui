import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderEditComponent } from './provider.edit.component';

describe('ProviderEditComponent', () => {
  let component: ProviderEditComponent;
  let fixture: ComponentFixture<ProviderEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
