// Only khaled can edit this fileeee
import React from 'react'

const MOCK_STATS = {
  totalUsers: 46,
  admins: 8,
  customers: 34,
  verified: 18,
}

const STAT_ITEMS = [
  {
    key: 'totalUsers',
    label: 'Total Users',
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    key: 'admins',
    label: 'Admins',
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9.5 12 1.6 1.6 3.8-4" />
      </>
    ),
  },
  {
    key: 'customers',
    label: 'Customers',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M21 8v6" />
        <path d="M24 11h-6" />
      </>
    ),
  },
  {
    key: 'verified',
    label: 'Verified',
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="m17 11 2 2 4-4" />
      </>
    ),
  },
]

function getErrorMessage(error) {
  if (!error) return ''
  if (typeof error === 'string') return error
  return error.message || 'Unable to load user stats.'
}

function formatStat(value) {
  const numberValue = Number(value)

  if (!Number.isFinite(numberValue)) {
    return value ?? 0
  }

  return new Intl.NumberFormat('en-US').format(numberValue)
}

function UsersIcon({ children }) {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

function UsersStatsCard({ stats, loading = false, error = null }) {
  const statValues = {
    totalUsers: stats?.totalUsers ?? MOCK_STATS.totalUsers,
    admins: stats?.admins ?? MOCK_STATS.admins,
    customers: stats?.customers ?? MOCK_STATS.customers,
    verified: stats?.verified ?? MOCK_STATS.verified,
  }

  return (
    <section className="mx-auto w-full max-w-3xl">
      {error ? (
        <div className="mb-3 rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {getErrorMessage(error)}
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {STAT_ITEMS.map((item) => (
          <article
            key={item.key}
            className="flex min-h-16 items-center justify-between gap-4 rounded-xl border border-slate-700/40 bg-[#111827] px-4 py-3 shadow-sm transition duration-200 hover:border-cyan-400/30 hover:bg-[#142033]"
          >
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-slate-500">{item.label}</p>
              {loading ? (
                <div className="mt-2 h-5 w-12 animate-pulse rounded bg-slate-700/70" />
              ) : (
                <p className="mt-1 text-xl font-bold leading-none text-white">
                  {formatStat(statValues[item.key])}
                </p>
              )}
            </div>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-lg shadow-cyan-500/20">
              <UsersIcon>{item.icon}</UsersIcon>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default UsersStatsCard
