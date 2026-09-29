function ApplicationsOverview() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

  const values = [4, 7, 5, 10, 8, 14]

  return (
    <div className="bg-[var(--cf-card)] border border-[var(--cf-border)] rounded-2xl p-6">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Applications Overview
          </h2>

          <p className="text-sm text-[var(--cf-muted)] mt-1">
            Your application activity over the last 6 months
          </p>
        </div>

        <button className="px-3 py-2 rounded-lg border border-[var(--cf-border)] text-sm text-[var(--cf-muted)] hover:text-white hover:bg-[var(--cf-background)] transition">
          Last 6 months
        </button>
      </div>

      <div className="flex items-end gap-6 h-64 mt-8 px-4">

        {values.map((value, index) => (
          <div
            key={months[index]}
            className="flex-1 h-full flex flex-col justify-end items-center gap-3"
          >
            <span className="text-xs text-[var(--cf-muted)]">
              {value}
            </span>

            <div
              className="w-full max-w-10 bg-[var(--cf-primary)] rounded-t-lg"
              style={{ height: `${value * 12}px` }}
            />

            <span className="text-xs text-[var(--cf-muted)]">
              {months[index]}
            </span>
          </div>
        ))}

      </div>

    </div>
  )
}

export default ApplicationsOverview