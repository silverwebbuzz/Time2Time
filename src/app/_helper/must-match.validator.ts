import { AbstractControl, FormGroup } from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('password').value;

        let confirmpassword = control.get('confirmpassword').value;
        if (!confirmpassword) {
            return true;
        }
        
        if (password != confirmpassword) {
            control.get('confirmpassword').setErrors({ confirmpassword: true });
        } else {
            return null
        }
    }
}

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
