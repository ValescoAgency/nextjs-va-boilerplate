module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [
          ['@common/components', './common/components/'],
          ['@common/utils', './common/utils/'],
          ['@common/hooks', './common/hooks/'],
          ['@modules', './modules/'],
          ['@pages', './pages/'],
          ['@styles', './styles/'],
          ['@scripts', './scripts/']
        ],
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx']
      }
    }
  }
};
