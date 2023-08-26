export interface IPasswordStrength {
  description: string;
  value: number;
}

export enum PasswordStrength {
  VeryWeak,
  Weak,
  Moderate,
  Strong,
  VeryStrong
}


const passwordStrengthData: IPasswordStrength[] = [
  { description: 'Very Weak', value: PasswordStrength.VeryWeak },
  { description: 'Weak', value: PasswordStrength.Weak },
  { description: 'Moderate', value: PasswordStrength.Moderate },
  { description: 'Strong', value: PasswordStrength.Strong },
  { description: 'Very Strong', value: PasswordStrength.VeryStrong }
];

// Getter method to retrieve the value for a given strength level
export function getPasswordStrengthValue(strength: PasswordStrength): number {
  return passwordStrengthData[strength].value;
};

export function getPasswordStrengthDescription(strength: PasswordStrength): string {
  return passwordStrengthData[strength].description;
};
