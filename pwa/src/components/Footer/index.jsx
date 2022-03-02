const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full px-12 p-4 text-center font-bold">
      <span>© {new Date(Date.now()).getFullYear()} H-Rent</span>
    </footer>
  );
};

export default Footer;
