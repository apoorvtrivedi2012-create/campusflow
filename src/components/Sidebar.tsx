import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  BriefcaseBusiness,
  ClipboardList,
  CalendarDays,
  UserCircle,
  BarChart3,
  FileText,
  Settings,
  CircleHelp,
} from 'lucide-react'

function Sidebar() {
  const workspaceLinks = [
    {
      name: 'Dashboard',
      path: '/',
      icon: LayoutDashboard,
    },
    {
      name: 'Opportunities',
      path: '/opportunities',
      icon: BriefcaseBusiness,
    },
    {
      name: 'Applications',
      path: '/applications',
      icon: ClipboardList,
    },
    {
      name: 'Interviews',
      path: '/interviews',
      icon: CalendarDays,
    },
  ]

  const careerLinks = [
    {
      name: 'Profile',
      path: '/profile',
      icon: UserCircle,
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: BarChart3,
    },
    {
      name: 'Resume',
      path: '/resume',
      icon: FileText,
    },
  ]

  const supportLinks = [
    {
      name: 'Settings',
      path: '/settings',
      icon: Settings,
    },
    {
      name: 'Help Center',
      path: '/help',
      icon: CircleHelp,
    },
  ]

  const renderLinks = (links: typeof workspaceLinks) => {
    return (
      <div className="space-y-1">
        {links.map((link) => {
          const Icon = link.icon

          return (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                  isActive
                    ? 'bg-[var(--cf-primary)] text-white'
                    : 'text-[var(--cf-muted)] hover:bg-[var(--cf-card)] hover:text-white'
                }`
              }
            >
              <Icon size={18} />

              <span className="text-sm font-medium">
                {link.name}
              </span>
            </NavLink>
          )
        })}
      </div>
    )
  }

  return (
    <aside className="w-64 min-h-screen bg-[var(--cf-sidebar)] border-r border-[var(--cf-border)] flex flex-col">

      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-[var(--cf-border)]">
        <div className="w-9 h-9 rounded-xl bg-[var(--cf-primary)] flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            C
          </span>
        </div>

        <span className="ml-3 text-xl font-bold text-white">
          CampusFlow
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">

        <p className="text-xs font-semibold text-[var(--cf-muted)] uppercase tracking-wider px-3 mb-3">
          Workspace
        </p>

        {renderLinks(workspaceLinks)}

        <p className="text-xs font-semibold text-[var(--cf-muted)] uppercase tracking-wider px-3 mb-3 mt-8">
          Career
        </p>

        {renderLinks(careerLinks)}

        <p className="text-xs font-semibold text-[var(--cf-muted)] uppercase tracking-wider px-3 mb-3 mt-8">
          Support
        </p>

        {renderLinks(supportLinks)}

      </nav>

      {/* User */}
      <div className="p-4 border-t border-[var(--cf-border)]">
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-[var(--cf-primary)] flex items-center justify-center text-white font-semibold">
            AT
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">
              Apoorv Trivedi
            </p>

            <p className="text-xs text-[var(--cf-muted)] truncate">
              Student
            </p>
          </div>

          <span className="text-[var(--cf-muted)]">
            •••
          </span>

        </div>
      </div>

    </aside>
  )
}

export default Sidebar