export interface IManufacturerItemData {
  slug: string;
  title: string;
  hasSeparatePage: boolean;
}

export interface IManufacturerData {
  id: string;
  items: IManufacturerItemData[];
  image: string;
  title: string;
}

export interface ILink {
  page: string;
  brochure: string;
}

export interface ItemData {
  id: string;
  title: string;
  slug: string;
  description: string[];
  images: string[];
  links: ILink;
}

export interface ItemImageData {
  id?: string;
  title: string;
  src: string;
}

export interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: Date;
  windowQty: string;
  doorQty: string;
  features?: string[];
  survey: string[];
}
