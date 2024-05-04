import { useContext } from 'react'

import { CityContext } from '@contexts/CityContext'

export function useCity() {
  const context = useContext(CityContext)

  if (!Object.keys(context).length) {
    throw new Error('useCity must be used within an CityProvider')
  }

  return context
}
