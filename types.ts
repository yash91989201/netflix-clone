import { User } from "firebase/auth";

export interface AuthContextType {
  user: User | null;
  loading: boolean | null;
  error: string | null;
  signin: ({ email, password }: CredentialsType) => void;
  signup: ({ email, password }: CredentialsType) => void;
  signout: () => void;
}

export interface CredentialsType {
  email: string;
  password: string;
}
