export default function Text({
  children,
}: {
  children: string | React.ReactNode;
}) {
  return (
    <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-500">
      {children}
    </p>
  );
}
