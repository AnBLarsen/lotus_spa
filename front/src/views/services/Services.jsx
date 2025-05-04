import Footer from "../../components/Footer/Footer";
import { heroContent } from "../../helpers/heros";
import HeroSection from "../../components/Hero/HeroSection";
import { Link } from "react-router-dom";

export default function Services() {
    const hero = heroContent.find(item => item.page === "services");

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <HeroSection image={hero.image} text={hero.text} />
                
                <section className="flex-grow bg-[#f5eee6] text-gray-800 py-16 px-6">
                    <div className="container mx-auto max-w-5xl text-center">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Indulge in a range of luxurious treatments designed to rejuvenate your body and mind.
                        </h2>
                    </div>

                    <div className="container mx-auto max-w-4xl mt-10 grid md:grid-cols-2 gap-8">
                      
                        <div className="bg-[#ffffffb9] p-6 rounded-lg shadow-lg flex flex-col h-full">
                            <img src="/massage.jpg" alt="Massage Therapy" className="w-full h-48 object-cover rounded-lg"/>
                            <h3 className="text-2xl font-semibold text-[#585c5b] mt-4">Massage Therapy</h3>
                            <p className="mt-2 text-gray-700">
                                Experience deep relaxation with our professional massage therapies, including Swedish, deep tissue,
                                and aromatherapy massages, tailored to relieve stress and tension.
                            </p>

                            <div className="flex-grow"></div>
                            
                            <div className="mt-4">
                                <button className="w-full bg-[#e4a1a0c4] text-[#504f4e] px-4 py-2 rounded hover:bg-[#f5aaa8] cursor-pointer">
                                    <Link to="/book-appointment">Book</Link>
                                </button>
                            </div>
                        </div>

                       
                        <div className="bg-[#ffffffb9] p-6 rounded-lg shadow-lg flex flex-col h-full">
                            <img src="/facial.jpg" alt="Facial Treatments" className="w-full h-48 object-cover rounded-lg"/>
                            <h3 className="text-2xl font-semibold text-[#585c5b] mt-4">Facial Treatments</h3>
                            <p className="mt-2 text-gray-700">
                                Revitalize your skin with our signature facials, featuring nourishing ingredients to enhance
                                hydration, brightness, and overall skin health.
                            </p>

                            <div className="flex-grow"></div>

                            <div className="mt-4">
                                <button className="w-full bg-[#e4a1a0c4] text-[#504f4e] px-4 py-2 rounded hover:bg-[#f5aaa8] cursor-pointer">
                                    <Link to="/book-appointment">Book</Link>
                                </button>
                            </div>
                        </div>

                        
                        <div className="bg-[#ffffffb9]  p-6 rounded-lg shadow-lg flex flex-col h-full">
                            <img src="/body.jpg" alt="Body Treatments" className="w-full h-48 object-cover rounded-lg"/>
                            <h3 className="text-2xl font-semibold text-[#585c5b] mt-4">Body Treatments</h3>
                            <p className="mt-2 text-gray-700">
                                Pamper yourself with exfoliating body scrubs, hydrating wraps, and detoxifying treatments
                                that leave your skin feeling soft and rejuvenated.
                            </p>

                            <div className="flex-grow"></div>

                            <div className="mt-4">
                                <button className="w-full bg-[#e4a1a0c4] text-[#504f4e] px-4 py-2 rounded hover:bg-[#f5aaa8] cursor-pointer">
                                    <Link to="/book-appointment">Book</Link>
                                </button>
                            </div>
                        </div>

                    
                        <div className="bg-[#ffffffb9]  p-6 rounded-lg shadow-lg flex flex-col h-full">
                            <img src="/wellness.jpg" alt="Wellness Packages" className="w-full h-48 object-cover rounded-lg"/>
                            <h3 className="text-2xl font-semibold text-[#585c5b] mt-4">Wellness Packages</h3>
                            <p className="mt-2 text-gray-700">
                                Choose from our specially curated spa packages that combine multiple treatments
                                for a complete relaxation experience.
                            </p>

                            <div className="flex-grow"></div>

                            <div className="mt-4">
                                <button className="w-full bg-[#e4a1a0c4] text-[#504f4e] px-4 py-2 rounded hover:bg-[#f5aaa8] cursor-pointer">
                                    <Link to="/book-appointment">Book</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
