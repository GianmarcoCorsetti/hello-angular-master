import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionAddComponent } from './edition-add.component';

describe('EditionAddComponent', () => {
  let component: EditionAddComponent;
  let fixture: ComponentFixture<EditionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
