import { Component } from "@angular/core";
import { PasswordForm } from "../types/password-builder";
import { PasswordStrength, getPasswordStrengthDescription, getPasswordStrengthValue } from "../types/password-strength.enum";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: "app-password-generator-form",
  templateUrl: "./password-generator-form.component.html",
  styleUrls: ["./password-generator-form.component.css"],
})
export class PasswordGeneratorFormComponent {

  passwordForm: FormGroup;
  passwordLog: {value: string, strength: PasswordStrength}[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group({
      strength: ['', Validators.required] // Initialize the 'strength' form control
    });
  }

  copyPassword() {
    throw new Error("Method not implemented.");
  }

  model: PasswordForm = {
    strength: PasswordStrength.VeryWeak,
    password: ''
  };

  onSubmit() {
    if (this.passwordForm.valid) {
      const submittedStrength = this.passwordForm.value.strength;
      this.generatePassword(submittedStrength);
    }
  }

  generatePassword(passwordStrength: PasswordStrength): string {
    const passwordValue: number = getPasswordStrengthValue(passwordStrength);
    const possibleChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";


    const passwordLength = passwordValue * 4 + 8;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChars.length);
      password += possibleChars[randomIndex];
    }

    this.passwordLog.push({value: password, strength: passwordStrength});

    return password;
    }


    copyPasswordToClipboard(password: string) {
      navigator.clipboard.writeText(password)
    .then(() => {
      console.log('Password copied to clipboard');
    })
    .catch((error) => {
      console.error('Error copying password to clipboard:', error);
    });
    }

    getPasswordStrength(passwordStrength: any) {
      return getPasswordStrengthDescription(passwordStrength);
    }

    updateSelectedStrength() {
      this.model.strength = this.passwordForm.get('strength')?.value;
    }

}
