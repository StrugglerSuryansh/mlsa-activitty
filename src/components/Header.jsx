import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center shadow-md px-6 fixed w-full">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-24" /> {/* Adjust width and height as needed */}
      </div>
      <h1 className="text-xl text-primary font-bold text-right">MLSA-MIET</h1> {/* Moved the heading outside */}
    </header>
  );
};

export default Header;
