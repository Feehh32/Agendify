export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-[1200px] px-5 ${className}`}>{children}</div>
  );
}
