import { render, screen } from '@testing-library/react-native'
import { NextDays } from '.'
import ClearDay from '@assets/clear_day.svg'

const data = [
  {
    day: '18/07',
    min: '18°',
    max: '28°',
    weather: 'Sunny',
    icon: () => <ClearDay testID="icon" />,
  },
  {
    day: '19/07',
    min: '19°',
    max: '29°',
    weather: 'Cloudy',
    icon: () => <ClearDay testID="icon" />,
  },
  {
    day: '20/07',
    min: '20°',
    max: '30°',
    weather: 'Sunny',
    icon: () => <ClearDay testID="icon" />,
  },
  {
    day: '21/07',
    min: '21°',
    max: '31°',
    weather: 'Sunny and Cloudy',
    icon: () => <ClearDay testID="icon" />,
  },
  {
    day: '22/07',
    min: '22°',
    max: '32°',
    weather: 'Sunny',
    icon: () => <ClearDay testID="icon" />,
  },
]
describe('Component: NextDays', () => {
  it('should be able to render', () => {
    render(<NextDays data={data} testID="next-days" />)

    expect(screen.getByTestId('next-days')).toBeTruthy()
    expect(screen.getAllByTestId('icon')).toHaveLength(5)
    expect(screen.getByText('22/07')).toBeTruthy()
  })
})
