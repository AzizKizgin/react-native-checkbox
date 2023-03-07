<!-- @format -->

# react-native-checkbox

react-native-checkbox is a simple and customizable checkbox component for react native.

## Installation

```bash
npm install @aziz_kizgin/react-native-checkbox
or
yarn add @aziz_kizgin/react-native-checkbox
```

## Usage

```javascript
import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "@aziz_kizgin/react-native-checkbox";
const App = () => {
  const [isChecked, setIsChecked] = useState(false);
  if (isChecked) {
    console.log("Checked");
  } else {
    console.log("Unchecked");
  }
  return (
    <View style={styles.container}>
      <CheckBox
        isChecked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        colorScheme='black'
        size={16}
        iconColor='#ffffff'
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

You can also give your own color to the checkbox. But make sure that the color is in hex format. For example: #5700af, #000000, #ffffff etc.

```javascript
<CheckBox
  isChecked={isChecked}
  onChange={() => setIsChecked(!isChecked)}
  customColor='#5700af'
/>
```

you can also give your own size to the checkbox. But make sure that the size is in number format. For example: 16, 20, 24 etc.

```javascript
<CheckBox
  isChecked={isChecked}
  onChange={() => setIsChecked(!isChecked)}
  customColor='#5700af'
  size={16}
/>
```

you can also give your own icon color to the checkbox. But make sure that the color is in hex format. For example: #5700af, #000000, #ffffff etc.

```javascript
<CheckBox
  isChecked={isChecked}
  onChange={() => setIsChecked(!isChecked)}
  customColor='#5700af'
  size={16}
  iconColor='#ffffff'
/>
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
