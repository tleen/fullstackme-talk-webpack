---
order: 6
group: plugins
group_order: 2
---

# Plugins for your loaders/plugins

Why things get confusing:

```
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/, 
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'] 
      }
    }
  ]
}
```
