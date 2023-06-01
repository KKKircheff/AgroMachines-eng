export interface Item {
    name: string;
    offset?:number;
    contentPosition:number;
    url?: string;
    children?: Item[];
  }
  
 export const items: Item[] = [
    { name: 'за нас', url: 'header-home-page-wrapper', offset:0, contentPosition:1 },
    { name: 'актуални оферти', url: 'product-card-wrapper',offset:-50, contentPosition:2 },
    // { name: 'високонапорни помпи', url: 'product-card-wrapper',offset:100, contentPosition:3 },
    { name: 'галерия', url: 'history-gallery-wrapper', offset:-100, contentPosition:4 },
    { name: 'контакт', url: 'contact-form-container', offset:-100, contentPosition:5 },
  ];