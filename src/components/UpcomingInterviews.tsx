function UpcomingInterviews() {
  const interviews = [
    {
      company: 'Adobe',
      role: 'Technical Consultant',
      date: 'Tomorrow',
      time: '10:30 AM',
      type: 'Technical Round',
    },
    {
      company: 'Accenture',
      role: 'Software Engineer',
      date: 'Oct 2',
      time: '2:00 PM',
      type: 'Technical Interview',
    },
    {
      company: 'Deloitte',
      role: 'Analyst',
      date: 'Oct 5',
      time: '11:00 AM',
      type: 'HR Round',
    },
  ]

  return (
    <div className="bg-[var(--cf-card)] border border-[var(--cf-border)] rounded-2xl p-6">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Upcoming Interviews
          </h2>

          <p className="text-sm text-[var(--cf-muted)] mt-1">
            Your next scheduled interviews
          </p>
        </div>

        <button className="text-sm text-[var(--cf-primary)] hover:underline">
          View all
        </button>
      </div>

      <div className="mt-6 space-y-4">

        {interviews.map((interview) => (
          <div
            key={`${interview.company}-${interview.date}`}
            className="flex items-center gap-4 p-4 rounded-xl border border-[var(--cf-border)] hover:bg-[var(--cf-background)] transition"
          >

            <div className="w-11 h-11 rounded-xl bg-[var(--cf-primary)]/10 flex items-center justify-center text-[var(--cf-primary)] font-bold">
              {interview.company.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">
                {interview.company}
              </p>

              <p className="text-xs text-[var(--cf-muted)] mt-1">
                {interview.role}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-medium text-white">
                {interview.date}
              </p>

              <p className="text-xs text-[var(--cf-muted)] mt-1">
                {interview.time}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default UpcomingInterviews