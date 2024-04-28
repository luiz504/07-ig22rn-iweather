import {
  View,
  TextInput,
  TextInputProps,
  ActivityIndicator,
} from 'react-native'

import { styles } from './styles'
import { theme } from '@styles/theme'

type Props = TextInputProps & {
  isLoading?: boolean
  activityTestId?: string
}

export function Input({ isLoading = false, activityTestId, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.gray_400}
        {...rest}
      />

      {isLoading && (
        <ActivityIndicator
          testID={activityTestId}
          color={theme.colors.blue_light}
        />
      )}
    </View>
  )
}
