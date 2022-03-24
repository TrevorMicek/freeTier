import React from 'react';


import MainHeader from '../tailwindComps/Hero'
import SecondaryHeader from '../tailwindComps/SecondaryHeader'

const Header = (props) => {

  const firstTitle = 'Small Business Web Design & Development'
  const secondaryTitle = 'Sign up'


  const HomeHeader = () => (
    <section class="headerPictureWrapper">

   <MainHeader />

    </section>
  )
  const SecondaryHeaderComp = () => (
    <section class="headerPictureWrapper">
   <SecondaryHeader />
   </section>
  )
  const StoreHeader = () => (
    <section class="headerPictureWrapper">
   <div class="headerBorder">
   <h1 class="headerTitle">
   {props.title}
   </h1>

   </div>
   </section>
  )
  const SwitchHeader = () => {
    switch(props.title) {
        case firstTitle:
          return <MainHeader />
        case secondaryTitle:
          return <SecondaryHeader title={props.title} text={props.text} />

        default:
          return <StoreHeader />
    }
  }
return (
 <SwitchHeader />
)
}
export default Header;