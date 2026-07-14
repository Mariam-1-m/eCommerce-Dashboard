// Only khaled can edit this file........eee
import React, { useEffect, useMemo, useState } from 'react'

const MOCK_USERS = [
  {
    id: 'usr-301',
    name: 'Mariam Selim',
    email: 'mariam.selim@example.com',
    role: 'customer',
    verified: true,
  },
  {
    id: 'usr-302',
    firstName: 'Youssef',
    lastName: 'Nabil',
    email: 'youssef.nabil@example.com',
    role: 'customer',
    isVerified: false,
  },
  {
    id: 'usr-303',
    name: 'Leila Morgan',
    email: 'leila.morgan@example.com',
    role: 'admin',
    verified: true,
  },
  {
    id: 'usr-304',
    name: 'Omar Haddad',
    email: 'omar.haddad@example.com',
    role: 'customer',
    verified: false,
  },
  {
    id: 'usr-305',
    firstName: 'Nadine',
    lastName: 'Kamal',
    email: 'nadine.kamal@example.com',
    role: 'support',
    isVerified: true,
  },
  {
    id: 'usr-306',
    name: 'Karim Younes',
    email: 'karim.younes@example.com',
    role: 'customer',
    verified: false,
  },
  {
    id: 'usr-307',
    name: 'Hana Lewis',
    email: 'hana.lewis@example.com',
    role: 'customer',
    verified: true,
  },
  {
    id: 'usr-308',
    firstName: 'Tarek',
    lastName: 'Mansour',
    email: 'tarek.mansour@example.com',
    role: 'admin',
    isVerified: false,
  },
  {
    id: 'usr-309',
    name: 'Salma Reed',
    email: 'salma.reed@example.com',
    role: 'customer',
    verified: false,
  },
  {
    id: 'usr-310',
    name: 'Adam Shaw',
    email: 'adam.shaw@example.com',
    role: 'manager',
    verified: true,
  },
  {
    id: 'usr-311',
    firstName: 'Farah',
    lastName: 'Osman',
    email: 'farah.osman@example.com',
    role: 'customer',
    isVerified: false,
  },
  {
    id: 'usr-312',
    name: 'Noah Grant',
    email: 'noah.grant@example.com',
    role: 'support',
    verified: true,
  },
]

function getUserName(user) {
  if (user?.name) return user.name
  if (user?.username) return user.username

  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ').trim()
  return fullName || 'Unknown user'
}

function getUserVerified(user) {
  return Boolean(user?.verified ?? user?.isVerified)
}

function normalizeUser(user, index = 0) {
  const name = getUserName(user)

  return {
    id: user?.id ?? user?._id ?? user?.email ?? `${name}-${index}`,
    name,
    username: user?.username || name,
    email: user?.email || 'No email provided',
    phone: user?.phone || '',
    role: user?.role || 'customer',
    verified: getUserVerified(user),
    avatar: user?.avatar || '',
    raw: user,
  }
}

function IconButton({ label, className, children, onClick, disabled = false }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`flex h-7 w-7 items-center justify-center rounded-full text-white shadow-sm transition duration-200 hover:-translate-y-0.5 focus:ring-2 focus:ring-cyan-400/40 disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 ${className}`}
    >
      {children}
    </button>
  )
}

function UserAvatar({ user }) {
  if (user.avatar) {
    return (
      <img
        src={user.avatar}
        alt=""
        className="h-9 w-9 rounded-full border border-slate-600 object-cover"
      />
    )
  }

  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-300 text-slate-700">
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
        <path d="M4 21a8 8 0 1 1 16 0H4Z" />
      </svg>
    </div>
  )
}

function PencilIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <path d="m19 6-1 14H6L5 6" />
      <path d="M10 11v5M14 11v5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function StatusIcon({ verified }) {
  if (verified) {
    return (
      <svg className="h-3.5 w-3.5 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m5 12 4 4L19 6" />
      </svg>
    )
  }

  return (
    <svg className="h-3.5 w-3.5 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

function getRoleClasses(role) {
  const normalizedRole = role.toLowerCase()

  if (normalizedRole === 'admin') {
    return 'bg-purple-500/20 dark:text-purple-300 text-gray-800'
  }

  if (normalizedRole === 'manager') {
    return 'bg-fuchsia-500/20 dark:text-fuchsia-300 text-gray-800'
  }

  if (normalizedRole === 'support') {
    return 'bg-amber-500/20 dark:text-amber-300 text-gray-800'
  }

  return 'bg-cyan-500/15 dark:text-cyan-300 text-gray-800'
}

function getErrorMessage(error) {
  if (!error) return ''
  if (typeof error === 'string') return error
  return error.message || 'Unable to load users.'
}

function getNextRole(role) {
  const normalizedRole = role.toLowerCase()

  if (normalizedRole === 'customer') return 'admin'
  if (normalizedRole === 'admin') return 'customer'
  return null
}

function getRoleToggleTitle(user, currentUserId) {
  const nextRole = getNextRole(user.role)

  if (!nextRole) {
    return 'Only admin and customer roles can be toggled'
  }

  if (user.id === currentUserId && user.role.toLowerCase() === 'admin' && nextRole === 'customer') {
    return 'You cannot demote your own admin account'
  }

  return nextRole === 'admin' ? 'Promote to admin' : 'Change to customer'
}

function UsersList({
  users,
  loading = false,
  error = null,
  onEditUser,
  onDeleteUser,
  onToggleRole,
  currentUserId,
}) {
  const [localUsers, setLocalUsers] = useState(() => (Array.isArray(users) ? users : MOCK_USERS))
  const [editingUser, setEditingUser] = useState(null)
  const [editForm, setEditForm] = useState({ username: '', phone: '', avatar: '' })
  const [actionError, setActionError] = useState('')
  const [actionSuccess, setActionSuccess] = useState('')
  const [savingEdit, setSavingEdit] = useState(false)
  const [deletingUserId, setDeletingUserId] = useState(null)
  const [roleUpdatingUserId, setRoleUpdatingUserId] = useState(null)

  useEffect(() => {
    setLocalUsers(Array.isArray(users) ? users : MOCK_USERS)
  }, [users])

  const normalizedUsers = useMemo(
    () => localUsers.map((user, index) => normalizeUser(user, index)),
    [localUsers],
  )

  const updateUser = (targetUser, nextFields) => {
    const updatedUser = {
      ...targetUser.raw,
      name: nextFields.username ?? targetUser.name,
      username: nextFields.username ?? targetUser.username,
      phone: nextFields.phone ?? targetUser.phone,
      avatar: nextFields.avatar ?? targetUser.avatar,
      verified: nextFields.verified ?? targetUser.verified,
      isVerified: nextFields.verified ?? targetUser.verified,
    }

    setLocalUsers((currentUsers) =>
      currentUsers.map((user, index) =>
        normalizeUser(user, index).id === targetUser.id ? updatedUser : user,
      ),
    )

    return updatedUser
  }

  const handleOpenEdit = (user) => {
    setActionError('')
    setActionSuccess('')
    setEditingUser(user)
    setEditForm({
      username: user.username || user.name,
      phone: user.phone || '',
      avatar: user.avatar || '',
    })
  }

  const handleEditSubmit = async (event) => {
    event.preventDefault()
    if (!editingUser) return

    const nextFields = {
      username: editForm.username.trim() || editingUser.username || editingUser.name,
      phone: editForm.phone.trim(),
      avatar: editForm.avatar.trim(),
    }

    setSavingEdit(true)
    setActionError('')
    setActionSuccess('')

    try {
      const apiUser = onEditUser ? await onEditUser(editingUser.raw, nextFields) : null
      const updatedUser = apiUser || updateUser(editingUser, nextFields)

      if (apiUser) {
        setLocalUsers((currentUsers) =>
          currentUsers.map((user, index) =>
            normalizeUser(user, index).id === editingUser.id ? apiUser : user,
          ),
        )
      }

      setEditingUser(null)
      setActionSuccess('User updated successfully.')
      return updatedUser
    } catch (err) {
      setActionError(getErrorMessage(err))
      return null
    } finally {
      setSavingEdit(false)
    }
  }

  const handleDelete = async (user) => {
    const confirmed = typeof window === 'undefined' || window.confirm(`Delete ${user.name}?`)

    if (!confirmed) return

    setDeletingUserId(user.id)
    setActionError('')
    setActionSuccess('')

    try {
      if (onDeleteUser) {
        await onDeleteUser(user.raw)
      }

      setLocalUsers((currentUsers) =>
        currentUsers.filter((item, index) => normalizeUser(item, index).id !== user.id),
      )
      setActionSuccess('User deleted successfully.')
    } catch (err) {
      setActionError(getErrorMessage(err))
    } finally {
      setDeletingUserId(null)
    }
  }

  const handleRoleToggle = async (user) => {
    const nextRole = getNextRole(user.role)

    if (!nextRole) return

    if (user.id === currentUserId && user.role.toLowerCase() === 'admin' && nextRole === 'customer') {
      setActionError('You cannot demote your own admin account.')
      setActionSuccess('')
      return
    }

    setRoleUpdatingUserId(user.id)
    setActionError('')
    setActionSuccess('')

    try {
      if (!onToggleRole) {
        throw new Error('Role toggle action is not available.')
      }

      await onToggleRole(user.raw, nextRole)
      setActionSuccess(
        nextRole === 'admin'
          ? `${user.name} was promoted to admin.`
          : `${user.name} was changed to customer.`,
      )
    } catch (err) {
      setActionError(getErrorMessage(err))
    } finally {
      setRoleUpdatingUserId(null)
    }
  }

  return (
    <section className="mx-auto w-full max-w-3xl">
      {error ? (
        <div className="mb-3 rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {getErrorMessage(error)}
        </div>
      ) : null}

      {actionError ? (
        <div className="mb-3 rounded-lg border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {actionError}
        </div>
      ) : null}

      {actionSuccess ? (
        <div className="mb-3 rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {actionSuccess}
        </div>
      ) : null}

      <div className="hidden overflow-x-auto rounded-2xl shadow-xl shadow-black/20 sm:block">
        <div className="min-w-[620px] overflow-hidden rounded-2xl border border-slate-700/30 bg-[#0f172a]">
          <div className="grid grid-cols-[minmax(250px,1fr)_110px_130px_118px] items-center bg-[#1e293b] px-4 py-3 text-[11px] font-semibold text-slate-300">
            <span>User</span>
            <span>Role</span>
            <span>Verified</span>
            <span className="text-center">Actions</span>
          </div>

          {loading ? (
            <div className="divide-y divide-slate-700/40">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-[minmax(250px,1fr)_110px_130px_118px] items-center px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 animate-pulse rounded-full bg-slate-700" />
                    <div className="space-y-2">
                      <div className="h-3 w-24 animate-pulse rounded bg-slate-700" />
                      <div className="h-2.5 w-36 animate-pulse rounded bg-slate-800" />
                    </div>
                  </div>
                  <div className="h-5 w-16 animate-pulse rounded-full bg-slate-700" />
                  <div className="h-4 w-20 animate-pulse rounded bg-slate-700" />
                  <div className="mx-auto h-7 w-24 animate-pulse rounded-full bg-slate-700" />
                </div>
              ))}
            </div>
          ) : normalizedUsers.length ? (
            <div className="divide-y divide-slate-700/35">
              {normalizedUsers.map((user) => (
                <article
                  key={user.id}
                  className="grid grid-cols-[minmax(250px,1fr)_110px_130px_118px] items-center bg-white/90 dark:bg-[#111827] px-4 py-3 text-sm transition duration-200 hover:bg-gray-200 dark:hover:bg-[#182337]"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <UserAvatar user={user} />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold leading-5 text-gray-800 dark:text-slate-100">
                        {user.name}
                      </p>
                      <p className="truncate text-[11px] text-slate-500">{user.email}</p>
                    </div>
                  </div>

                  <div>
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold lowercase ${getRoleClasses(user.role)}`}>
                      {user.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <StatusIcon verified={user.verified} />
                    <span className={`text-[11px] font-medium ${user.verified ? 'text-lime-300' : 'text-slate-400'}`}>
                      {user.verified ? 'Verified' : 'No'}
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <IconButton
                      label={`Edit ${user.name}`}
                      className="bg-blue-500 hover:bg-blue-400"
                      onClick={() => handleOpenEdit(user)}
                    >
                      <PencilIcon />
                    </IconButton>
                    <IconButton
                      label={roleUpdatingUserId === user.id ? 'Updating role...' : getRoleToggleTitle(user, currentUserId)}
                      className="bg-emerald-500 hover:bg-emerald-500"
                      onClick={() => handleRoleToggle(user)}
                      disabled={
                        roleUpdatingUserId === user.id ||
                        !getNextRole(user.role) ||
                        (user.id === currentUserId &&
                          user.role.toLowerCase() === 'admin' &&
                          getNextRole(user.role) === 'customer')
                      }
                    >
                      <ShieldIcon />
                    </IconButton>
                    <IconButton
                      label={deletingUserId === user.id ? `Deleting ${user.name}` : `Delete ${user.name}`}
                      className="bg-red-500 hover:bg-red-400"
                      onClick={() => handleDelete(user)}
                      disabled={deletingUserId === user.id}
                    >
                      <TrashIcon />
                    </IconButton>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-[#111827] px-4 py-12 text-center">
              <p className="text-sm font-semibold text-slate-100">No users to display</p>
              <p className="mt-1 text-xs text-slate-500">Users passed from the API will appear here.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-3 grid gap-3 sm:hidden">
        {loading ? (
          [1, 2, 3].map((item) => (
            <div key={item} className="rounded-xl border border-slate-700/35 bg-[#111827] p-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 animate-pulse rounded-full bg-slate-700" />
                <div className="space-y-2">
                  <div className="h-3 w-28 animate-pulse rounded bg-slate-700" />
                  <div className="h-2.5 w-40 animate-pulse rounded bg-slate-800" />
                </div>
              </div>
            </div>
          ))
        ) : normalizedUsers.length ? (
          normalizedUsers.map((user) => (
            <article
              key={`mobile-${user.id}`}
              className="rounded-xl border border-slate-700/35 bg-[#111827] p-4 text-sm shadow-lg shadow-black/10"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <UserAvatar user={user} />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-slate-100">{user.name}</p>
                    <p className="truncate text-xs text-slate-500">{user.email}</p>
                  </div>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold lowercase ${getRoleClasses(user.role)}`}>
                  {user.role}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <StatusIcon verified={user.verified} />
                  <span className={`text-xs font-medium ${user.verified ? 'text-lime-300' : 'text-slate-400'}`}>
                    {user.verified ? 'Verified' : 'No'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IconButton label={`Edit ${user.name}`} className="bg-blue-500 hover:bg-blue-400" onClick={() => handleOpenEdit(user)}>
                    <PencilIcon />
                  </IconButton>
                  <IconButton
                    label={roleUpdatingUserId === user.id ? 'Updating role...' : getRoleToggleTitle(user, currentUserId)}
                    className="bg-emerald-500 hover:bg-emerald-500"
                    onClick={() => handleRoleToggle(user)}
                    disabled={
                      roleUpdatingUserId === user.id ||
                      !getNextRole(user.role) ||
                      (user.id === currentUserId &&
                        user.role.toLowerCase() === 'admin' &&
                        getNextRole(user.role) === 'customer')
                    }
                  >
                    <ShieldIcon />
                  </IconButton>
                  <IconButton
                    label={deletingUserId === user.id ? `Deleting ${user.name}` : `Delete ${user.name}`}
                    className="bg-red-500 hover:bg-red-400"
                    onClick={() => handleDelete(user)}
                    disabled={deletingUserId === user.id}
                  >
                    <TrashIcon />
                  </IconButton>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-xl border border-slate-700/35 bg-[#111827] px-4 py-10 text-center">
            <p className="text-sm font-semibold text-slate-100">No users to display</p>
            <p className="mt-1 text-xs text-slate-500">Users passed from the API will appear here.</p>
          </div>
        )}
      </div>

      {editingUser ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <form
            onSubmit={handleEditSubmit}
            className="w-full max-w-sm rounded-2xl border border-slate-700 bg-[#111827] p-5 text-slate-100 shadow-2xl shadow-black/40"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-base font-semibold">Edit user</h3>
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                aria-label="Close edit form"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:text-white"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-xs font-medium text-slate-300">
                Username
                <input
                  type="text"
                  value={editForm.username}
                  onChange={(event) => setEditForm((form) => ({ ...form, username: event.target.value }))}
                  className="h-10 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-cyan-400"
                />
              </label>

              <label className="grid gap-2 text-xs font-medium text-slate-300">
                Phone
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(event) => setEditForm((form) => ({ ...form, phone: event.target.value }))}
                  className="h-10 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-cyan-400"
                />
              </label>

              <label className="grid gap-2 text-xs font-medium text-slate-300">
                Avatar URL
                <input
                  type="url"
                  value={editForm.avatar}
                  onChange={(event) => setEditForm((form) => ({ ...form, avatar: event.target.value }))}
                  className="h-10 rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-white outline-none transition focus:border-cyan-400"
                />
              </label>
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={savingEdit}
                className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400"
              >
                {savingEdit ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </section>
  )
}

export default UsersList
