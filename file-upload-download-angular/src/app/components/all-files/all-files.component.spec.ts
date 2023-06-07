import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilesComponent } from './all-files.component';

describe('AllFilesComponent', () => {
  let component: AllFilesComponent;
  let fixture: ComponentFixture<AllFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
