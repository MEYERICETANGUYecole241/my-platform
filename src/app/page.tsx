import React from 'react'
import Header from '@/Component/header'
import Heroe from '@/Component/heroe'
import A_propos from '@/Component/A_propos'
import FeaturesSection from '@/Component/FeaturesSections'
import Témoingnages from '@/Component/Témoingnages'
import CallToAction from '@/Component/CallToAction'
import Footer from '@/Component/Footer'



export default function Page() {
  return (
    <div>
      <Header/>
       <Heroe/>
       <A_propos/>
       <FeaturesSection/>
       <Témoingnages/>
       <CallToAction/>
        <Footer/>


    </div>
  )
}
