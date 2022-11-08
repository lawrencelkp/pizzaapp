import React, { FC, useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, ImageBackground, Dimensions, StyleSheet } from "react-native"
import { Button, Screen, Text } from "../components"
import { spacing } from "../theme"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../models"
import { Calendar, CalendarList, Agenda, DateData } from "react-native-calendars"
import solarlunar from "solarlunar"
import { LocaleConfig } from "react-native-calendars"

LocaleConfig.locales["cn"] = {
  monthNames: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  monthNamesShort: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  dayNames: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
  dayNamesShort: ["一", "二", "三", "四", "五", "六", "日"],
  today: "今天",
}
LocaleConfig.defaultLocale = "cn"

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

function calculateLunarDate(date: DateData): [String, String] {
  const solar2lunarData = solarlunar.solar2lunar(date.year, date.month, date.day)

  // console.tron.display({
  //   name: "calculateLunarDate",
  //   value: solar2lunarData,
  //   important: true,
  // })

  return [solar2lunarData.dayCn, solar2lunarData.gzDay]
}

export const HomeScreen: FC<DemoTabScreenProps<"Home">> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  const {
    luckyNumberStore: { luckyNumber, setLuckyNumber },
  } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  var today = new Date()

  // const [initDate, setInitDate] = useState(today)

  function parseDateToInitDate(date: Date): string {
    var dd = String(date.getDate()).padStart(2, "0")
    var mm = String(date.getMonth() + 1).padStart(2, "0") //January is 0!
    var yyyy = date.getFullYear()

    return yyyy + "-" + mm + "-" + dd
  }

  function addYear(num: number): void {
    console.tron.log("addYear called: " + num)

    // setInitDate((prev) => {
    //   var year = prev.getFullYear()
    //   var month = prev.getMonth()
    //   var day = prev.getDate()

    //   return new Date(year + 1, month, day)
    // })

    let prevDate = new Date(luckyNumber)
    let year = prevDate.getFullYear()
    let month = prevDate.getMonth()
    let day = prevDate.getDate()
    let newDate = new Date(year + 1, month, day)
    setLuckyNumber(parseDateToInitDate(newDate))
  }

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
        <Text text="Home" style={$title} />
        <Calendar
          // Specify style for calendar container element. Default = {}
          style={{
            borderWidth: 1,
            borderColor: "gray",
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            textSectionTitleDisabledColor: "#d9e1e8",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "blue",
            indicatorColor: "blue",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          dayComponent={({ date, state }) => {
            return (
              <View>
                <Text
                  style={[
                    styles.customDay,
                    state === "disabled" ? styles.disabledText : styles.defaultText,
                  ]}
                >
                  {date?.day}
                </Text>
                <Text
                  style={[
                    styles.customDay2,
                    state === "disabled" ? styles.disabledText : styles.defaultText,
                  ]}
                >
                  {calculateLunarDate(date)[0]}
                </Text>
              </View>
            )
          }}
          initialDate={luckyNumber}
        />
        <Button onPress={() => addYear(1)}>add year</Button>
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
  fontSize: 24,
  fontWeight: "bold",
  color: "white",
}

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "lightgrey",
    fontSize: 16,
  },
  disabledText: {
    color: "grey",
  },
  defaultText: {
    color: "purple",
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  customDay: {
    textAlign: "center",
  },
  customDay2: {
    textAlign: "center",
    fontSize: 10,
  },
  customDay3: {
    textAlign: "center",
    fontSize: 7,
  },
  customHeader: {
    backgroundColor: "#FCC",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00BBF2",
  },
})
