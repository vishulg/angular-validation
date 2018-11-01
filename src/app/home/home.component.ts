import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmailValidation } from '../validators/email.valid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  index4: any;
  config2: any = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    slidesPerView: 6,
    spaceBetween: 30,
    prevButton: '.swiper-button-prev',

    breakpoints: {
      // when window width is <= 320px
      500: {
        slidesPerView: 1,
        spaceBetween: 0

      },
      // when window width is <= 480px
      690: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is <= 640px

      950: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1930: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  };

  // tslint:disable-next-line:no-inferrable-types
  isShow: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  sidebarService: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  isDropdown: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  isModal: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  isAlert: boolean = false;

  contactUsForm: FormGroup;

  companyPattern = 'abc';

  defaultData = {
    'name' : 'Default Name',
    'email' : 'default@email.com',
    'company' : 'Default Company',
    'subject' : 'Default Subject',
    'message' : 'This is a default message which is binded in the form on ngOnInit using defaultData Object.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactUsForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(32), Validators.pattern('^[a-zA-Z ]+$')]],
      'email': ['', [Validators.required, EmailValidation.emailValid]],
      'company': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')])],
      'subject': ['', [Validators.required, Validators.maxLength(15)]],
      'message': ['', [Validators.required, Validators.minLength(30), Validators.maxLength(150)]],
    });

    this.contactUsForm.controls.name.setValue(this.defaultData.name);
    this.contactUsForm.controls.email.setValue(this.defaultData.email);
    this.contactUsForm.controls.company.setValue(this.defaultData.company);
    this.contactUsForm.controls.subject.setValue(this.defaultData.subject);
    this.contactUsForm.controls.message.setValue(this.defaultData.message);
  }

  get name() {
    return this.contactUsForm.controls.name;
  }
  get email() {
    return this.contactUsForm.controls.email;
  }
  get company() {
    return this.contactUsForm.controls.company;
  }
  get subject() {
    return this.contactUsForm.controls.subject;
  }
  get message() {
    return this.contactUsForm.controls.message;
  }

  openSidebar() {
    this.isShow = true;
  }

  closeSidebar() {
    this.isShow = false;
  }

  submit(formValues) {
    console.log(formValues);
    this.isAlert = true;
    setTimeout(() => {
      this.isAlert = false;
      this.contactUsForm.reset();
    }, 2000);
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }


}
