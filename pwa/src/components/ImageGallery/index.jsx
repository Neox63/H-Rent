const ImageGallery = ({ images, withUrl }) => {
  return (
    <div className="flex w-full gap-4 mt-8">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={withUrl ? image : URL.createObjectURL(image)}
            alt={image.name}
            className="w-full h-32 rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
