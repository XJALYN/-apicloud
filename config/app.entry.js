const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseDir = path.resolve(__dirname, '../src/pages')
const excludeDir = []
const viewArr = fs.readdirSync(baseDir).filter(dir => {
    return excludeDir.indexOf(dir) === -1 && fs.statSync(baseDir + '/' + dir).isDirectory()
})

let entriesConfig = []

viewArr.forEach(generateEntryConfig)

function generateEntryConfig(dir) {
    const enrtyFile = `main.js`
    // const filename = dir + `/${dir}.html`
    const filename = `${dir}.html`
    entriesConfig.push({
        entryName: dir,
        entry: path.resolve(baseDir, dir, enrtyFile),
        filename: filename,
        template: path.resolve(__dirname, '../index.html')
    })
}
let entries = {}
let htmls = []

entriesConfig.map(item => {
    let html = new HtmlWebpackPlugin({
        filename: item.filename,
        template: item.template,
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    })
    entries[item.entryName] = item.entry
    htmls.push(html)
})






module.exports = {
    htmls,
    entries
}