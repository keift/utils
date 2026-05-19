[LoggerOptionsDefault]: ./src/defaults/logger_options.ts

<!---->

[LoggerOptions]: ./src/types/logger_options.ts
[StrictOmit]: ./src/types/strict_omit.ts

<div align="center">
  <br/>
  <img src="https://raw.github.com/keift/cdn/refs/heads/main/images/keift/logos/raw/blue.png" width="175px"/> <b>Utils</b>
  <br/>
  <br/>
  <img src="https://img.shields.io/npm/v/@keift/utils?label=version&color=615fff"/>
  <img src="https://img.shields.io/npm/l/@keift/utils?label=license&color=615fff"/>
  <img src="https://img.shields.io/npm/dt/@keift/utils?label=downloads&color=00bc7d"/>
  <img src="https://img.shields.io/npm/unpacked-size/@keift/utils?label=size&color=00bc7d"/>
</div>

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
  - [Tree](#tree)
  - [Import](#import)
  - [Constructors](#constructors)
  - [Methods](#methods)
  - [Constants](#constants)
  - [Types](#types)
- [Links](#links)
  - [Discord](https://discord.gg/keift)
  - [Telegram](https://t.me/keiftco)
  - [Twitter](https://x.com/keiftco)
  - [GitHub](https://github.com/keift)
- [License](#license)

## About

Many useful tools.

## Features

- 

## Installation

You can install it as follows.

```shell
# NPM
npm add @keift/utils

# PNPM
pnpm add @keift/utils

# Yarn
yarn add @keift/utils

# Bun
bun add @keift/utils

# Deno
deno add @keift/utils
```

## Documentation

### Tree

Briefly as follows.

```typescript
@keift/utils
│
├── new Logger(options?)
│   │
│   ├── info(message)
│   ├── warn(message)
│   └── error(message)
│
├── Colors
│
├── Styles
│
├── type LoggerOptions
└── type StrictOmit
```

### Import

Briefly as follows.

```typescript
import { Logger, Colors, Styles, type StrictOmit } from '@keift/utils';
```

### Constructors

`new Logger(options?)`

Colorful logs that include the time.

> | Parameter  | Type            | Default                | Description            |
> | ---------- | --------------- | ---------------------- | ---------------------- |
> | `options?` | [LoggerOptions] | [LoggerOptionsDefault] | Constructor's options. |
>
> returns String
>
> Example:
>
> ```typescript
> const Log = new Logger();
> const ScopedLog = new Logger({ scope: 'Keift' });
>
> Log.info('This is a info.'); // [2025-01-01 00:00:00 INF] This is a info.
> Log.warn('This is a warn.'); // [2025-01-01 00:00:00 WRN] This is a warn.
> Log.error('This is a error.'); // [2025-01-01 00:00:00 ERR] This is a error.
>
> ScopedLog.info('This is a info.'); // Keift » [2025-01-01 00:00:00 INF] This is a info.
> ScopedLog.warn('This is a warn.'); // Keift » [2025-01-01 00:00:00 WRN] This is a warn.
> ScopedLog.error('This is a error.'); // Keift » [2025-01-01 00:00:00 ERR] This is a error.
> ```

### Constants

`Colors`

Get [Tailwind CSS](https://tailwindcss.com/docs/colors)'s color palette in multiple formats.

> Example:
>
> ```typescript
> console.log(Colors.red['500']);
> /*
>   {
>     dec: 16460854,
>     hex: 'fb2c36',
>     hex8: 'fb2c36ff',
>     rgb: '251, 44, 54',
>     hsl: '356.95, 95.9%, 57.72%',
>     oklch: '0.637, 0.237, 25.331'
>   }
> */
> ```

`Styles`

Use ANSI codes for colors in your terminals.

> Example:
>
> ```typescript
> console.log(`${Styles.fg.red}This text is red`, Styles.reset);
> ```

### Types

| Type            |
| --------------- |
| [LoggerOptions] |
| [StrictOmit]    |

## Links

- [Discord](https://discord.gg/keift)
- [Telegram](https://t.me/keiftco)
- [Twitter](https://x.com/keiftco)
- [GitHub](https://github.com/keift)

## License

MIT License

Copyright (c) 2025 Keift

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
