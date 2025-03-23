function Footer() {
    try {
        return (
            <footer className="bg-gray-900 text-white py-8" data-name="footer-section">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4" data-name="footer-contact">
                        For more information, please contact:
                        <br />
                        Stars for Christ Church
                        <br />
                        <i className="fas fa-phone mr-2"></i> +234 XXX XXX XXXX
                    </p>
                    <div className="mb-4" data-name="footer-social">
                        <a href="#" className="mx-2 hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="mx-2 hover:text-gray-400">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="mx-2 hover:text-gray-400">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <p className="text-sm text-gray-400" data-name="footer-copyright">
                        © {new Date().getFullYear()} - In Loving Memory of Deaconess Christianah Osarieme Funmi Badmus
                    </p>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
