# The Posthaven Senkai Theme

## v2

1. `npm run dev`
1. `bundle exec guard --no-interactions`

---

## Development Setup

1. Install dependencies:
```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies
npm install
```

2. Start development servers:

Run these commands in separate terminal windows:
```bash
# Watch and compile Tailwind CSS
npm run dev

# Start LiveReload server
bundle exec guard
```


## Building for Production

```bash
# Build Tailwind CSS
npm run build
```

The compiled CSS will be in `assets/tailwind.css`.


## Sceenshot

![Screenshot](/assets/screenshot.png?raw=true)

## Theme Building Resources

* [Posthaven theme documentation](http://theme-docs.posthaven.com/)
* See the [posthaven_theme](https://github.com/posthaven/posthaven_theme) gem for theme file upload via the API.

---

> Old instructions below

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

## CSS File Structure

The Tailwind CSS file is compiled to:
`assets/stylesheets/tailwind.css`

This file should be served at:
`/stylesheets/tailwind.css`
