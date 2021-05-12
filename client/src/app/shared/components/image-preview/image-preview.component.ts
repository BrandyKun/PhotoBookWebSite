import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-image-preview',
    templateUrl: './image-preview.component.html',
    styleUrls: ['./image-preview.component.scss'],
})
export class ImagePreviewComponent {

    private _sanitizedUrl: SafeUrl;

    hide = true;

    constructor(
        private _domSanitizer: DomSanitizer) { }

    @Input('imageUrl')
    set unsafeUrl(value: string) {
        this._sanitizedUrl =  !!value ?
            this._domSanitizer.bypassSecurityTrustUrl(value) :
            undefined;

        if (!this._sanitizedUrl)
            this.hide = true;
    }

    get sanitizedUrl(): SafeUrl {
        return this._sanitizedUrl;
    }

    onLoad() {
        this.hide = false;
    }

    onError() {
        this.hide = true;
    }
}