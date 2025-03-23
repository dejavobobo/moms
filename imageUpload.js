async function uploadImage(file) {
    try {
        // Simulate image upload to Flickr
        return new Promise((resolve) => {
            const mockFlickrUrls = [
                "https://www.flickr.com/photos/202367254@N06/54388978919/in/dateposted-public/",
                "https://www.flickr.com/photos/202367254@N06/54389155525/in/dateposted-public/",
                "https://www.flickr.com/photos/202367254@N06/54388978934/in/dateposted-public/",
                "https://www.flickr.com/photos/202367254@N06/54389155540/in/dateposted-public/"
            ];
            
            // Simulate upload delay
            setTimeout(() => {
                // Return a random URL from the mock Flickr URLs
                const randomUrl = mockFlickrUrls[Math.floor(Math.random() * mockFlickrUrls.length)];
                resolve(randomUrl);
            }, 1000);
        });
    } catch (error) {
        console.error('Image upload failed:', error);
        throw error;
    }
}
