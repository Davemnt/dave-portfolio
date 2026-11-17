export default function FooterSection() {
  return (
    <footer className="bg-ink-deep text-white/70">
      <div className="mx-auto max-w-[1080px] px-4 py-6 text-sm sm:px-6">
        © {new Date().getFullYear()} David Monte
      </div>
    </footer>
  );
}
