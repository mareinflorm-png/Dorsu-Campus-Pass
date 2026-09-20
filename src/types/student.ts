import { ImageSourcePropType } from 'react-native';

export type StudentAvatar = string | ImageSourcePropType;

export interface StudentProfile {
  name: string;
  idNumber: string;
  program: string;
  yearLevel: string;
  avatarUrl: StudentAvatar;
  campus: string;
}

export interface StatusBadgeProps {
  isActive: boolean;
}