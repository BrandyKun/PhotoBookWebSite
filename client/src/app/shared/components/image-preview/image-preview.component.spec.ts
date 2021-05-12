import { ImagePreviewComponent } from './image-preview.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

describe('ImagePreviewUploadComponent', () => {
    let component: ImagePreviewComponent;
    let fixture: ComponentFixture<ImagePreviewComponent>;
    let domSanitizer: DomSanitizer;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImagePreviewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImagePreviewComponent);
        component = fixture.componentInstance;
        domSanitizer = TestBed.get(DomSanitizer);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('onError', () => {
        it('should mark hide true', () => {
            component.hide = false;

            component.onError();

            expect(component.hide).toBeTruthy();
        });
    });

    describe('onLoad', () => {
        it('should mark hide false', () => {
            component.hide = true;

            component.onLoad();

            expect(component.hide).toBeFalsy();
        });
    });

    describe('unsafeUrl', () => {
        it('should sanitize the received value', () => {
            fixture.detectChanges();
            spyOn(domSanitizer, 'bypassSecurityTrustUrl').and.callThrough();

            component.unsafeUrl = 'https://unsafe';

            expect(domSanitizer.bypassSecurityTrustUrl).toHaveBeenCalled();
            expect(component.sanitizedUrl).toBeDefined();
        });
    });
});