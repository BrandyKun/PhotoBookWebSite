import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppDetails } from 'src/app/shared/models/appDetails';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private homeService : HomeService) { }

  @ViewChild('form', { static: true}) form: NgForm;
  $appSettings: Observable<IAppDetails> ;

  ngOnInit() {
    this.$appSettings = this.homeService.getAppDetails();
    this.createContactForm();
  }

  createContactForm() {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators
      .pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      name: new FormControl(''),
      message: new FormControl('')
    })
  }

  onSubmit(){}

}
