import { render, screen } from '@testing-library/react-native'
import { Input } from '.'
describe('Component: Input', () => {
  it('should be able to render, isLoading "false|undefined"', () => {
    render(<Input testID="input" activityTestId="activity-indicator" />)

    expect(screen.getByTestId('input')).toBeTruthy()
    const activityIndicator = screen.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeNull()
  })
  it('should be able to render, isLoading "true"', () => {
    render(
      <Input testID="input" activityTestId="activity-indicator" isLoading />,
    )

    expect(screen.getByTestId('input')).toBeTruthy()
    expect(screen.getByTestId('activity-indicator')).toBeTruthy()
  })
})
