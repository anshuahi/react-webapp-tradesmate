export type ContactTag =
  | 'Customer'
  | 'VIP'
  | 'Lead'
  | 'Priority'
  | 'Partner'
  | 'New';

export interface Contact {
  id: number;
  initials: string;
  name: string;
  email: string;
  phone: string;
  tags: ContactTag[];
  lastContact: string; // keep as string (UI-friendly)
  totalCalls: number;
  color: string; // hex color
}