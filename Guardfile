guard 'livereload', grace_period: 0.5, host: '0.0.0.0', port: 35729, apply_css_live: true, force_reload: true do
  watch(%r{layouts/.+\.(liquid)$}) { |m| m[0] }
  watch(%r{snippets/.+\.(liquid)$}) { |m| m[0] }
  watch(%r{assets/stylesheets/.*\.css$}) { |m| m[0] }
  watch(%r{assets/.+\.js$}) { |m| m[0] }
  watch(%r{config/settings_schema\.json}) { |m| m[0] }
end 