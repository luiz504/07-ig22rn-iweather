import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import { Input } from '@components/Input'
import { CityProps } from '@services/getCityByNameService'

export type Props = {
  isLoading?: boolean
  placeholder?: string
  value?: string
  data: CityProps[]
  onChange: (value: string) => void
  onPress: (value: CityProps) => void
}

export function SelectList(props: Props) {
  return (
    <View style={styles.container}>
      <Input
        placeholder={props.placeholder}
        onChangeText={props.onChange}
        isLoading={props.isLoading}
        value={props.value}
        testID="select-list-search-input"
      />

      <View style={styles.options} testID="options-list">
        {props.data.map((item) => (
          <TouchableOpacity
            key={item.latitude}
            activeOpacity={0.7}
            onPress={() => props.onPress(item)}
            testID={`option-item-${item.name}`}
          >
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
