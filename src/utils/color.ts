import tw from 'twin.macro';

export enum COLOR {
  'BlueChill' = 'blue-chill',
  'BlueGem' = 'blue-gem',
  'ButteredRum' = 'buttered-rum',
  'Christi' = 'christi',
  'Gray' = 'gray',
  'JazzberryJam' = 'jazzberry-jam',
  'Red' = 'red',
  'Rust' = 'rust',
}

export type OptionalColorType = {
  color?: COLOR;
};

export type ColorType = {
  color: COLOR;
};

export const getBackgroundColor = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`bg-red-100`;
    case COLOR.Rust:
      return tw`bg-rust-100`;
    case COLOR.ButteredRum:
      return tw`bg-buttered-rum-100`;
    case COLOR.Christi:
      return tw`bg-christi-100`;
    case COLOR.BlueGem:
      return tw`bg-blue-gem-100`;
    case COLOR.JazzberryJam:
      return tw`bg-jazzberry-jam-100`;
    case COLOR.BlueChill:
      return tw`bg-blue-chill-100`;
    default:
      return tw`bg-gray-100`;
  }
};

export const getLightBackgroundColor = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`bg-red-50/20`;
    case COLOR.Rust:
      return tw`bg-rust-50/20`;
    case COLOR.ButteredRum:
      return tw`bg-buttered-rum-50/20`;
    case COLOR.Christi:
      return tw`bg-christi-50/20`;
    case COLOR.BlueGem:
      return tw`bg-blue-gem-50/20`;
    case COLOR.JazzberryJam:
      return tw`bg-jazzberry-jam-50/20`;
    case COLOR.BlueChill:
      return tw`bg-blue-chill-50/20`;
    default:
      return tw`bg-gray-50/20`;
  }
};

export const getBorderColor = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`border-red-300`;
    case COLOR.Rust:
      return tw`border-rust-300`;
    case COLOR.ButteredRum:
      return tw`border-buttered-rum-300`;
    case COLOR.Christi:
      return tw`border-christi-300`;
    case COLOR.BlueGem:
      return tw`border-blue-gem-300`;
    case COLOR.JazzberryJam:
      return tw`border-jazzberry-jam-300`;
    case COLOR.BlueChill:
      return tw`border-blue-chill-300`;
    default:
      return tw`border-gray-950`;
  }
};

export const getLightBorderColor = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`border-red-100`;
    case COLOR.Rust:
      return tw`border-rust-100`;
    case COLOR.ButteredRum:
      return tw`border-buttered-rum-100`;
    case COLOR.Christi:
      return tw`border-christi-100`;
    case COLOR.BlueGem:
      return tw`border-blue-gem-100`;
    case COLOR.JazzberryJam:
      return tw`border-jazzberry-jam-100`;
    case COLOR.BlueChill:
      return tw`border-blue-chill-100`;
    default:
      return tw`border-gray-100`;
  }
};

export const getTextColor = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`text-red-600`;
    case COLOR.Rust:
      return tw`text-rust-600`;
    case COLOR.ButteredRum:
      return tw`text-buttered-rum-800`;
    case COLOR.Christi:
      return tw`text-christi-600`;
    case COLOR.BlueGem:
      return tw`text-blue-gem-600`;
    case COLOR.JazzberryJam:
      return tw`text-jazzberry-jam-600`;
    case COLOR.BlueChill:
      return tw`text-blue-chill-600`;
    default:
      return tw`text-gray-950`;
  }
};

export const getDarkTextColor = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`text-red-900`;
    case COLOR.Rust:
      return tw`text-rust-900`;
    case COLOR.ButteredRum:
      return tw`text-buttered-rum-900`;
    case COLOR.Christi:
      return tw`text-christi-900`;
    case COLOR.BlueGem:
      return tw`text-blue-gem-900`;
    case COLOR.JazzberryJam:
      return tw`text-jazzberry-jam-900`;
    case COLOR.BlueChill:
      return tw`text-blue-chill-900`;
    default:
      return tw`text-gray-900`;
  }
};

export const colors: Record<string, Record<number, string>> = {
  red: {
    50: '#fff0f0',
    100: '#ffdede',
    200: '#ffc3c3',
    300: '#ff9a9a',
    400: '#ff6060',
    500: '#ff2f2f',
    600: '#ed0c0c',
    700: '#cd0808',
    800: '#a90b0b',
    900: '#8b1111',
    950: '#4c0303',
  },
  rust: {
    50: '#fff8ec',
    100: '#ffeed4',
    200: '#ffdaa8',
    300: '#ffbe70',
    400: '#ff9736',
    500: '#ff790f',
    600: '#f05d06',
    700: '#c74507',
    800: '#a93a0f',
    900: '#7f2e0f',
    950: '#451505',
  },
  'buttered-rum': {
    50: '#fdfde9',
    100: '#fafbc6',
    200: '#f9f68f',
    300: '#f5ea4f',
    400: '#f0d91f',
    500: '#e0c112',
    600: '#c1970d',
    700: '#a9780f',
    800: '#805713',
    900: '#6d4716',
    950: '#3f2509',
  },
  christi: {
    50: '#f0fee7',
    100: '#ddfccb',
    200: '#bdf89e',
    300: '#93f165',
    400: '#6ee437',
    500: '#4dca18',
    600: '#3aa90f',
    700: '#2c7b10',
    800: '#276113',
    900: '#235215',
    950: '#0d2e05',
  },
  'blue-chill': {
    50: '#f0fdfc',
    100: '#cbfcf9',
    200: '#97f8f3',
    300: '#5bedeb',
    400: '#2ad3d7',
    500: '#0fa4a9',
    600: '#0a9097',
    700: '#0d7178',
    800: '#0f5a60',
    900: '#124a4f',
    950: '#032b30',
  },
  'blue-gem': {
    50: '#f5f2ff',
    100: '#ede6ff',
    200: '#ddd1ff',
    300: '#c5acff',
    400: '#aa7eff',
    500: '#9249ff',
    600: '#8724ff',
    700: '#7913ee',
    800: '#650fc8',
    900: '#570fa9',
    950: '#33066f',
  },
  'jazzberry-jam': {
    50: '#fef1fa',
    100: '#fde6f6',
    200: '#feccef',
    300: '#fea3e2',
    400: '#fc6acc',
    500: '#f63eb4',
    600: '#e61c94',
    700: '#c80e77',
    800: '#a90f64',
    900: '#8a1154',
    950: '#55022f',
  },
  gray: {
    50: '#fafafa',
    100: '#efefef',
    200: '#dcdcdc',
    300: '#bdbdbd',
    400: '#989898',
    500: '#7c7c7c',
    600: '#656565',
    700: '#525252',
    800: '#464646',
    900: '#3d3d3d',
    950: '#292929',
  },
};
