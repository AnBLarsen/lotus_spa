import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="=  bg-[#779e97a8] text-white pt-3 pb-3">
      
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold">LOTUS</h2>
            <p className="mt-2">Relax, Refresh, Rejuvenate</p>
            
            <div className="mt-4">
                <p>123 Serenity St, Toronto, Canada</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>
        
            <div className="flex justify-center mt-4 space-x-6">
                <a href="#" className="text-white hover:text-gray-400">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            </div>
            
            <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} LOTUS Spa. All rights reserved.</p>
        </div>
    </footer>
  );
}

