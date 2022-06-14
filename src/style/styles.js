// Typography
export const font = {
  family: 'Montserrat',
  size: {
    xs: 10,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 25,
    xxxl: 28,
  },
}

// Colors
export const color = {
  white: '#FFFFFF',
  background: '#F4F5F9',
  primary: 'green',
  secondary: '#736C7C',
  warning: 'red',
  text: '#191629',
  line: '#e5eaef',
  heart: '#fd4a75',
}

// Spacing
export const space = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 48,
  xxl: 96,
}

// Button
export const button = {
  container: {
    width: '100%',
    padding: space.md,
    backgroundColor: '#000',
    borderRadius: 12,
  },

  text: {
    textAlign: 'center',
    fontWeight: '600',
    color: color.white,
  },

  primary: {
    backgroundColor: color.primary,
  },
}

// Card
export const card = {
  body: {
    // flexDirection: 'row',
    // alignItems: 'center',

    padding: space.md,
    backgroundColor: color.white,
    borderRadius: 8,
  },
}

// Shadow
export const shadow = {
  sm: {
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
}
