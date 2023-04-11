import Image from "next/image";
import { applyTheme } from "src/themes";

export const Header = () => {
  return (
    <nav className="!bg-primary-background">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="!relative !h-8 !w-8 mr-3"
            fill
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-text">
            Flowbite
          </span>
        </a>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onChange={(e) => {
              applyTheme(e.currentTarget.checked ? "base" : "dark");
            }}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className="!bg-primary-background w-14 h-7 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600"></div>
          <span className="ml-3 text-sm font-medium text-primary-text">
            Mode
          </span>
        </label>
      </div>
    </nav>
  );
};
