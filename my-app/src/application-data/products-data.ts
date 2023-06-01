export interface Product {
  url: string[];
  mainTitle:string;
  title: string;
  subtitle: string;
  price: number;
  content: string;
}

export const productsData: Product[] = [
  {
    url: [
      // 'https://i.ibb.co/pW3rdcT/img37.jpg',
      'https://i.ibb.co/JrKqgF9/img32a.jpg',
      'https://i.ibb.co/wMw24KV/img36.jpg',
      'https://i.ibb.co/WDBjbyf/signal-2023-04-26-093809-009.jpg',
    ],
    mainTitle: 'Irrigation Reel',
    title: 'Ferbo',
    subtitle: 'Ferbo built in',
    price: 8600,
    content:
    'Ferbo irrigation reel f100, 400m - turbine gearbox, complete with pump. Well preserved and maintained. Imported from the Netherlands.',
    },
  {
    url: [
    'https://i.ibb.co/LpWj405/img1.jpg',
    'https://i.ibb.co/tLLTKYH/img2.jpg',
    'https://i.ibb.co/56qrqXM/img3.jpg',
    'https://i.ibb.co/9WymWDS/img4.jpg',
    'https://i.ibb.co/VNw7tmv/img5.jpg',
    'https://i.ibb.co/rtm0pbg/img6.jpg',
    ],
    mainTitle: 'Irrigation Reel',
    title: 'Irrimec',
    subtitle: 'Rowatti',
    price: 6950,
    content:
    'Irrimec irrigation reel f90, 360m - turbine gearbox. Trailer bearing. Rowatti pump 80 m3, 9 bar. Includes hose kit. Well preserved and maintained. Ready for use. Imported from the Netherlands. Twin sprayer gun included.',
    }
];
