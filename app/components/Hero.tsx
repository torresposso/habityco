export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-black/70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            I'm a web developer with a passion for creating beautiful and
            functional websites. I specialize in TypeScript and React, but I'm
            also comfortable working with other technologies and frameworks.
          </p>
          <button className="btn btn-primary">
            This is how I love to work:
          </button>
        </div>
      </div>
    </div>
  );
}
