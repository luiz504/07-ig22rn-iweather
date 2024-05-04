import { render, screen, waitFor } from '@testing-library/react-native'
import { Routes } from '.'
import { CityProvider } from '@contexts/CityContext'

describe('Routes', () => {
  it('should be renderer Search Screen when a city is not selected', async () => {
    render(<Routes />, { wrapper: CityProvider })

    const searchScreen = await waitFor(() =>
      screen.findByTestId('search-screen'),
    )

    expect(searchScreen).toBeTruthy()
  })
})
