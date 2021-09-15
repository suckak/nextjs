import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secundaryColor: string;
    accentColor: string;
    fontColor: string;
    padding?: string;
  }
}

export const defaultTheme: DefaultTheme = {
  primaryColor: '#FFA69E',
  secundaryColor: '#FF7E6B',
  accentColor: '#A9F0D1',
  fontColor: '#FFF7F8'
};

export const hotel1: DefaultTheme = {
  primaryColor: '#fb6107',
  secundaryColor: '#f3de2c',
  accentColor: '#7cb518',
  fontColor: '#FFF7F8'
};
