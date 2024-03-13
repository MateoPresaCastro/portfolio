export default function Text({
  children,
}: {
  children: string | React.ReactNode;
}) {
  return (
    <p className="mb-8 text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
}
