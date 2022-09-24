import React from 'react'
import HeroIntroduction from '../containers/Home/HeroIntroduction';
import BaseLayout from '../layouts/BaseLayout'
import css from "./Home.module.css";

export default function Home() {

  // hero --- who am i




  return (
    <BaseLayout>
  
      

      <section  className={css.hero} >


          <HeroIntroduction/>



      </section>
    
    </BaseLayout>
  )
}


