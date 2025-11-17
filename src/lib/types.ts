export interface Credential {
  id: string;
  title: string;
  issuer: string;
  issuerLogoUrl: string;
  issueDate: string;
  description: string;
}

export interface Student {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  credentials: Credential[];
}
