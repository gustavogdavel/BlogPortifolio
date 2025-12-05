source "https://rubygems.org"

# GitHub Pages - inclui Jekyll e todos os plugins compatíveis
gem "github-pages", group: :jekyll_plugins

# Windows e JRuby não incluem zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster para watching directories no Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Webrick (necessário para Jekyll 4+)
gem "webrick", "~> 1.8"
