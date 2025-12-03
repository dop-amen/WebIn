import Testimonial from '@/components/Testimonial'
import Text from '@/components/Text'
import React from 'react'


const Testimonials = () => {
  return (
    <>
    <section className=" bg-gray-100 pb-6 sm:pt-8 lg:pt-2 sm:mt-2 lg:mt-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        <Text
            as="h1"
            className="text-center py-[50px] text-5xl font-bold"
            text="Testimonials"
          />

        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto
                        md:max-w-none lg:gap-10 md:grid-cols-3">
          
          <Testimonial
            text="You made it so simple. My new site is so much better..."
            name="Leslie Alexander"
            role="Freelance React Developer"
            avatar="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
          />

          <Testimonial
            text="Simply the best. Better than all the rest..."
            name="Jacob Jones"
            role="Digital Marketer"
            avatar="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
          />

          <Testimonial
            text="Amazing service and support, I highly recommend..."
            name="Courtney Henry"
            role="Product Designer"
            avatar="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female-2.png"
          />

        </div>

      </div>
    </section>
    </>
  )
}

export default Testimonials