[logger_options]: ./src/defaults/logger_options.ts

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
  - [Constants](#constants)
  - [Types](#types)

## About

Many useful tools.

## Features

- Colorful logs that include the time
- [Tailwind CSS](https://tailwindcss.com/docs/colors)'s color palette in multiple formats
- ANSI codes for colors in your terminals
- Strict version of the Omit type

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
├── colors
│
└── styles

@keift/utils/types
│
├── type LoggerOptions
└── type StrictOmit
```

### Import

Briefly as follows.

```typescript
import { Logger, colors, styles } from '@keift/utils';
import type { StrictOmit } from '@keift/utils/types';
```

### Constructors

`new Logger(options?)`

Colorful logs that include the time.

> | Parameter  | Type            | Default          | Description            |
> | ---------- | --------------- | ---------------- | ---------------------- |
> | `options?` | [LoggerOptions] | [logger_options] | Constructor's options. |
>
> Example:
>
> ```typescript
> const logger = new Logger();
> const scoped_logger = new Logger({ scope: 'Keift' });
>
> logger.info('This is a info.'); // [2025-01-01 00:00:00 INF] This is a info.
> logger.warn('This is a warn.'); // [2025-01-01 00:00:00 WRN] This is a warn.
> logger.error('This is a error.'); // [2025-01-01 00:00:00 ERR] This is a error.
>
> scoped_logger.info('This is a info.'); // Keift » [2025-01-01 00:00:00 INF] This is a info.
> scoped_logger.warn('This is a warn.'); // Keift » [2025-01-01 00:00:00 WRN] This is a warn.
> scoped_logger.error('This is a error.'); // Keift » [2025-01-01 00:00:00 ERR] This is a error.
> ```

### Constants

`colors`

[Tailwind CSS](https://tailwindcss.com/docs/colors)'s color palette in multiple formats.

> Example:
>
> ```typescript
> console.log(colors.red['500']);
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

<br/>

`styles`

ANSI codes for colors in your terminals.

> Example:
>
> ```typescript
> console.log(`${styles.fg.red}This text is red`, styles.reset);
> ```

### Types

| Type            |
| --------------- |
| [LoggerOptions] |
| [StrictOmit]    |
