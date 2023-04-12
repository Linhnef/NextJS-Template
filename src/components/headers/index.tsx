import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { applyTheme } from "src/themes";
import { HiChevronDown } from "react-icons/hi";
import { Dropdown, MenuProps, Space } from "antd";
import { useRouter } from "next/router";

export const Header = () => {
  const { locale, push, pathname } = useRouter();
  useEffect(() => {
    applyTheme("dark");
  }, []);

  const items: MenuProps["items"] = [
    {
      key: "vi",
      label: (
        <div className="flex gap-2 items-center justify-center">
          <span>Vietnamese (vi)</span>
        </div>
      ),
      onClick: () => {
        push("/vi");
      },
    },
    {
      key: "en",
      label: (
        <div className="flex gap-2 items-center justify-center">
          <span>English (en)</span>
        </div>
      ),
      onClick: () => {
        push("/en");
      },
    },
  ];

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

        <nav className=" hidden md:flex gap-6">
          <Link
            className="text-primary-text font-bold text-xl"
            href={"/service"}
          >
            Service
          </Link>
          <Link
            className="text-primary-text font-bold text-xl"
            href={"/about-us"}
          >
            About-us
          </Link>
          <Link
            className="text-primary-text font-bold text-xl"
            href={"/contact"}
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-x-3 justify-center items-center">
          <Dropdown menu={{ items }}>
            <Space>
              <div className="flex items-center justify-center">
                <span className="text-primary-text font-bold text-base leading-[110%]">
                  {locale.toUpperCase()}
                </span>
                <HiChevronDown size={20} />
              </div>
            </Space>
          </Dropdown>
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
      </div>
    </nav>
  );
};
