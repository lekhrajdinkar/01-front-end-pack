import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class FormValidators
{
    
    // Custom Sync Validators
    // notice return type, follow thar
    validateNameFeild(control: FormControl): ValidationErrors | null{
        const value: string = control.value;
        console.log(value);
        if(value === '')
         return {custom_validation_msg: 'Add valid name, cant be Name'};
        else
         return null;
    }

    validateAgeFeild(control: FormControl): ValidationErrors | null{
        const value: string = control.value;
        
        //if(/[1-100]/.test(value)){
        if( +value < 100){
            console.log(value, 'is valid');
            return null;
        }
         
        else{
            console.log(value, 'is Invalid, Please add age between 1 to 100');
            return {custom_validation_msg: 'Add age between 1 to 100'};
        }
         
    }
    
    validateEmail_obs(control: AbstractControl):  Observable<ValidationErrors | null>{
        return new emailAsyncValidator_obs().validate(control)
    }

    validateEmail_promise(control: AbstractControl): Promise<ValidationErrors | null>
    {
        //WAY-1
        return new emailAsyncValidator_promise().validate(control)

        //WAY-2 (of creating new promising)
        // return new Promise((resolve, reject) => {
        //     setTimeout( (value) => {
        //         if(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)){
        //             const err_msg = 'Add age between 1 to 100';
        //             console.log(value, err_msg)
        //             resolve({error: err_msg}); //resolve
        //         }
        //         else{
        //             console.log(value, 'is valid')
        //             resolve(null) //resolve
        //         }
        //     }, 2000, control);
        // });
    }

    validateCountry(control: FormControl): ValidationErrors | null{
        const value: string = control.value;
        console.log(value);
        if(value === '' || value === null || value?.length === 0)
         return {custom_validation_msg: 'Cant be Empty'};
        else if(value.length < 3)
            return {custom_validation_msg: 'Cant be less than 3 char'};
        else
         return null;
    }
    
}



// Asyn validators:
// email: [A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}
class emailAsyncValidator_promise implements AsyncValidator
{
    validate(control: AbstractControl): Promise<ValidationErrors | null>{
        const value: string = control.value;
        // if(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)){
        if(!value.includes("@")){
            const err_msg = '@ is missing';
            console.log(value, err_msg)
            return Promise.resolve({custom_validation_msg: err_msg});
        }
        else if(value === null || value === 'null'){
            return Promise.resolve({custom_validation_msg: "cant be blank"});
        }
        else{
            console.log(value, 'is valid')
            return Promise.resolve(null);
        }
    }
}

class emailAsyncValidator_obs implements AsyncValidator{
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const value: string = control.value;
        //if(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)){
        if(!value.includes("@")){
            const err_msg = '@ is missing';
            console.log(value, err_msg)
            return of({custom_validation_msg: err_msg});
        }else if(value === null || value === 'null'){
            return of({custom_validation_msg: "cant be blank"});
        }
        else{
            console.log(value, 'is valid')
            return of(null);
        }
    }
}