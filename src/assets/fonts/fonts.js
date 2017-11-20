const fontsContext = require.context(
    '!!file-loader?name=fonts/[name].[ext]!.',
    true,
    /\.(woff)$/
  );

  fontsContext.keys().forEach(fontsContext);

  export default fontsContext;