export class RegisterUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role = 'user';
}
