import StatCard from '../components/StatCard'
import ApplicationsOverview from '../components/ApplicationsOverview'
import UpcomingInterviews from '../components/UpcomingInterviews'
import OpportunityCard from '../components/OpportunityCard'

function Dashboard() {
  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Good morning, Apoorv 👋
        </h1>

        <p className="mt-2 text-[var(--cf-muted)]">
          Here's what's happening with your placement journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5 mt-8">

        <StatCard
          title="Applications"
          value="18"
          change="+12%"
          description="vs. last month"
          icon="▤"
        />

        <StatCard
          title="Interviews"
          value="4"
          change="+2"
          description="this month"
          icon="◷"
        />

        <StatCard
          title="Offers"
          value="2"
          change="+1"
          description="this placement season"
          icon="★"
        />

        <StatCard
          title="Profile Completion"
          value="82%"
          change="+8%"
          description="keep improving your profile"
          icon="◎"
        />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-6">

        <div className="xl:col-span-2">
          <ApplicationsOverview />
        </div>

        <UpcomingInterviews />

      </div>

      <div className="mt-6">

        <div className="flex items-center justify-between mb-4">

          <div>
            <h2 className="text-lg font-semibold text-white">
              Recommended Opportunities
            </h2>

            <p className="text-sm text-[var(--cf-muted)] mt-1">
              Opportunities matching your profile
            </p>
          </div>

          <button className="text-sm text-[var(--cf-primary)] hover:underline">
            View all
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          <OpportunityCard
            company="Microsoft"
            role="Software Engineer Intern"
            location="Bangalore"
            salary="₹45K/month"
            skills={['C++', 'DSA', 'React']}
            posted="2d ago"
          />

          <OpportunityCard
            company="Adobe"
            role="Technical Consultant"
            location="Noida"
            salary="₹12 LPA"
            skills={['Python', 'SQL', 'Cloud']}
            posted="1d ago"
          />

          <OpportunityCard
            company="Accenture"
            role="Full Stack Developer"
            location="Pune"
            salary="₹9 LPA"
            skills={['React', 'Node.js', 'MongoDB']}
            posted="3d ago"
          />

        </div>

      </div>

    </main>
  )
}

export default Dashboard