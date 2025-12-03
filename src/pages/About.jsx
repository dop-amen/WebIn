import React from 'react'
import Container from '@/components/Container'
import biglogo from "../assets/webin.png"

const About = () => {
  return (
    <>
            <div className="bg-[url(../src/assets/service.jpg)] text-white w-full mb-10">
        <h1 className="text-center pt-10 text-4xl font-semibold">About Us</h1>
        <p className="text-center pt-2.5 pb-[30px] text-md text-gray-300">Welcome to WebIn, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.</p>
      </div>
      <Container>
        <div className="flex justify-center gap-10 max-h-[500px]">
          <div className="max-w-1/2 mx-10">
            <h1 className="mt-20  text-gray-700 text-4xl font-semibold">About WebIn</h1>
            <p className="pt-4 text-justify">WebIn is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At WebIn, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
          </div>
          <div className="max-w-1/3">
            <img src={biglogo} className=" max-h-[340px]" alt="" />
          </div>
        </div>

          <h1 className="pt-15 text-5xl font-bold">Our Story</h1>

        <div className="flex gap-5 ">
          <div className="w-1/2 mx-10">

            <h1 className="text-[30px] text-gray-700 font-semibold mt-5"><span className="text-[120px] text-green-600 font-semibold">01</span> Design</h1>
            <p className=" text-justify">Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.</p>

            <h1 className="text-[30px] text-gray-700 font-semibold mt-5"><span className="text-[120px] text-green-600 font-semibold">03</span> Project Management</h1>
            <p className=" text-justify">In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded WebIn's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.</p>

            <h1 className="text-[30px] text-gray-700 font-semibold mt-5"><span className="text-[120px] text-green-600 font-semibold">05</span> Client-Centric Approach</h1>
            <p className=" text-justify">WenIn's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.</p>

          </div>

          <div className="w-1/2">
            
            <h1 className="text-[30px] text-gray-700 font-semibold mt-5"><span className="text-[120px] text-green-600 font-semibold">02</span> Engineering</h1>
            <p className=" text-justify">Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of WebIn. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.</p>

            <h1 className="text-[30px] text-gray-700 font-semibold mt-5"><span className="text-[120px] text-green-600 font-semibold">04</span> Collaboration</h1>
            <p className=" text-justify">At WebIn, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.</p>

            <h1 className="text-[30px] text-gray-700 font-semibold mt-5"><span className="text-[120px] text-green-600 font-semibold">06</span> Driving Success</h1>
            <p className=" text-justify">With each project, WebIn's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out WebIn for their expertise in creating digital products that delivered tangible results. WebIn's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.</p>

          </div>
        </div>

      </Container>
    </>
  )
}

export default About