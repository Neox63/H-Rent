const Footer = () => {
  return (
    <footer className="w-full p-4 px-12 font-bold text-center border-t border-gray-400">
      <span>© {new Date(Date.now()).getFullYear()} H-Rent</span>
    </footer>
  );
};

export default Footer;
