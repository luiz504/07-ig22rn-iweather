import { render, screen } from '@testing-library/react-native'
import { WeatherItem } from '.'
import DropIcon from '@assets/drop.svg'
describe('Component: WeatherItem', () => {
  it('should be able to render', () => {
    render(
      <WeatherItem
        icon={() => <DropIcon testID="drop-icon" />}
        title="Weather Title"
        value="30°"
      />,
    )
    expect(screen.getByTestId('drop-icon')).toBeTruthy()
    expect(screen.getByText('Weather Title')).toBeTruthy()
    expect(screen.getByText('30°')).toBeTruthy()
    expect(screen)
  })
})
