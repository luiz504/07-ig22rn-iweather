import { CityProps } from '@services/getCityByNameService'
import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from './cityStorage'
const newCity: CityProps = {
  id: '1',
  name: 'Brasilia',
  latitude: -15,
  longitude: -47,
}
describe('Storage: CityStorage', () => {
  describe('getStorageCity', () => {
    it('should return null when there is no city stored ', async () => {
      const response = await getStorageCity()

      expect(response).toBeNull()
    })

    it('should return the city stored', async () => {
      // Preparing
      await saveStorageCity(newCity)

      // Act
      const response = await getStorageCity()

      // Assert
      expect(response).toEqual(newCity)
    })
  })
  describe('saveStorageCity', () => {
    it('should save the city', async () => {
      // ACT
      await saveStorageCity(newCity)

      // Assert
      const response = await getStorageCity()
      expect(response).toEqual(newCity)
    })
  })

  describe('removeStorageCity', () => {
    it('should remove the city stored', async () => {
      // Preparing
      await saveStorageCity(newCity)

      // ACT
      await removeStorageCity()

      // Assert
      const response = await getStorageCity()
      expect(response).toBeNull()
    })
  })
})
