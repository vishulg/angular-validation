import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidation {
    static emailValid(control: AbstractControl): ValidationErrors | null {
        // tslint:disable-next-line:max-line-length
        const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // tslint:disable-next-line:triple-equals
        if (exp.test(control.value as string) == false) {
            return { EmailValidity: true };
        } else {
            return null;
        }
    }
}
