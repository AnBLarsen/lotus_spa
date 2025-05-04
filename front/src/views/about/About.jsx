import Footer from "../../components/Footer/Footer";
import { heroContent } from "../../helpers/heros";
import HeroSection from "../../components/Hero/HeroSection";


export default function About() {
    const hero = heroContent.find(item => item.page === "about");
    return (

        <>
            <div className="flex flex-col min-h-screen">


                <HeroSection image={hero.image} text={hero.text} />        
                <section className=" flex-grow bg-[#f5eee6] text-gray-800 py-16 px-6">
                    <div className="container mx-auto max-w-5xl text-center">
                        <h2 className="text-4xl font-bold  text-gray-700">A sanctuary of relaxation and rejuvenation.</h2>
                    
                    </div>
                    
                    <div className="container mx-auto max-w-4xl mt-10 grid md:grid-cols-2 gap-8 items-center">
                        <img src="/aboutSection.jpg" alt="Spa Interior" className="rounded-lg shadow-lg" />
                        <div>
                        <h3 className="text-2xl font-semibold text-[#779e97]">Our Philosophy</h3>
                        <p className="mt-4 text-gray-700">
                            At LOTUS Spa, we believe in holistic wellness, where mind and body find balance.
                            Our treatments are designed to provide deep relaxation, renewal, and peace.
                            We strive to create an environment where our guests can disconnect from the
                            stress of daily life and embrace tranquility. Each visit to our spa is an
                            opportunity to reset and recharge, guided by expert therapists who tailor
                            each session to your individual needs.
                        </p>
                        <h3 className="text-2xl font-semibold text-[#779e97] mt-6">What We Offer</h3>
                        <p className="mt-4 text-gray-700">
                            Our spa offers a variety of treatments designed to cater to your personal
                            wellness journey. From aromatherapy massages to rejuvenating facials, each
                            service is carefully curated to enhance your well-being. Our serene setting,
                            infused with calming scents and tranquil music, ensures a deeply soothing experience.
                        </p>
                        <ul className="mt-4 text-gray-700 list-disc list-inside">
                            <li>Luxury spa treatments</li>
                            <li>Personalized wellness therapies</li>
                            <li>State-of-the-art facilities</li>
                            <li>Skincare consultations and facials</li>
                            <li>Mindfulness and relaxation programs</li>
                        </ul>
                        <h3 className="text-2xl font-semibold text-[#779e97] mt-6">Our Commitment</h3>
                        <p className="mt-4 text-gray-700">
                            We are committed to using only the highest quality natural and organic products,
                            ensuring that your skin and body receive the best care possible. Every detail,
                            from our decor to our treatments, is crafted to promote inner peace and outer
                            beauty. Visit LOTUS Spa and discover the ultimate retreat for your senses.
                        </p>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        </>

    );
}
  