import Link from "next/link";

const Header = () => {

  return (
    <>
      <header className="site-header">
        <div className="container-wide px-8 mx-auto">
          <nav className="sr-only">
            <div className="flex flex-wrap items-center justify-between mx-auto text-white">
              <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <span className="site-name text-wide ">underlost</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};


export default Header;