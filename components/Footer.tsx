import { HOST } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-night text-ondark">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-10 text-sm sm:flex-row">
        <p>© 2026 {HOST} · Star Yog Studio. All rights reserved.</p>
        <p className="font-semibold uppercase tracking-[0.18em] text-amber">Star Yog Studio</p>
      </div>
    </footer>
  );
}
