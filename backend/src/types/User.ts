export interface UserInsert {
  name: string;
  email: string;
  telephone: string;
  password: string;
  zip_code: string;
  city: string;
  state: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
}