const { execSync } = require("child_process")
const parsePlist = require("plist").parse
const fs = require("fs")
const path = require("path")
const pluralizeFont = require("./lib/pluralize-font")
const untildify = require("./lib/untildify")
const fontName = process.argv[2]
const outputDirectory = process.argv[3]

if (fontName === undefined) {
  console.log("A font name to search for is required.")
  process.exit(1)
}

if (outputDirectory === undefined) {
  console.log("A directory to output matching fonts to is required.")
  process.exit(1)
}

console.log("Raiding fonts…")

let plist = execSync("system_profiler -xml SPFontsDataType").toString()
let data = parsePlist(plist)
let fonts = data[0]._items

console.log(`${fonts.length} ${pluralizeFont(fonts.length)} found…`)

let matchingFonts = fonts.filter((font) => {
  return font.typefaces.find((typeface) => {
    return typeface.family.match(new RegExp(fontName, "i"))
  })
})

if (!matchingFonts.length) {
  console.log("No matching fonts found.")
  process.exit(0)
}

console.log(`${matchingFonts.length} matching ${pluralizeFont(matchingFonts.length)} found, locations are:`)

let fontPaths = matchingFonts.map((font) => font.path)

console.log("")
fontPaths.forEach((fontPath) => console.log(fontPath))
console.log("")

fontPaths.forEach((fontPath) => {
  let filename = path.basename(fontPath)
  fs.copyFileSync(fontPath, untildify(path.join(outputDirectory, filename)))
})

console.log(`Copied fonts to “${outputDirectory}”!`)
