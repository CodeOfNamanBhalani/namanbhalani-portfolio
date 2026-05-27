import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-4 text-3xl font-semibold">Page not found</h1>
      <Link
        href="/"
        className="btn-primary mt-8 rounded-full px-6 py-3 text-sm"
      >
        Back home
      </Link>
    </div>
  );
}
