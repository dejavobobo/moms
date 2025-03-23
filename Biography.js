function Biography() {
    try {
        return (
            <section id="biography" className="py-16 bg-white" data-name="biography-section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-3xl font-bold mb-12 text-center" data-name="biography-title">
                        Biography
                    </h2>
                    <div className="max-w-4xl mx-auto prose prose-lg" data-name="biography-content">
                        <p>
                            Born in the early fifties as the first child amongst her siblings, Christianah Osarieme was born to Mr. Michael Ada and Veronica Ewemade Osaghae (Nee Omorodion). Her father was a Civil servant and her mother a successful trader in Lagos, both of blessed memory.
                        </p>
                        <p>
                            Though originally an Edo princess, she grew up in the emerging era of Ékó (Lagos). She completed her primary education at Ahmadiya school Epetedo and went to the prestigious Lagos city college for her secondary and A-levels. She furthered her education at Yaba College of Technology, studying Business Administration and Secretarial Studies.
                        </p>
                        <p>
                            Her professional journey began at the Nigerian Army Signal and Communication Corps, now the Ministry of Defence. She later joined Barclays Bank (now Union Bank) and subsequently moved to First Bank of Nigeria, where she spent about three decades, rising to the managerial level.
                        </p>
                        <p>
                            She married her sweetheart, Abayomi Akeem Badmus (SNR), a Lagos prince, and their union was blessed with five wonderful children. She was also blessed with many grandchildren, whom she guided with wisdom and insight.
                        </p>
                        <p>
                            After retirement, she entered politics, serving as women's leader of her party, ACN, then APC, at both ward and local government levels under Oshodi Local Government in Lagos. Her commitment to community service continued through her work with the Women Affairs Ministry and Poverty Alleviation (WAPA).
                        </p>
                        <p>
                            Her dedication to God led her to be ordained as a Deaconess at the Stars for Christ Church, where she continued to worship and serve the Lord until her passing.
                        </p>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Biography component error:', error);
        reportError(error);
        return null;
    }
}
