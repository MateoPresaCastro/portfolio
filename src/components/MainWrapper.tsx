export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-grow items-center justify-center">
      <div className="m-10 ml-12 max-w-2xl text-neutral-950 dark:text-neutral-50">
        {children}
      </div>
    </main>
  );
}
