function Header() {
    try {
        return (
            <header className="hero-section text-white py-20" data-name="header-section">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" data-name="memorial-title">
                        In Loving Memory of
                    </h1>
                    <h2 className="text-3xl md:text-4xl mb-4" data-name="deceased-name">
                        Deaconess Christianah Osarieme Funmi Badmus
                    </h2>
                    <p className="text-xl mb-8" data-name="death-date">
                        Who slept in the Lord on March 21st, 2024
                    </p>
                    <div className="flex justify-center space-x-4" data-name="navigation-links">
                        <a href="#biography" className="hover:text-gray-300">Biography</a>
                        <a href="#gallery" className="hover:text-gray-300">Gallery</a>
                        <a href="#guestbook" className="hover:text-gray-300">Guestbook</a>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
