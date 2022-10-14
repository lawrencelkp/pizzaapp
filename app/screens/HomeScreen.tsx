import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, ImageBackground } from "react-native"
import { Screen, Text } from "../components"
import { spacing } from "../theme"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"

interface HomeItem {
  title: string
  description: string
  backgroundImage: string
  linkText: string
  linkTarget: string
}

const homeItems: HomeItem[] = [
  {
    title: "Enter",
    description: "Scan LeaveHomeSafe QR Code to record a visit",
    backgroundImage: null,
    linkText: 'Click here to "Enter"',
    linkTarget: null,
  },
  {
    title: "Gen on",
    description: "Scan the taxi registration mark plate placed on the door",
    backgroundImage: null,
    linkText: 'Click here to "Get On"',
    linkTarget: null,
  },
  {
    title: "PCR Testing Registration Code",
    description: "Testing Centre Quick Widget",
    backgroundImage: null,
    linkText: 'Click here to "Enter"',
    linkTarget: null,
  },
  {
    title: "Upload visit record for epidemiological investigation",
    description:
      "When needed, staff from the Centre for Health Protection will contact and require you to share your visit record through this function for epidemiological investigation purposes.",
    backgroundImage: null,
    linkText: 'Click here to "Report"',
    linkTarget: null,
  },
  {
    title: "Electronic Vaccination and Testing Record",
    description: "View electronic vaccination and testing Record",
    backgroundImage: null,
    linkText: 'Click here to "Enter"',
    linkTarget: null,
  },
  {
    title: "Hong Kong Health Code System",
    description: "Connect to Hong Kong Health Code System",
    backgroundImage: null,
    linkText: 'Click here to "Enter"',
    linkTarget: null,
  },
]

const image = { uri: "https://reactjs.org/logo-og.png" }

export const HomeScreen: FC<DemoTabScreenProps<"Home">> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Screen
        preset="scroll"
        contentContainerStyle={$container}
        safeAreaEdges={["top"]}
        backgroundColor="transparent"
      >
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Test" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text preset="heading" text="Home" style={$title} />
        <Text text="home" />
      </Screen>
    </ImageBackground>
  )
})

// const HomeBackground = function HomeBackground({ children }: { children: React.ReactNode }) {
//   return (
//     <View style={$outerContainer1}>
//       <View style={$outerContainer2}></View>
//       {children}
//     </View>
//   )
// }

const $outerContainer1: ViewStyle = {
  position: "absolute",
  backgroundColor: "red",
  width: "100%",
  height: "100%",
}

const $outerContainer2: ViewStyle = {
  top: "50%",
  backgroundColor: "yellow",
  width: "100%",
  height: "100%",
  borderRadius: 1000,
}

const $container: ViewStyle = {
  paddingTop: spacing.large + spacing.extraLarge,
  paddingHorizontal: spacing.large,
}

const $title: TextStyle = {
  marginBottom: spacing.small,
  color: "red",
}
