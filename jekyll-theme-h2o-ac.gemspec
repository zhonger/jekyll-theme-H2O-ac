# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "jekyll-theme-h2o-ac"
    spec.version       = "1.2.1"
    spec.authors       = ["zhonger"]
    spec.email         = ["zhonger@live.cn"]
  
    spec.summary       = "A Jekyll theme for researchers and maintainers based on Jekyll and H2O theme."
    spec.homepage      = "https://github.com/zhonger/jekyll-theme-H2O-ac"
    spec.license       = "MIT"

    spec.required_ruby_version     = ">= 2.7.0"
    spec.required_rubygems_version = ">= 3.0.0"

    spec.metadata = {
      "bug_tracker_uri"   => "https://github.com/zhonger/jekyll-theme-H2O-ac/issues",
      "changelog_uri"     => "https://github.com/zhonger/jekyll-theme-H2O-ac/tree/master/logs.md",
      "mailing_list_uri"  => "https://github.com/zhonger/jekyll-theme-H2O-ac/discussions",
      "source_code_uri"   => "https://github.com/zhonger/jekyll-theme-H2O-ac/tree/master",
      "rubygems_mfa_required" => "true",    
    }
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_data|blog|search.json|LICENSE|README|_config\.yml)!i) }
  
    # spec.add_runtime_dependency "jekyll", "~> 3.7", ">= 3.7"
    spec.add_runtime_dependency "jekyll-paginate-v2", "~> 3.0.0"
    spec.add_runtime_dependency "jekyll-feed", "~> 0.17.0"
    spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4.0"
    spec.add_runtime_dependency "webrick", "~> 1.8.0"
    spec.add_runtime_dependency "premonition", "~> 4.0.2"
    spec.add_runtime_dependency "h2o-ac-jekyll-extlinks", "~> 0.0"
    spec.add_dependency "bundler", "~> 2.3"
  end
  
