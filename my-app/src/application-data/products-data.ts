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
      'https://i.ibb.co/LpWj405/img1.jpg',
      'https://i.ibb.co/tLLTKYH/img2.jpg',
      'https://i.ibb.co/56qrqXM/img3.jpg',
      'https://i.ibb.co/9WymWDS/img4.jpg',
      'https://i.ibb.co/VNw7tmv/img5.jpg',
      'https://i.ibb.co/rtm0pbg/img6.jpg',
    ],
    mainTitle: 'Поливна макара',
    title: 'Irrimec',
    subtitle: '-',
    price: 14000,
    content:
      'Поливна макара Irrimec ф90, 360 м. - редуктор с турбина. Лафетен лагер. Помпа Rowatti 80 m3, 9 bar. Плюс комплект маркучи. Много запазена и поддържана. Готова за ползване. Внос Нидерландия. Пистолет Twin spruier ',
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
    mainTitle: 'Поливна макара',
    title: 'Irrimec',
    subtitle: '-',
    price: 14000,
    content:
      'Поливна макара Irrimec ф90, 360 м. - редуктор с турбина. Лафетен лагер. Помпа Rowatti 80 m3, 9 bar. Плюс комплект маркучи. Много запазена и поддържана. Готова за ползване. Внос Нидерландия. Пистолет Twin spruier ',
  }
];
