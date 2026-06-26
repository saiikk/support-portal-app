import { renderHook, waitFor } from '@testing-library/react'
import { useAuth } from '../hooks/useAuth'

// authApi モジュール全体をモックに差し替える
vi.mock('../api/auth', () => ({
  authApi: {
    me: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  },
}))

import { authApi } from '../api/auth'

// 各テスト前に localStorage と mock をリセット
beforeEach(() => {
  localStorage.clear()
  vi.clearAllMocks()
})

describe('useAuth', () => {
  it('トークンがない場合、isLoggedIn は false', async () => {
    const { result } = renderHook(() => useAuth())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.isLoggedIn).toBe(false)
    expect(result.current.user).toBeNull()
  })

  it('有効なトークンがある場合、ユーザー情報が取得される', async () => {
    const mockUser = { id: 1, name: 'テスト', email: 'test@example.com' }
    vi.mocked(authApi.me).mockResolvedValue(mockUser)
    localStorage.setItem('auth_token', 'valid-token')

    const { result } = renderHook(() => useAuth())

    await waitFor(() => {
      expect(result.current.isLoggedIn).toBe(true)
    })

    expect(result.current.user).toEqual(mockUser)
  })

  it('トークンが無効な場合、isLoggedIn は false', async () => {
    vi.mocked(authApi.me).mockRejectedValue(new Error('401'))
    localStorage.setItem('auth_token', 'invalid-token')

    const { result } = renderHook(() => useAuth())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.isLoggedIn).toBe(false)
  })
})