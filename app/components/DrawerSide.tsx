export default function DrawerSide() {
  return (
    <div className="drawer-side z-50">
      <div className="bg-base-200 h-full w-screen p-4">
        {/* Sidebar content here */}
        <div className="flex flex-col justify-center items-center bg-base-200">
          <input
            type="text"
            placeholder="Search..."
            class="input input-bordered w-full max-w-xs"
          />

          <div className="bg-red-500 w-full">another div</div>
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
      </div>
    </div>
  );
}
