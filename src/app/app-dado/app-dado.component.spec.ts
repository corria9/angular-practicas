import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDadoComponent } from './app-dado.component';

describe('AppDadoComponent', () => {
  let component: AppDadoComponent;
  let fixture: ComponentFixture<AppDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
