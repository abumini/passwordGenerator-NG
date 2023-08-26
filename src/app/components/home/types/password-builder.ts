import { IPasswordStrength, PasswordStrength } from "./password-strength.enum";

export interface PasswordForm {

  strength?: PasswordStrength;
  password?: string;

}
