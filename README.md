# The Posthaven Omega Theme

## Sceenshot

![Screenshot](/assets/screenshot.png?raw=true)

## Theme Building Resources

* [Posthaven theme documentation](http://theme-docs.posthaven.com/)
* See the [posthaven_theme](https://github.com/posthaven/posthaven_theme) gem for theme file upload via the API.


## Building Stylesheets

### Install Gems

Install [bundler](http://bundler.io):

```
gem install bundler
```

Install the gems:

```
bundle install
```

### Building SCSS

Build `assets/blog.css`:

```
rake compile
```

Watch `src/blog.scss` and build on update:

```
rake watch
```


### Local Development
In the posthaven dir
`rake themes:import_all`

Changes to layout will automatically reload

For changes to styles
Use the watch command
To reload styles in postforge
`rake themes:import_all`
