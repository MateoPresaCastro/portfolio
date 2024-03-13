export default function Title({ children }: { children: string | React.ReactNode}) {
  return <p className="font-medium">{children}</p>;
}
