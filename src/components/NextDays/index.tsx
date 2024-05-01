import { ComponentProps } from 'react'
import { View } from 'react-native'

import { Day, DayProps } from '@components/Day'

import { styles } from './styles'

type Props = {
  data: DayProps[]
} & ComponentProps<typeof View>

export function NextDays({ data, ...rest }: Props) {
  return (
    <View style={[styles.container, rest.style]} {...rest}>
      {data.map((day) => (
        <Day key={day.day} data={day} />
      ))}
    </View>
  )
}
