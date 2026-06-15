# Changelog

Release notes for `ngx-advanced-daterangepicker` from Angular 9 onward.

Dates are npm publish dates in UTC. Angular support lines are based on the package's published peer dependency metadata. The package used pre-1.0 versioning for Angular 9 and 10, then switched to Angular-major versioning starting with `11.0.0`.

## Angular Compatibility Summary

| Angular line | Package versions | Date library | Notes |
| --- | --- | --- | --- |
| Angular 22 | `22.0.0` | Luxon | Current line with Angular Material 22 and Luxon 3.7.x peer support. |
| Angular 21 | `21.0.0`, `21.2.0` | Luxon | Angular 21 compatibility line with Luxon 3.7.x peer support. |
| Angular 20 | `20.0.0`, `20.2.0` | Luxon | Angular 20 compatibility line with Luxon 3.7.x peer support. |
| Angular 19 | `19.0.0` - `19.2.0` | Luxon | Angular 19 compatibility line with Luxon 3.6.x peer support. |
| Angular 18 | `18.0.0` - `18.2.7` | Moment to Luxon | Migration line from Moment to Luxon. `18.2.4+` is Luxon-only in published peers. |
| Angular 17 | `17.0.0`, `17.1.1` | Moment | Angular 17 compatibility line with Angular Material Moment adapter support. |
| Angular 16 | `16.0.0`, `16.0.1` | Moment | Angular 16 compatibility line with Angular Material Moment adapter support. |
| Angular 15 | `15.1.0` - `15.2.4` | Moment | Removed `@angular/flex-layout` from published peer dependencies. |
| Angular 14 | `14.0.0`, `14.0.1` | Moment | Angular 14 compatibility line with `@angular/flex-layout` beta peer support. |
| Angular 13 | `13.0.0` - `13.2.1` | Moment | Angular 13 compatibility line with `@angular/flex-layout` beta peer support. |
| Angular 12 | `12.0.0`, `12.0.1` | Moment | Angular 12 compatibility line; `12.0.1` aligns Material peer support to Angular Material 12. |
| Angular 11 | `11.0.0` - `11.0.5` | Moment | First Angular-major package version line; removed `saturn-datepicker` from published peers. |
| Angular 10 | `0.1.5` - `0.2.0` | Moment | Pre-1.0 Angular 10 line with Angular Material 10 support and `tslib` 2.x. |
| Angular 9 | `0.0.1` - `0.1.4` | Moment | Initial public line for Angular 9 and Angular Material 9. |

## Angular 22

### `22.0.0` - 2026-06-15

- Added Angular 22 and Angular Material 22 peer dependency support.
- Kept Luxon 3.7.x and `tslib` 2.8.1 compatibility.

## Angular 21

Published versions:

| Version | Date |
| --- | --- |
| `21.2.0` | 2026-05-06 |
| `21.0.0` | 2025-11-20 |

Release notes:

- Added the Angular 21 compatibility line.
- Kept the Luxon-based implementation and Luxon 3.7.x peer support.

## Angular 20

Published versions:

| Version | Date |
| --- | --- |
| `20.2.0` | 2025-08-20 |
| `20.0.0` | 2025-05-28 |

Release notes:

- Added the Angular 20 compatibility line.
- Updated peer dependencies for Angular Material 20 and Luxon 3.7.x.

## Angular 19

Published versions:

| Version | Date |
| --- | --- |
| `19.2.0` | 2025-05-28 |
| `19.1.0` | 2025-04-11 |
| `19.0.0` | 2024-11-19 |

Release notes:

- Added the Angular 19 compatibility line.
- Kept the Luxon-based implementation with Luxon 3.6.x peer support on the latest Angular 19 release.
- Kept `tslib` 2.8.1 compatibility.

## Angular 18

Published versions:

| Version | Date |
| --- | --- |
| `18.2.7` | 2024-10-08 |
| `18.2.6` | 2024-09-09 |
| `18.2.5` | 2024-09-09 |
| `18.2.4` | 2024-09-08 |
| `18.2.3` | 2024-09-07 |
| `18.2.2` | 2024-09-07 |
| `18.2.1` | 2024-09-07 |
| `18.2.0` | 2024-09-07 |
| `18.1.3` | 2024-09-07 |
| `18.1.2` | 2024-09-07 |
| `18.1.1` | 2024-09-07 |
| `18.1.0` | 2024-09-07 |
| `18.0.0` | 2024-08-31 |

Release notes:

- Added the Angular 18 compatibility line.
- `18.0.0` through `18.1.3` keep the Moment and Angular Material Moment adapter peer dependencies.
- `18.2.0` through `18.2.2` introduce Luxon while still listing Moment and the Moment adapter.
- `18.2.3` switches published peers to Luxon plus the Angular Material Luxon adapter.
- `18.2.4` through `18.2.7` publish as Luxon-only with Angular Material and no adapter peer dependency.
- Updated `tslib` compatibility to 2.7.0.

## Angular 17

Published versions:

| Version | Date |
| --- | --- |
| `17.1.1` | 2024-08-31 |
| `17.0.0` | 2024-01-24 |

Release notes:

- Added the Angular 17 compatibility line.
- Kept Moment and Angular Material Moment adapter peer dependency support.
- Updated `tslib` compatibility to 2.6.2.

## Angular 16

Published versions:

| Version | Date |
| --- | --- |
| `16.0.1` | 2023-05-18 |
| `16.0.0` | 2023-05-04 |

Release notes:

- Added the Angular 16 compatibility line.
- Kept Moment and Angular Material Moment adapter peer dependency support.
- Kept `tslib` 2.5.0 compatibility.

## Angular 15

Published versions:

| Version | Date |
| --- | --- |
| `15.2.4` | 2023-05-18 |
| `15.2.3` | 2023-05-17 |
| `15.2.2` | 2023-04-06 |
| `15.2.1` | 2023-04-06 |
| `15.2.0` | 2023-04-06 |
| `15.1.0` | 2023-01-13 |

Release notes:

- Added the Angular 15 compatibility line.
- Removed `@angular/flex-layout` from published peer dependencies.
- Kept Moment and Angular Material Moment adapter peer dependency support.
- Updated `tslib` compatibility from 2.4.1 to 2.5.0 across the line.

## Angular 14

Published versions:

| Version | Date |
| --- | --- |
| `14.0.1` | 2022-07-01 |
| `14.0.0` | 2022-06-15 |

Release notes:

- Added the Angular 14 compatibility line.
- Kept Moment, Angular Material Moment adapter, and `@angular/flex-layout` beta peer dependency support.
- Updated `tslib` compatibility to 2.4.0.

## Angular 13

Published versions:

| Version | Date |
| --- | --- |
| `13.2.1` | 2022-02-07 |
| `13.1.0` | 2022-02-03 |
| `13.0.0` | 2022-02-02 |

Release notes:

- Added the Angular 13 compatibility line.
- Kept Moment, Angular Material Moment adapter, and `@angular/flex-layout` beta peer dependency support.
- Updated `tslib` compatibility from 2.3.0 to 2.3.1 across the line.

## Angular 12

Published versions:

| Version | Date |
| --- | --- |
| `12.0.1` | 2021-05-19 |
| `12.0.0` | 2021-05-13 |

Release notes:

- Added the Angular 12 compatibility line.
- `12.0.1` aligns published Angular Material peer dependencies to Angular Material 12.
- Kept Moment, Angular Material Moment adapter, and `@angular/flex-layout` beta peer dependency support.
- Updated `tslib` compatibility to 2.2.0.

## Angular 11

Published versions:

| Version | Date |
| --- | --- |
| `11.0.5` | 2020-11-16 |
| `11.0.4` | 2020-11-16 |
| `11.0.3` | 2020-11-16 |
| `11.0.2` | 2020-11-16 |
| `11.0.1` | 2020-11-16 |
| `11.0.0` | 2020-11-16 |

Release notes:

- Added the Angular 11 compatibility line and started aligning package major versions with Angular major versions.
- Removed `saturn-datepicker` from published peer dependencies.
- Kept Moment, Angular Material Moment adapter, and `@angular/flex-layout` beta peer dependency support.
- Kept `tslib` 2.0.3 compatibility.

## Angular 10

Published versions:

| Version | Date |
| --- | --- |
| `0.2.0` | 2020-10-15 |
| `0.1.9` | 2020-08-31 |
| `0.1.8` | 2020-08-31 |
| `0.1.7` | 2020-08-31 |
| `0.1.6` | 2020-06-26 |
| `0.1.5` | 2020-06-25 |

Release notes:

- Added Angular 10 and Angular Material 10 peer dependency support.
- Moved the published `tslib` dependency to 2.x.
- Kept Moment, Saturn Datepicker, Angular Material Moment adapter, and `@angular/flex-layout` beta peer dependency support.
- Includes date range behavior and UI fixes from the 0.x line, including next-range behavior and `showLastEndOf` handling.

## Angular 9

Published versions:

| Version | Date |
| --- | --- |
| `0.1.4` | 2020-06-16 |
| `0.1.3` | 2020-06-09 |
| `0.1.2` | 2020-06-09 |
| `0.1.1` | 2020-06-09 |
| `0.1.0` | 2020-06-09 |
| `0.0.9` | 2020-05-27 |
| `0.0.8` | 2020-05-20 |
| `0.0.7` | 2020-05-19 |
| `0.0.6` | 2020-05-19 |
| `0.0.5` | 2020-05-19 |
| `0.0.4` | 2020-04-18 |
| `0.0.3` | 2020-04-17 |
| `0.0.2` | 2020-04-17 |
| `0.0.1` | 2020-04-17 |

Release notes:

- Initial public package line for Angular 9 and Angular Material 9.
- Early `0.0.x` releases listed Bootstrap and ng-bootstrap peers; later Angular 9 releases removed those peers.
- Kept Moment, Saturn Datepicker, and Angular Material Moment adapter peer dependency support.
- Added `@angular/flex-layout` beta peer dependency support by the later Angular 9 releases.
