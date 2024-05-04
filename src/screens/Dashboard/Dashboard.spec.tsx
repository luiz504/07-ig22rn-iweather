import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mock-weather-api-response'
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@__tests__/utils/customRender'
import { api } from '@services/api'
import { Dashboard } from '.'
import { saveStorageCity } from '@libs/asyncStorage/cityStorage'
import { mockCityAPIResponse } from '@__tests__/mocks/api/mock-city-api-response'

const city = {
  id: '1',
  latitude: 0,
  longitude: 0,
  name: 'California, CA',
}
describe('Screen: Dashboard', () => {
  beforeEach(async () => {
    await saveStorageCity(city)
  })
  it('should show city weather', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    const cityName = await waitFor(() => screen.findByText(/california/i))
    expect(cityName).toBeTruthy()
  })
  it('should show another selected city weather', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
      .mockResolvedValueOnce({ data: mockCityAPIResponse })
      .mockResolvedValueOnce({ data: mockWeatherAPIResponse })

    render(<Dashboard />)

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId('dashboard-loading'),
    )

    const cityName = 'Brasilia'

    const search = screen.getByTestId('select-list-search-input')
    fireEvent.changeText(search, cityName)

    const optionBtn = await waitFor(() =>
      screen.findByText(cityName, { exact: false }),
    )

    fireEvent.press(optionBtn)

    const weatherTodayCity = await screen.findByTestId('weather-today-city')
    expect(weatherTodayCity.props.children).toContain(cityName)
  })
})
