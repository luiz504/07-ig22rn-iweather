import { render, screen, fireEvent } from '@testing-library/react-native'
import { SelectList, Props } from '.'

describe('Component: SelectList', () => {
  const data = [
    { id: '1', name: 'California', latitude: 90, longitude: 180 },
    { id: '2', name: 'Tokio', latitude: -90, longitude: -180 },
  ] satisfies Props['data']

  const onPress = jest.fn()
  it('should return the list item pressed', () => {
    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />)

    const optionToSelect = screen.getByText(/tokio/i)
    fireEvent.press(optionToSelect)

    expect(onPress).toHaveBeenCalledWith(data[1])
  })
  it('should no render options when data is empty', () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />)

    const optionsList = screen.queryAllByTestId(/option-item/i)

    expect(optionsList).toHaveLength(0)
  })
})
