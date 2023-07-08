import { ReactNode } from "react";

export interface CNIconProps {
  className: string;
}

export interface AutoCompleteProps {
  handleChange: (value: string) => void;
  value?: string;
  label?: string;
  classes?: string;
  isSubmitted?: boolean;
}

export interface ButtonProps {
  title: string;
  className: string;
  onClick: (e: any) => void;
}
export interface RatingProps {
  rating: number;
}

export interface HeroProps {
  children: ReactNode;
  classesForMainDiv?: string;
  classesForSubDiv?: string;
  bgImage?: any;
}

export interface IconCardTabsProps {
  image?: any;
  text: string;
  subText?: string;
  className: string;
  onClick: any;
}

interface optionProps {
  label: string;
  value: string;
}
export interface SelectProps {
  options: Array<optionProps>;
  className: string;
  value: string;
  handleChange: (value: string) => void;
  fieldName: string;
  label: string;
  inputClasses?: string;
  isSubmitted?: boolean;
}

export interface cardPropsTypes {
  title: string;
  description: string;
  navigateTo: string;
}

export interface ServiceFormProps {
  setShowForm: (x: boolean) => void;
  title: string;
  btnText: string;
  onFormSubmit: (data: any) => void;
  isCalendar: boolean;
  key: string;
}
export interface ServiceFormPropsUtils {
  title: string;
  subTitle?: string;
  isCalendar?: boolean;
  btnText: string;
  onFormSubmit: any;
}

export interface StepsCard {
  icon: any;
  title: string;
  description: string;
  dark?: boolean;
}

export interface ObjectInArray {
  label: string;
  value: string;
}

export interface LinkTabProps {
  link: any;
  index: number;
}

export interface ServeicesProps {
  link: string;
  label: string;
}

export interface IconProps {
  className: string;
  width?: string;
  height?: string;
}
