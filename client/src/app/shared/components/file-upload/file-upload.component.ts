import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';

export interface ISelectedFile {
    objectUrl: string;
    file: File;
}

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    animations: [
        trigger('inout', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('500ms ease-out',
                    style({ opacity: 1 }))
            ])
        ])
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: FileUploadComponent,
            multi: true
        }
    ]
})
export class FileUploadComponent implements ControlValueAccessor, OnDestroy {
    private _disabled = false;

    private _objectUrls: string[] = [];

    @Input() acceptedMimeTypes: string[] = [];

    @Input() chooseAFileLabel = 'Choose a file';

    @Input() chooseADifferentFileLabel = 'Choose a different file';

    hasFile = false;
    fileName: string;

    @ViewChild('uploadTarget', { static: true, read: ElementRef })
    private _uploadTarget: ElementRef;

    private _onChange = (data: ISelectedFile) => { };
    private _onTouched = () => { };

    get disabled() {
        return this._disabled;
    }

    get objectUrls(): string[] {
        return this._objectUrls;
    }

    onFileChange(event: Event) {
        const target = event.target as HTMLInputElement;

        if (target.files.length > 0) {
            const file = target.files[0];

            this.addFile(file);
        }
    }

    addFile(file: File) {
        if (this._disabled)
            return;

        this.hasFile = true;
        this.fileName = file.name;

        const objectUrl = URL.createObjectURL(file);

        this._objectUrls.push(objectUrl);

        this._onChange({
            objectUrl,
            file
        });

        this._onTouched();
    }

    ngOnDestroy(): void {
        this._objectUrls.forEach(u => URL.revokeObjectURL(u));
    }

    /**
     * File inputs cannot have a file written to them.
     * As a result its only possible to empty its selected value.
     */
    writeValue(obj) {
        if (!obj) {
            if (this.hasFile) {
                this._onChange(undefined);
                this._onTouched();
            }

            this.hasFile = false;
            this.fileName = undefined;

            if (this._uploadTarget)
                this._uploadTarget.nativeElement.value = '';

        }
    }

    reset(){
        this.hasFile = false;
        this._onChange(undefined);
    }

    registerOnChange(fn) {
        this._onChange = fn;
    }

    registerOnTouched(fn) {
        this._onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this._disabled = isDisabled;
    }
}
