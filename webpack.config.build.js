const path = require('path')
const webpack = require('webpack')

const CopyWebackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.e
const dirApp = path.join(__dirname, 'app')
const dirAssets = path.join(__dirname, 'assets')
const dirStyles = path.join(__dirname, 'styles')

console.log(dirApp, dirAssets, dirStyles)