export default function Navbar() {
  return (
    <header className="">
      <div className="fixed navbar bg-base-100 w-lg lg:w-7xl border left-1/2 -translate-x-1/2 z-10 rounded-full mt-6">
        <div className="navbar-start">
          <label
            htmlFor="full-drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="navbar-center">
          <div className="text-center">
            <h1 className=" font-bold text-lg lg:text-3xl">
              Erick Torres Posso
            </h1>
            <span className="text-sm">TypeScript web developer.</span>
          </div>
        </div>
        <div className="navbar-end"></div>
      </div>
    </header>
  );
}
