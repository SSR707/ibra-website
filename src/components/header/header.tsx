import Link from "next/link";
import { HeaderMenu } from "./header-menu";
import { HeaderNav } from "./header-nav";
const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-foreground">
      <div className="container">
        <div className="flex  justify-between py-[20px] items-center ">
          {" "}
          <Link href={"/"}>
            {" "}
            <h2 className="font-black text-[30px] text-transparent bg-clip-text bg-[url('/img/background.gif')] bg-cover bg-center drop-shadow-[0px_2px_2px_rgba(255,255,255,0.2)]">
              IBRA ONE LOVE
            </h2>
          </Link>
          <HeaderMenu />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
