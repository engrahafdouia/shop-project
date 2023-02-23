<template>
 <HeroSection title="Welcome To Golance Project!" >
 </HeroSection>
 <MostSection/>
 <FeaturesSection/>
<MostProducts/>


<!-- <TeamSection/> -->
<SwiperSection/>
<TesSection/>
<AccordionSection/>
<FormContact/>

</template>
<script>
  import HeroSection from '@/components/HeroSection.vue';
import MostSection from '@/components/MostSection.vue';
import AccordionSection from '@/components/AccordionSection.vue';
import TesSection from '@/components/TesSection.vue';
import SwiperSection  from '@/components/SwiperSection.vue';

import FeaturesSection from '@/components/FeaturesSection.vue';

import MostProducts from '@/components/MostProducts.vue';
import FormContact from '@/components/FormContact.vue';

  export default {
      components: {
        FeaturesSection,
    HeroSection,
    MostSection,
    SwiperSection,
    TesSection,
    AccordionSection,

    MostProducts,
    FormContact
},
      data(){
        return{
          title:'',
        }
      }
    }


</script>

