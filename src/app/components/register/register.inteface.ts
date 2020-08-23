export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  address: string;
  city: string;
  telephone: number;
  userType: string;
  timeWork: string;
  schoolName: string;
  grade: string;
  roomLetter: string;
  agree: boolean;
}

export interface Login{
    email: string;
    password: string;
}
