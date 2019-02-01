import { TestBed } from '@angular/core/testing';

import { PictoTranslatorService } from './picto-translator.service';

describe('PictoTranslatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PictoTranslatorService = TestBed.get(PictoTranslatorService);
    expect(service).toBeTruthy();
  });
});
