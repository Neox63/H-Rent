const ImageGallery = ({ images }) => {
  return (
    <div className="flex w-full gap-4 mt-8">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={URL.createObjectURL(image)}
            alt={image.name}
            className="w-full h-32 rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
