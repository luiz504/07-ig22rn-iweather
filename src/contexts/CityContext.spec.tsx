import { useCity } from '@hooks/useCity'
import { act, renderHook, waitFor } from '@testing-library/react-native'
import { CityProvider } from './CityContext'

describe('Context: CityContext', () => {
  it('should provide cityIsLoading variable true when loading', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
    expect(result.current.cityIsLoading).toBe(true)

    await waitFor(() => expect(result.current.cityIsLoading).toBe(false))
  })
  it('should be able to change the city', async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })
    // wait for city to be async loaded
    await waitFor(() => expect(result.current.city).toBeNull())

    const newCity = {
      id: '1',
      latitude: 0,
      longitude: 0,
      name: 'Cali',
    }

    await act(() => result.current.handleChanceCity(newCity))

    expect(result.current.city).toEqual(newCity)
  })
})
