import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mock-weather-api-response'
import { render, screen, waitFor } from '@__tests__/utils/customRender'
import { api } from '@services/api'
import { Dashboard } from '.'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'

const city = {
  id: '1',
  latitude: 0,
  longitude: 0,
  name: 'California, CA',
}
describe('Screen: Dashboard', () => {
  it('should show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })
    await saveStorageCity(city)

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/california/i))
    expect(cityName).toBeTruthy()
  })
})
