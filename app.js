function App() {
    try {
        return (
            <div className="min-h-screen flex flex-col" data-name="app-container">
                <Header />
                <main className="flex-grow">
                    <Biography />
                    <PhotoGallery />
                    <Guestbook />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
