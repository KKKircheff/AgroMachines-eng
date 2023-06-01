export interface Item {
    name: string;
    offset?:number;
    contentPosition:number;
    url?: string;
    children?: Item[];
  }
  
 export const items: Item[] = [
  { name: 'About Us', url: 'header-home-page-wrapper', offset: 0, contentPosition: 1 },
  { name: 'Hot Deals', url: 'product-card-wrapper', offset: -50, contentPosition: 2 },
  // { name: 'High-pressure Pumps', url: 'product-card-wrapper', offset: 100, contentPosition: 3 },
  { name: 'Gallery', url: 'history-gallery-wrapper', offset: -100, contentPosition: 4 },
  { name: 'Contact', url: 'contact-form-container', offset: -100, contentPosition: 5 },
  ];
  ;