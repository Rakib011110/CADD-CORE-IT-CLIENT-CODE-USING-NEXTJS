export interface IUser {
    _id: string;
    name: string;
    role: string;
    email: string;
    status: string;
    mobileNumber: string;
    profilePhoto: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  } 


  export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: any
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean; 
  placeholder?: string;
  errorMessage?: string;
}