export interface LinkTabObj {
  label: string;
  image: any;
  children?: Array<any>;
  link?: string;
}

export interface NavDropDown {
  open: boolean;
  setOpen: any;
  childrenArray: Array<any>;
  text: string;
}
