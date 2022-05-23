import { API_BASE_URL } from "../../utils/constant";

const ImageGallery = ({ images, withUrl }) => {
  return (
    <div className="flex w-full gap-4 mt-8">
      {images.map(
        (image, index) =>
          image && (
            <div key={index}>
              <img
                src={
                  withUrl
                    ? `${API_BASE_URL}downloadFile/${encodeURI(image)}`
                    : URL.createObjectURL(image)
                }
                alt="Annonce"
                className="w-full h-32 rounded-lg"
              />
            </div>
          )
      )}
    </div>
  );
};

export default ImageGallery;
