import React, { useCallback, useEffect, useMemo, useState } from 'react'
import UsersHeader from '../components/users/header'
import UsersStatsCard from '../components/users/statsCard'
import UsersList from '../components/users/usersList'
import api from '../lib/api'

const USERS_ENDPOINT = 'https://e-commerce-api-3wara.vercel.app/users/all'

function getApiErrorMessage(error) {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.message ||
    'Unable to load users.'
  )
}

function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState("")


   const filteredUsers = useMemo(() => {
    return users?.filter((u)=> 
    u.username?.toLowerCase().includes(search.toLowerCase()) || u.email?.toLowerCase().includes(search.toLowerCase())
    )
  },[users,search])


  const fetchUsers = useCallback(async () => {
    setLoading(true)
    setError('')

    try {
      const response = await api.get(USERS_ENDPOINT, { withCredentials: true })
      const data = response.data

      if (!data?.success) {
        throw new Error(data?.message || 'Unable to load users.')
      }

      setUsers(Array.isArray(data.users) ? data.users : [])
    } catch (err) {
      setUsers([])
      setError(getApiErrorMessage(err))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const stats = useMemo(() => {
    return users.reduce(
      (totals, user) => {
        const role = String(user?.role || '').toLowerCase()

        totals.totalUsers += 1
        if (role === 'admin') totals.admins += 1
        if (role === 'customer') totals.customers += 1
        if (user?.isVerified || user?.verified) totals.verified += 1

        return totals
      },
      {
        totalUsers: 0,
        admins: 0,
        customers: 0,
        verified: 0,
      },
    )
  }, [users])

  const handleDeleteUser = async (user) => {
    const userId = user?._id || user?.id

    if (!userId) {
      throw new Error('User id is missing.')
    }

    const response = await api.delete(`/users/${userId}`, { withCredentials: true })
    const data = response.data

    if (!data?.success) {
      throw new Error(data?.message || 'Unable to delete user.')
    }

    setUsers((currentUsers) =>
      currentUsers.filter((currentUser) => (currentUser?._id || currentUser?.id) !== userId),
    )

    return data
  }

  const handleEditUser = async (user, updates) => {
    const userId = user?._id || user?.id

    if (!userId) {
      throw new Error('User id is missing.')
    }

    const payload = {
      username: updates.username,
      phone: updates.phone,
    }

    if (updates.avatar) {
      payload.avatar = updates.avatar
    }

    const response = await api.patch(`/users/${userId}`, payload, { withCredentials: true })
    const data = response.data

    if (!data?.success) {
      throw new Error(data?.message || 'Unable to update user.')
    }

    if (data.user) {
      setUsers((currentUsers) =>
        currentUsers.map((currentUser) =>
          (currentUser?._id || currentUser?.id) === userId ? data.user : currentUser,
        ),
      )
    }

    return data.user
  }

  const hasNoUsers = !loading && !error && users.length === 0

  return (
    <div className="pb-10">
      <UsersHeader setSearch={setSearch}/>

      <div className="mx-3 mt-6 space-y-6 md:mx-auto md:max-w-3xl">
        <UsersStatsCard stats={stats} loading={loading} />

        {error ? (
          <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-100">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>{error}</p>
              <button
                type="button"
                onClick={fetchUsers}
                className="w-fit rounded-lg border border-red-300/30 px-4 py-2 font-semibold text-red-50 transition hover:bg-red-400/10"
              >
                Retry
              </button>
            </div>
          </div>
        ) : null}

        {hasNoUsers ? (
          <div className="rounded-2xl border border-slate-700/35 bg-[#111827] px-4 py-10 text-center shadow-xl shadow-black/10">
            <p className="text-sm font-semibold text-slate-100">No users found</p>
            <p className="mt-1 text-xs text-slate-500">The API returned an empty users list.</p>
          </div>
        ) : null}

        {!error && !hasNoUsers ? (
          <UsersList
            users={filteredUsers}
            loading={loading}
            error=""
            onEditUser={handleEditUser}
            onDeleteUser={handleDeleteUser}
          />
        ) : null}
      </div>
    </div>
  )
}

export default UsersPage
