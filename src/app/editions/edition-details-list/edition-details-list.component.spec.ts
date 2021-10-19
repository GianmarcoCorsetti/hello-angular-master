import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionDetailsListComponent } from './edition-details-list.component';

describe('EditionDetailsListComponent', () => {
  let component: EditionDetailsListComponent;
  let fixture: ComponentFixture<EditionDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
