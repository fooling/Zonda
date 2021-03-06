# config.coffee
#
# Generate the etc/env.js, for configure the SeaJS

fs = require "fs"
path = require "path"

listVendor = require "./listVendor"

project_dir = path.resolve './', '../'

zonda_vendor_dir = "vendor/Zonda/vendor"

vendor_list = listVendor "#{project_dir}/#{zonda_vendor_dir}", zonda_vendor_dir

alias = JSON.stringify vendor_list.alias

env = """
  seajs.config({
    base: "/assets",
    charset: "utf-8",
    alias: #{alias}
  });
"""

fs.writeFileSync "#{project_dir}/etc/env.js", env
