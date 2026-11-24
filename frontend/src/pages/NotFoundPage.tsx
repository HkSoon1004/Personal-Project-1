import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main className="flex-1 max-w-[640px] w-full mx-auto px-lg py-section flex flex-col items-start gap-md">
      <h1 className="font-headline text-headline text-ink">페이지를 찾을 수 없습니다</h1>
      <p className="font-body text-body text-ink-muted">주소가 바뀌었거나 아직 준비 중인 페이지입니다.</p>
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-primary text-on-primary font-button text-button px-md py-sm min-h-10 rounded-md hover:opacity-90"
      >
        메인으로
      </Link>
    </main>
  );
}
