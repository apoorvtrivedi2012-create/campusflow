type StatCardProps = {
  title: string
  value: string
  change: string
  description: string
  icon: string
}

function StatCard({
  title,
  value,
  change,
  description,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-[var(--cf-card)] border border-[var(--cf-border)] rounded-2xl p-5">

      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--cf-muted)]">
          {title}
        </p>

        <div className="w-10 h-10 rounded-xl bg-[var(--cf-primary)]/10 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="flex items-end gap-3 mt-5">
        <h2 className="text-3xl font-bold text-white">
          {value}
        </h2>

        <span className="text-xs font-medium text-[var(--cf-success)] mb-1">
          {change}
        </span>
      </div>

      <p className="text-xs text-[var(--cf-muted)] mt-2">
        {description}
      </p>

    </div>
  )
}

export default StatCard