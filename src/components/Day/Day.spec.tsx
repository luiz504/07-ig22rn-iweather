import { render, screen } from '@testing-library/react-native'
import { Day } from '.'
import ClearDay from '@assets/clear_day.svg'

describe('Component: Day', () => {
  it('should be able to render the day', () => {
    render(
      <Day
        data={{
          day: '18/07',
          min: '20°',
          max: '30°',
          weather: 'Sunny',
          icon: () => <ClearDay testID="icon" />,
        }}
      />,
    )
    expect(screen.getByText('18/07')).toBeTruthy()
    expect(screen.getByText('20°')).toBeTruthy()
    expect(screen.getByText('30°')).toBeTruthy()
    expect(screen.getByTestId('icon')).toBeTruthy()
  })
})
