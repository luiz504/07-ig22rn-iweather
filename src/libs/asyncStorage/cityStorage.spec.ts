import { CityProps } from '@services/getCityByNameService'
import { getStorageCity, saveStorageCity } from './cityStorage'

describe('Storage: CityStorage', () => {
  describe('getStorageCity', () => {
    it('should return null when there is no city stored ', async () => {
      const response = await getStorageCity()

      expect(response).toBeNull()
    })

    it('should return the city stored', async () => {
      // Preparing
      const newCity: CityProps = {
        id: '1',
        name: 'Brasilia',
        latitude: -15,
        longitude: -47,
      }

      await saveStorageCity(newCity)

      // Act
      const response = await getStorageCity()

      // Assert
      expect(response).toEqual(newCity)
    })
  })
})
