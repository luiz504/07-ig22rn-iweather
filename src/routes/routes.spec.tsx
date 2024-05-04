import { render, screen, waitFor } from '@__tests__/utils/customRender'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mock-weather-api-response'
import { api } from '@services/api'

import { Routes } from '.'

describe('Routes', () => {
  it('should be rendered Search Screen when a city is not selected', async () => {
    render(<Routes />)

    const searchScreen = await waitFor(() =>
      screen.findByTestId('search-screen'),
    )

    expect(searchScreen).toBeTruthy()
  })
  it('should be rendered Dashboard Screen when a city is selected', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })
    await saveStorageCity({ id: '1', latitude: 0, longitude: 0, name: 'Cali' })

    render(<Routes />)

    const dashboardScreen = await waitFor(() =>
      screen.findByTestId('dashboard-screen'),
    )

    expect(dashboardScreen).toBeTruthy()
  })
})
