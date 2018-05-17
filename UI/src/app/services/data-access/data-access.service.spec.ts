import { TestBed, inject } from '@angular/core/testing';
import { DataaccessService } from './data-access.service';



describe('DataAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataaccessService]
    });
  });

  it('should be created', inject([DataaccessService], (service: DataaccessService) => {
    expect(service).toBeTruthy();
  }));
});
