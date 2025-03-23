import React, { useState } from 'react';

function PhotoGallery() {
    const [photos, setPhotos] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            setPhotos((prevPhotos) => [...prevPhotos, e.target.result]);
        };
        reader.readAsDataURL(file);
    };

    const handleDeletePhoto = (index) => {
        setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
    };

    return (
        <section id="gallery" className="py-16 bg-gray-100" data-name="gallery-section">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-3xl font-bold mb-12 text-center" data-name="gallery-title">
                    Memory Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-name="gallery-grid">
                    {photos.map((photo, index) => (
                        <div key={index} className="relative">
                            <img
                                src={photo}
                                alt={`Uploaded ${index}`}
                                className="w-full h-auto rounded shadow"
                            />
                            <button
                                onClick={() => handleDeletePhoto(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center" data-name="upload-section">
                    <label className="inline-block px-6 py-2 bg-gray-800 text-white rounded cursor-pointer hover:bg-gray-700">
                        Share a Photo
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>
                {isUploading && <p className="text-center mt-4 text-gray-500">Uploading...</p>}
            </div>
        </section>
    );
}

export default PhotoGallery;
