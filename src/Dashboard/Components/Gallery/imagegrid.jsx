import React, { useState } from "react";
import ImageItem from "./imageitem";
import { useNavigate } from "react-router";

// Sample data for demonstration
const initialImages = [
    { id: 1, src: "images/room-1.jpg", alt: "Sample image 1", tags: ["room"] },
    { id: 2, src: "images/room-2.jpg", alt: "Sample image 2", tags: ["room"] },
    { id: 3, src: "images/room-3.jpg", alt: "Sample image 3", tags: ["room"] },
    { id: 4, src: "images/birthday.jpg", alt: "Sample image 4", tags: ["event"] },
    { id: 5, src: "images/wedding.jpg", alt: "Sample image 5", tags: ["event"] },
];

function ImageGrid() {
    const navigate = useNavigate();
    const [images, setImages] = useState(initialImages);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredImages = images.filter((image) =>
        image.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div>
            <div className="flex justify-between items-center">
            <div className=" input-group search-area mb-4">
                <input
                    type="text"
                    placeholder="Search by tag..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:outline-none form-control"
                />
                <span className="input-group-text">
                    <a href="/react/demo/guest-list">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50">
                            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg>
                    </a>
                </span>
            </div>
            <a
                onClick={()=>navigate('/add-image')}
                className="btn bg-[#c59a63] text-[#293941] py-2 px-4 rounded hover:bg-[#293941] hover:text-[#c59a63]"
            >
                Add Images
            </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {filteredImages.map((image) => (
                    <ImageItem key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
}

export default ImageGrid;
