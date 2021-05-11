import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent, ISelectedFile } from './file-upload.component';
import { By } from '@angular/platform-browser';

describe('FileUploadComponent', () => {
    let component: FileUploadComponent;
    let fixture: ComponentFixture<FileUploadComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FileUploadComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FileUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('onFileChange', () => {
        it('should not call onChange if no files are selected', () => {
            const spy = jasmine.createSpy();

            component.registerOnChange(spy);

            const mockEvent = {
                target: {
                    files: []
                }
            } as any;

            component.onFileChange(mockEvent);

            expect(spy).not.toHaveBeenCalled();
        });

        it('should call onChange with selected file', () => {
            const spy = jasmine.createSpy(),
                selectedFile = new File([''], 'fake file');

            component.registerOnChange(spy);

            const mockEvent = {
                target: {
                    files: [selectedFile]
                }
            } as any;

            component.onFileChange(mockEvent);

            const changePayload: ISelectedFile = spy.calls.first().args[0];

            expect(changePayload.objectUrl).toBeTruthy();
            expect(changePayload.file).toEqual(selectedFile);
        });

        it('should call onTouched when a file is selected', () => {
            const spy = jasmine.createSpy(),
                selectedFile = new File([''], 'fake file');

            component.registerOnTouched(spy);

            const mockEvent = {
                target: {
                    files: [selectedFile]
                }
            } as any;

            component.onFileChange(mockEvent);

            expect(spy).toHaveBeenCalled();
        });

        it('should store the selected files objectURL', () => {
            const spy = jasmine.createSpy(),
                selectedFile = new File([''], 'fake file');

            component.registerOnChange(spy);

            const mockEvent = {
                target: {
                    files: [selectedFile]
                }
            } as any;

            component.onFileChange(mockEvent);

            const changePayload: ISelectedFile = spy.calls.first().args[0];

            expect(component.objectUrls.length).toEqual(1);
            expect(component.objectUrls[0]).toEqual(changePayload.objectUrl);
        });

        it('should set the hasFile flag if a file is selected', () => {
            const mockEvent = {
                target: {
                    files: [new File([''], 'fake file')]
                }
            } as any;

            component.onFileChange(mockEvent);

            expect(component.hasFile).toBeTruthy();
        });

        it('should set the selected files name', () => {
            const mockEvent = {
                target: {
                    files: [new File([''], 'fake file')]
                }
            } as any;

            component.onFileChange(mockEvent);

            expect(component.fileName).toEqual('fake file');
        });

        it('should not set the selected file if control is disabled', () => {
            const spy = jasmine.createSpy();

            component.registerOnChange(spy);

            const mockEvent = {
                target: {
                    files: [new File([''], 'fake file')]
                }
            } as any;

            component.setDisabledState(true);

            component.onFileChange(mockEvent);

            expect(spy).not.toHaveBeenCalled();
        });
    });

    describe('ngOnDestroy', () => {
        it('should unload stored objectURLS', () => {
            spyOn(URL, 'revokeObjectURL').and.callThrough();

            const mockEvent = {
                target: {
                    files: [new File([''], 'fake file')]
                }
            } as any;

            component.onFileChange(mockEvent);

            // Load a object URL
            expect(component.objectUrls.length).toEqual(1);

            const objectURL = component.objectUrls[0];

            component.ngOnDestroy();

            expect(URL.revokeObjectURL).toHaveBeenCalledWith(objectURL);
        });
    });

    describe('setDisabledState', () => {
        it('should mark the component as disabled if called with true', () => {
            expect(component.disabled).toBeFalsy();

            component.setDisabledState(true);

            expect(component.disabled).toBeTruthy();
        });
    });

    describe('writeValue', () => {
        let nativeElement: HTMLInputElement;

        beforeEach(() => {
            /*
                File inputs cannot have a value written to them.
                To test that the selected value is removed change it to a text input
                so the test can inject a value.
            */
            const fileInput = fixture.debugElement.query(By.css('input[type="file"'));

            nativeElement = fileInput.nativeElement;

            nativeElement.setAttribute('type', 'text');
        });

        it('should empty the selected file when a fasly value is written', () => {
            component.hasFile = true;
            component.fileName = 'Fake File';

            nativeElement.value = 'Fake';

            component.writeValue(null);

            // Dont check falsy. Has to be explicitly empty string;
            expect(nativeElement.value).toEqual('');

            expect(component.hasFile).toBeFalsy();
            expect(component.fileName).toBeFalsy();
        });

        it('should not set value if truthy value is written', () => {
            component.hasFile = true;
            component.fileName = 'Fake File';

            nativeElement.value = 'Fake';

            component.writeValue('New value');

            // Dont check falsy. Has to be explicitly empty string;
            expect(nativeElement.value).toEqual('Fake');

            expect(component.hasFile).toEqual(true);
            expect(component.fileName).toEqual('Fake File');
        });
    });
});