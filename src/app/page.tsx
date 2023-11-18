export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-neutral-900">
      <div className="animate-fadeIn m-10">
        <div className="max-w-2xl text-neutral-200">
          <h1 className="mb-2 delay-100">Mateo Presa Castro</h1>
          <p className="mb-12 font-light">
            Pursuing purpose, truth, and beauty.
          </p>

          <h1 className="mb-2">Now</h1>
          <p className="mb-12 font-light">
            {"Backend software engineer @ Viaplay's payments team."}
          </p>

          <h1 className="mb-2">Sound influences</h1>
          <p className="mb-12 font-light">
            Curtis Roads, Igor Stravinsky, Travis Scott, Drake.
          </p>

          <h1 className="mb-3">Connect</h1>
          <p className="mb-12 font-light no-underline transition-opacity ease-in-out hover:underline">
            mateopresacastro@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}
