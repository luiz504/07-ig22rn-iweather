import { render, screen, waitFor } from '@__tests__/utils/customRender'
import { Routes } from '.'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'

describe('Routes', () => {
  it('should be rendered Search Screen when a city is not selected', async () => {
    render(<Routes />)

    const searchScreen = await waitFor(() =>
      screen.findByTestId('search-screen'),
    )

    expect(searchScreen).toBeTruthy()
  })
  it('should be rendered Dashboard Screen when a city is selected', async () => {
    await saveStorageCity({ id: '1', latitude: 0, longitude: 0, name: 'Cali' })
    render(<Routes />)

    const dashboardScreen = await waitFor(() =>
      screen.findByTestId('dashboard-loading'),
    )

    expect(dashboardScreen).toBeTruthy()
  })
})
