const HeroSection = ({image, text}) => {
    return (
        <>
            <div className="relative w-full h-64 md:h-150 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${image})`}}>
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">
                    {text}
                </h1>
            </div>
        </>
    ) 
}

export default HeroSection; 