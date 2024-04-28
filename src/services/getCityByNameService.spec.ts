import { mockCityAPIResponse } from '@__tests__/mocks/mock-city-api-response'
import { api } from './api'
import { getCityByNameService } from './getCityByNameService'

describe('API: getCityByNameService', () => {
  it('should return city details formatted', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse })

    const response = await getCityByNameService('Brasilia')
    expect(response.length).toBeGreaterThan(0)
  })
})
