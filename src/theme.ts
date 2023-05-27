import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        'font-family': 'Inter',
        margin: 0,
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-text-size-adjust': '100%',
      },
    }),
    fonts: {
      heading: 'Inter, sans-serif',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        'font-family': 'Inter',
      },
    },
  },
});

export default theme;
