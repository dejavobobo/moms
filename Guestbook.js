function Guestbook() {
    try {
        const [entries, setEntries] = React.useState([]);
        const [newEntry, setNewEntry] = React.useState({ name: '', message: '' });

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const entry = {
                    ...newEntry,
                    date: new Date().toISOString()
                };
                await trickleCreateObject('guestbook', entry);
                setEntries([entry, ...entries]);
                setNewEntry({ name: '', message: '' });
            } catch (error) {
                console.error('Failed to submit entry:', error);
            }
        };

        React.useEffect(() => {
            const loadEntries = async () => {
                try {
                    const response = await trickleListObjects('guestbook', 100, true);
                    setEntries(response.items.map(item => item.objectData));
                } catch (error) {
                    console.error('Failed to load guestbook entries:', error);
                }
            };
            loadEntries();
        }, []);

        return (
            <section id="guestbook" className="py-16" data-name="guestbook-section">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-3xl font-bold mb-12 text-center" data-name="guestbook-title">
                        Share Your Memories
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="mb-12 condolence-form" data-name="guestbook-form">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 border rounded"
                                    value={newEntry.name}
                                    onChange={(e) => setNewEntry({...newEntry, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Share your memory or condolence"
                                    className="w-full p-3 border rounded h-32"
                                    value={newEntry.message}
                                    onChange={(e) => setNewEntry({...newEntry, message: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
                                Submit
                            </button>
                        </form>
                        <div className="space-y-6" data-name="guestbook-entries">
                            {entries.map((entry, index) => (
                                <div key={index} className="guestbook-entry p-4 bg-white rounded shadow">
                                    <p className="font-bold">{entry.name}</p>
                                    <p className="text-gray-600">{entry.message}</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        {new Date(entry.date).toLocaleDateString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Guestbook component error:', error);
        reportError(error);
        return null;
    }
}
