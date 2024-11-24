import tw from 'twin.macro';

import { COLOR } from '@utils/color';

export const buttonContained = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`bg-red-100 hover:bg-red-200 focus:bg-red-200 active:bg-red-400`;
    case COLOR.Rust:
      return tw`bg-rust-100 hover:bg-rust-200 focus:bg-rust-200 active:bg-rust-400`;
    case COLOR.ButteredRum:
      return tw`bg-buttered-rum-100 hover:bg-buttered-rum-200 focus:bg-buttered-rum-200 active:bg-buttered-rum-400`;
    case COLOR.Christi:
      return tw`bg-christi-100 hover:bg-christi-200 focus:bg-christi-200 active:bg-christi-400`;
    case COLOR.BlueGem:
      return tw`bg-blue-gem-100 hover:bg-blue-gem-200 focus:bg-blue-gem-200 active:bg-blue-gem-400`;
    case COLOR.JazzberryJam:
      return tw`bg-jazzberry-jam-100 hover:bg-jazzberry-jam-200 focus:bg-jazzberry-jam-200 active:bg-jazzberry-jam-400`;
    case COLOR.BlueChill:
      return tw`bg-blue-chill-100 hover:bg-blue-chill-200 focus:bg-blue-chill-200 active:bg-blue-chill-400`;
    default:
      return tw`bg-gray-700 text-white hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-950`;
  }
};

export const buttonOutlined = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`border border-red-600 text-red-600 hover:bg-red-100 focus:bg-red-100 active:border-red-700 active:bg-red-200`;
    case COLOR.Rust:
      return tw`border border-rust-600 text-rust-600 hover:bg-rust-100 focus:bg-rust-100 active:border-rust-700 active:bg-rust-200`;
    case COLOR.ButteredRum:
      return tw`border border-buttered-rum-600 text-buttered-rum-800 hover:bg-buttered-rum-100 focus:bg-buttered-rum-100 active:border-buttered-rum-700 active:bg-buttered-rum-200`;
    case COLOR.Christi:
      return tw`border border-christi-600 text-christi-600 hover:bg-christi-100 focus:bg-christi-100 active:border-christi-700 active:bg-christi-200`;
    case COLOR.BlueGem:
      return tw`border border-blue-gem-600 text-blue-gem-600 hover:bg-blue-gem-100 focus:bg-blue-gem-100 active:border-blue-gem-700 active:bg-blue-gem-200`;
    case COLOR.JazzberryJam:
      return tw`border border-jazzberry-jam-600 text-jazzberry-jam-600 hover:bg-jazzberry-jam-100 focus:bg-jazzberry-jam-100 active:border-jazzberry-jam-700 active:bg-jazzberry-jam-200`;
    case COLOR.BlueChill:
      return tw`border border-blue-chill-600 text-blue-chill-600 hover:bg-blue-chill-100 focus:bg-blue-chill-100 active:border-blue-chill-700 active:bg-blue-chill-200`;
    default:
      return tw`border border-gray-900 text-gray-950 hover:bg-gray-100 focus:bg-gray-100 active:border-gray-950 active:bg-gray-200`;
  }
};

export const buttonText = (color: COLOR) => {
  switch (color) {
    case COLOR.Red:
      return tw`text-red-600 hover:bg-red-50 focus:bg-red-50 active:bg-red-100`;
    case COLOR.Rust:
      return tw`text-rust-600 hover:bg-rust-50 focus:bg-rust-50 active:bg-rust-100`;
    case COLOR.ButteredRum:
      return tw`text-buttered-rum-800 hover:bg-buttered-rum-50 focus:bg-buttered-rum-50 active:bg-buttered-rum-100`;
    case COLOR.Christi:
      return tw`text-christi-600 hover:bg-christi-50 focus:bg-christi-50 active:bg-christi-100`;
    case COLOR.BlueGem:
      return tw`text-blue-gem-600 hover:bg-blue-gem-50 focus:bg-blue-gem-50 active:bg-blue-gem-100`;
    case COLOR.JazzberryJam:
      return tw`text-jazzberry-jam-600 hover:bg-jazzberry-jam-50 focus:bg-jazzberry-jam-50 active:bg-jazzberry-jam-100`;
    case COLOR.BlueChill:
      return tw`text-blue-chill-600 hover:bg-blue-chill-50 focus:bg-blue-chill-50 active:bg-blue-chill-100`;
    default:
      return tw`text-gray-950 hover:bg-gray-50 focus:bg-gray-50 active:bg-gray-100`;
  }
};
