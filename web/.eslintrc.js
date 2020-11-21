module.exports = {
  extends: ['wesbos', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/prop-types': 0,
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],
  },
};
