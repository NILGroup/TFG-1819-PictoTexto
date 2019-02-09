import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictoTranslatorComponent } from './picto-translator.component';

describe('PictoTranslatorComponent', () => {
  let component: PictoTranslatorComponent;
  let fixture: ComponentFixture<PictoTranslatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictoTranslatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictoTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
