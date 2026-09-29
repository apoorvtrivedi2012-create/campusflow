function Topbar() {
  return (
    <header className="h-20 border-b border-[var(--cf-border)] flex items-center justify-between px-8">
      
      {/* Search */}
      <div className="w-96">
        <div className="flex items-center gap-3 bg-[var(--cf-card)] border border-[var(--cf-border)] rounded-xl px-4 py-2.5">
          <span className="text-[var(--cf-muted)]">⌕</span>

          <input
            type="text"
            placeholder="Search opportunities, applications..."
            className="bg-transparent outline-none text-sm text-white placeholder:text-[var(--cf-muted)] w-full"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative w-10 h-10 rounded-xl hover:bg-[var(--cf-card)] flex items-center justify-center text-[var(--cf-muted)] hover:text-white transition">
          🔔

          <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--cf-primary)] rounded-full" />
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-[var(--cf-border)]" />

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[var(--cf-primary)] flex items-center justify-center text-white text-sm font-semibold">
            AT
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Apoorv Trivedi
            </p>

            <p className="text-xs text-[var(--cf-muted)]">
              Student
            </p>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Topbar