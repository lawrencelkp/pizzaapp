import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text, TextField } from "../components"
import { spacing } from "../theme"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../models"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `FormA: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="FormA" component={FormAScreen} />`
// Hint: Look for the 🔥!

// REMOVE ME! ⬇️ This TS ignore will not be necessary after you've added the correct navigator param type
// @ts-ignore
export const FormAScreen: FC<StackScreenProps<AppStackScreenProps, "FormA">> = observer(
  function FormAScreen() {
    // Pull in one of our MST stores
    const {
      luckyNumberStore: { luckyNumber, setLuckyNumber },
    } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        preset="scroll"
        contentContainerStyle={$container}
        safeAreaEdges={["top"]}
        backgroundColor="transparent"
      >
        <Text text="formA" />
        <TextField
          value={luckyNumber}
          onChangeText={setLuckyNumber}
          autoCapitalize="none"
          autoCorrect={false}
          label="Lucky Number"
          placeholder="Input your lucky number"
        />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const $container: ViewStyle = {
  paddingTop: spacing.large + spacing.extraLarge,
  paddingHorizontal: spacing.large,
}
