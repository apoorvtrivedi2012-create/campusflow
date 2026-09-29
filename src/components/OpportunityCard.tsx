import { Bookmark, MapPin, IndianRupee } from 'lucide-react'

type OpportunityCardProps = {
  company: string
  role: string
  location: string
  salary: string
  skills: string[]
  posted: string
  type?: string
  onView?: () => void
}

function OpportunityCard({
  company,
  role,
  location,
  salary,
  skills,
  posted,
  type = 'Full Time',
  onView,
}: OpportunityCardProps) {
  return (
    <div className="bg-[var(--cf-card)] border border-[var(--cf-border)] rounded-2xl p-5">

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-[var(--cf-primary)]/10 flex items-center justify-center text-[var(--cf-primary)] font-bold">
            {company.charAt(0)}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              {role}
            </h3>

            <p className="text-xs text-[var(--cf-muted)] mt-1">
              {company}
            </p>
          </div>

        </div>

        <button
          type="button"
          className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--cf-muted)] hover:bg-[var(--cf-background)] hover:text-white transition"
        >
          <Bookmark size={17} />
        </button>

      </div>

      <div className="mt-4">

        <span className="inline-flex px-2.5 py-1 rounded-md bg-[var(--cf-primary)]/10 text-[var(--cf-primary)] text-xs font-medium">
          {type}
        </span>

      </div>

      <div className="flex flex-col gap-2 mt-5">

        <div className="flex items-center gap-2 text-xs text-[var(--cf-muted)]">
          <MapPin size={15} />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[var(--cf-muted)]">
          <IndianRupee size={15} />
          <span>{salary}</span>
        </div>

      </div>

      <div className="flex flex-wrap gap-2 mt-5">

        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-md bg-[var(--cf-background)] border border-[var(--cf-border)] text-xs text-[var(--cf-muted)]"
          >
            {skill}
          </span>
        ))}

      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--cf-border)]">

        <span className="text-xs text-[var(--cf-muted)]">
          Posted {posted}
        </span>

        <button
          type="button"
          onClick={() => onView?.()}
          className="px-4 py-2 rounded-lg bg-[var(--cf-primary)] text-white text-sm font-medium hover:opacity-90 transition"
        >
          View Opportunity
        </button>

      </div>

    </div>
  )
}

export default OpportunityCard