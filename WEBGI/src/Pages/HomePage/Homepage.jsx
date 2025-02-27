import Logo from "../../assets/Logo1.png";
import { Menus } from "../../utils";
import DesktopMenu from "../../components/DesktopMenu";
import MobMenu from "../../components/MobMenu";

const HomePage = () => {
  return (
    <div>
      {/* Header without background color */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md flex items-center z-50">
        <nav className="max-w-7xl w-full mx-auto px-4 flex items-center justify-between">
          {/* Left: Logo + Brand Name */}
          <div className="flex items-center gap-x-2 flex-shrink-0">
            <img
              src={Logo}
              alt="WebGi Logo"
              className="w-10 h-10 object-contain"
            />
            <h3
              className="text-lg font-bold text-gray-900"
              aria-label="Brand Name"
            >
              WEBGI
            </h3>
          </div>

          {/* Right: Desktop Menu & Sign In */}
          <div className="hidden lg:flex items-center gap-x-6 ml-auto">
            <ul className="flex items-center gap-x-6 text-gray-900">
              {Menus.map((menu) => (
                <DesktopMenu
                  menu={menu}
                  key={menu.name}
                  className="text-gray-900"
                />
              ))}
            </ul>
          </div>

          {/* Mobile Menu Icon (hidden on large screens) */}
          <div className="lg:hidden">
            <MobMenu Menus={Menus} className="text-gray-900" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
