import { useState } from 'react'
import { X, MapPin, IndianRupee } from 'lucide-react'
import OpportunityCard from '../components/OpportunityCard'

function Opportunities() {
  const opportunities = [
    {
      company: 'Microsoft',
      role: 'Software Engineer Intern',
      location: 'Bangalore',
      salary: '₹45K/month',
      skills: ['C++', 'DSA', 'React'],
      posted: '2d ago',
      type: 'Internship',
    },
    {
      company: 'Adobe',
      role: 'Technical Consultant',
      location: 'Noida',
      salary: '₹12 LPA',
      skills: ['Python', 'SQL', 'Cloud'],
      posted: '1d ago',
      type: 'Full Time',
    },
    {
      company: 'Accenture',
      role: 'Full Stack Developer',
      location: 'Pune',
      salary: '₹9 LPA',
      skills: ['React', 'Node.js', 'MongoDB'],
      posted: '3d ago',
      type: 'Full Time',
    },
    {
      company: 'Google',
      role: 'Software Engineering Intern',
      location: 'Hyderabad',
      salary: '₹60K/month',
      skills: ['C++', 'Python', 'DSA'],
      posted: '4d ago',
      type: 'Internship',
    },
    {
      company: 'Deloitte',
      role: 'Technology Analyst',
      location: 'Mumbai',
      salary: '₹10 LPA',
      skills: ['Python', 'SQL', 'AWS'],
      posted: '5d ago',
      type: 'Full Time',
    },
    {
      company: 'Flipkart',
      role: 'Frontend Developer Intern',
      location: 'Remote',
      salary: '₹40K/month',
      skills: ['React', 'TypeScript', 'CSS'],
      posted: '1d ago',
      type: 'Remote',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All')

  const [selectedOpportunity, setSelectedOpportunity] = useState<
    (typeof opportunities)[number] | null
  >(null)
  const [appliedOpportunities, setAppliedOpportunities] = useState<string[]>([])
  const handleApply = (opportunity: (typeof opportunities)[number]) => {
  setAppliedOpportunities((current) => [
    ...current,
    `${opportunity.company}-${opportunity.role}`,
  ])
}

  const categories = ['All', 'Internship', 'Full Time', 'Remote']

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const matchesSearch =
      opportunity.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )

    const matchesCategory =
      category === 'All' || opportunity.type === category

    return matchesSearch && matchesCategory
  })

  return (
    <main className="p-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Opportunities
        </h1>

        <p className="mt-2 text-[var(--cf-muted)]">
          Discover opportunities that match your career goals.
        </p>
      </div>

      {/* Search */}
      <div className="mt-8">

        <input
          type="text"
          placeholder="Search by role, company or skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[var(--cf-card)] border border-[var(--cf-border)] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[var(--cf-muted)] outline-none focus:border-[var(--cf-primary)]"
        />

      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mt-5">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              category === item
                ? 'bg-[var(--cf-primary)] text-white'
                : 'bg-[var(--cf-card)] border border-[var(--cf-border)] text-[var(--cf-muted)] hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Result count */}
      <div className="flex items-center justify-between mt-8 mb-4">

        <div>
          <h2 className="text-lg font-semibold text-white">
            Available Opportunities
          </h2>

          <p className="text-sm text-[var(--cf-muted)] mt-1">
            {filteredOpportunities.length} opportunities found
          </p>
        </div>

      </div>

      {/* Opportunity Cards */}
      {filteredOpportunities.length > 0 ? (

        <div className="grid grid-cols-3 gap-5">

          {filteredOpportunities.map((opportunity) => (

            <OpportunityCard
              key={`${opportunity.company}-${opportunity.role}`}
              company={opportunity.company}
              role={opportunity.role}
              location={opportunity.location}
              salary={opportunity.salary}
              skills={opportunity.skills}
              posted={opportunity.posted}
              type={opportunity.type}
              onView={() => setSelectedOpportunity(opportunity)}
            />

          ))}

        </div>

      ) : (

        <div className="bg-[var(--cf-card)] border border-[var(--cf-border)] rounded-2xl p-12 text-center">

          <h2 className="text-xl font-semibold text-white">
            No opportunities found
          </h2>

          <p className="text-sm text-[var(--cf-muted)] mt-2">
            Try changing your search or selected category.
          </p>

        </div>

      )}

      {/* Opportunity Details Modal */}
      {selectedOpportunity && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">

          <div className="w-full max-w-2xl bg-[var(--cf-card)] border border-[var(--cf-border)] rounded-2xl p-6">

            {/* Modal Header */}
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-[var(--cf-primary)]/10 flex items-center justify-center text-[var(--cf-primary)] text-xl font-bold">
                  {selectedOpportunity.company.charAt(0)}
                </div>

                <div>

                  <h2 className="text-xl font-semibold text-white">
                    {selectedOpportunity.role}
                  </h2>

                  <p className="text-sm text-[var(--cf-muted)] mt-1">
                    {selectedOpportunity.company}
                  </p>

                </div>

              </div>

              <button
                onClick={() => setSelectedOpportunity(null)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--cf-muted)] hover:bg-[var(--cf-background)] hover:text-white transition"
              >
                <X size={20} />
              </button>

            </div>

            {/* Opportunity Details */}
            <div className="flex gap-6 mt-8">

              <div className="flex items-center gap-2 text-sm text-[var(--cf-muted)]">
                <MapPin size={17} />
                {selectedOpportunity.location}
              </div>

              <div className="flex items-center gap-2 text-sm text-[var(--cf-muted)]">
                <IndianRupee size={17} />
                {selectedOpportunity.salary}
              </div>

            </div>

            {/* Skills */}
            <div className="mt-8">

              <h3 className="text-sm font-semibold text-white">
                Required Skills
              </h3>

              <div className="flex flex-wrap gap-2 mt-3">

                {selectedOpportunity.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-[var(--cf-background)] border border-[var(--cf-border)] text-xs text-[var(--cf-muted)]"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* Description */}
            <div className="mt-8">

              <h3 className="text-sm font-semibold text-white">
                About this opportunity
              </h3>

              <p className="text-sm text-[var(--cf-muted)] leading-6 mt-3">
                This opportunity is suitable for students interested in
                building practical experience and developing skills relevant
                to the role. Review the requirements before applying.
              </p>

            </div>

            {/* Modal Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-5 border-t border-[var(--cf-border)]">

              <button
                onClick={() => setSelectedOpportunity(null)}
                className="px-4 py-2.5 rounded-lg border border-[var(--cf-border)] text-sm text-[var(--cf-muted)] hover:text-white hover:bg-[var(--cf-background)] transition"
              >
                Close
              </button>

              <button
                onClick={() => handleApply(selectedOpportunity)}
                  className="px-5 py-2.5 rounded-lg bg-[var(--cf-primary)] text-white text-sm font-medium hover:opacity-90 transition"
              > 
                Apply Now
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  )
}

export default Opportunities