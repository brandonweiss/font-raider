# ![Font Raider](./assets/logo.svg?sanitize=true)

> Font Raider delves deep into the depths of macOS and finds those fonts that have been hidden from you

[![](https://badgen.net/npm/v/font-raider?icon=npm)](https://www.npmjs.com/package/font-raider)
![](https://badgen.net/npm/node/font-raider)
[![](https://badgen.net/david/dep/brandonweiss/font-raider)](https://david-dm.org/brandonweiss/font-raider)

Many font managers and applications hide font files from you. The fonts are available for use in your design apps or text editors but they’re mysteriously not visible in Font Book. This is because they’re making the fonts available to the system but hiding the font files themselves by not keeping them in the standard font locations. Ostensibly this is to prevent theft and pirating, but like most data “protections”, they get in the way of normal usage as well. There are plenty of fair reasons why you might need direct access to your font files themselves.

Now you can easily get them!

## Installation

Install it globally:

```
$ npm install --global font-raider
```

## Usage

```
$ font-raider <font name> <output directory>
```

The first parameter is the font name. The search is case-insensitive. If the font name has two words wrap them in quotes.

The second parameter is the output directory. Make sure the directory actually exists. Don’t worry about the trailing slash—it’ll work either way.

Here’s an example:

```
$ font-raider "Helvetica Neue" ~/Desktop/
```

## Contributing

Bug reports and pull requests are welcome on GitHub at [https://github.com/brandonweiss/font-raider][github-font-raider].

## License

The package is available as open source under the terms of the [MIT License][MIT-license].

[github-font-raider]: https://github.com/brandonweiss/discharge
[MIT-license]: http://opensource.org/licenses/MIT
