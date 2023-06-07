import { createTheme,PaletteColor,SimplePaletteColorOptions } from '@mui/material/styles';
import { green, purple ,lightGreen } from '@mui/material/colors';


const colorGreenTopic = lightGreen['A400'];

export const MuiTheme = createTheme({
  palette: {
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  typography: {
    topicHeader1: {
      fontSize: '80px',
      fontWeight: 1000,
    },
    topicHeader2: {
      fontSize: '80px',
      fontWeight: 500,
    },

  },
});

declare module '@mui/material/styles' {
  interface Palette {
    custom: PaletteColor;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom?: SimplePaletteColorOptions;
  }

  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}



declare module '@mui/material/styles' {
  interface TypographyVariants {
    topicHeader1: React.CSSProperties;
    topicHeader2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    topicHeader1?: React.CSSProperties;
    topicHeader2: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    topicHeader1: true;
    topicHeader2: true;
  }
}


// const theme = createTheme({
//   breakpoints: {
//     values: {
//       mobile: 0,
//       tablet: 640,
//       laptop: 1024,
//       desktop: 1200,
//     },
//   },
// });

// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//     xs: false; // removes the `xs` breakpoint
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     mobile: true; // adds the `mobile` breakpoint
//     tablet: true;
//     laptop: true;
//     desktop: true;
//   }
// }