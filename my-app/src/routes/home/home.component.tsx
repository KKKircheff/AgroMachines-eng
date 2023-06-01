import React from 'react'
;import { Outlet } from 'react-router-dom';

import './home.style.scss'
import "aos/dist/aos.css";
import HeaderHomePage from '../../components/header-home-page/header-home-page.component';
import InfoSection from '../../components/info-section/info-section.component';
import ContatForm from '../../components/contact-form/contact-form.component';
import ProductCard from '../../components/product-card/product-card.component';
import FooterHomePage from '../../components/footer-home-page/footer-home-page.component';
import { productsData } from '../../application-data/products-data';
const HistoryGallery = React.lazy(() => import('../../components/history-gallery/history-gallery.component'))
const Home = () => {

const productCards = productsData.map((product, index)=>{
  return <ProductCard
      key={product.url[0]+index}
      url={product.url}
      mainTitle={product.mainTitle}
      title={product.title}
      subtitle={product.subtitle}
      content={product.content}
      price={product.price}
      imgSide='left'
  />})

  return (
    <div className='home-wrapper'>

      <HeaderHomePage />
      <InfoSection />
      { productCards && <div>{productCards}</div>} 
      <ContatForm />
      <HistoryGallery />
      <FooterHomePage />
      <Outlet />
    </div>
  )
}

export default Home