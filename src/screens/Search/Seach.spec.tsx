import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@__tests__/utils/customRender'
import { Search } from '.'
import { api } from '@services/api'
import { mockCityAPIResponse } from '@__tests__/mocks/api/mock-city-api-response'

describe('Screen: Search', () => {
  it('Should show city options', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse })
    render(<Search />)

    const searchInput = screen.getByTestId('select-list-search-input')
    fireEvent.changeText(searchInput, 'BraS')

    const option = await waitFor(() => screen.findByText(/bras/i))
    expect(option).toBeTruthy()
  })
})
