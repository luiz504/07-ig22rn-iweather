import { ActivityIndicator, View } from 'react-native'

import { styles } from './styles'
import { theme } from '@styles/theme'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof View>
export function Loading(props: Props) {
  return (
    <View style={styles.container} {...props}>
      <ActivityIndicator color={theme.colors.blue_light} />
    </View>
  )
}
