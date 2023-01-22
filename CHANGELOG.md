## [1.18.1](https://github.com/alex73630/piquetdestream-api/compare/v1.18.0...v1.18.1) (2023-01-22)


### Bug Fixes

* **helloasso:** fallback on refresh token in case of invalid token ([c242bb9](https://github.com/alex73630/piquetdestream-api/commit/c242bb9e1ea40e712ba7385f5bb6e4302b00cf2b))

# [1.18.0](https://github.com/alex73630/piquetdestream-api/compare/v1.17.0...v1.18.0) (2023-01-21)


### Features

* **counter:** add leaderboard route ([694123b](https://github.com/alex73630/piquetdestream-api/commit/694123b9479cec057f104c19ac18567efd6ce7f2))

# [1.17.0](https://github.com/alex73630/piquetdestream-api/compare/v1.16.2...v1.17.0) (2023-01-19)


### Features

* **db:** use upsert/skipDuplicates on inserts ([45628c3](https://github.com/alex73630/piquetdestream-api/commit/45628c370291d396fb9c46f93c7526ae2f0fb7c1))

## [1.16.2](https://github.com/alex73630/piquetdestream-api/compare/v1.16.1...v1.16.2) (2023-01-19)


### Bug Fixes

* typo in fly.io config ([e52128d](https://github.com/alex73630/piquetdestream-api/commit/e52128d50de92261b90d69835e9f34a9c34d071d))

## [1.16.1](https://github.com/alex73630/piquetdestream-api/compare/v1.16.0...v1.16.1) (2023-01-19)


### Bug Fixes

* **docker:** missing prisma config ([a4e8e81](https://github.com/alex73630/piquetdestream-api/commit/a4e8e81176f0c891d4133350d24c2468d2f12d54))

# [1.16.0](https://github.com/alex73630/piquetdestream-api/compare/v1.15.1...v1.16.0) (2023-01-19)


### Features

* save donations payloads in db for list ([5f68014](https://github.com/alex73630/piquetdestream-api/commit/5f680146bc9e10a3ef243fddcdef3a560778028f))

## [1.15.1](https://github.com/alex73630/piquetdestream-api/compare/v1.15.0...v1.15.1) (2023-01-19)


### Bug Fixes

* typo ([cc558b2](https://github.com/alex73630/piquetdestream-api/commit/cc558b2a8f42264fadd583b4398279513b3b2ab0))

# [1.15.0](https://github.com/alex73630/piquetdestream-api/compare/v1.14.0...v1.15.0) (2023-01-19)


### Features

* **helloasso:** add twitch username if exists ([c1d30cb](https://github.com/alex73630/piquetdestream-api/commit/c1d30cbfacf2be032ab295dfa9960470a7b337c3))

# [1.14.0](https://github.com/alex73630/piquetdestream-api/compare/v1.13.3...v1.14.0) (2023-01-19)


### Features

* **helloasso:** remove unecessary api calls ([fed10e3](https://github.com/alex73630/piquetdestream-api/commit/fed10e3a01c3d8b38624d16e658e1b856d4217c2))

## [1.13.3](https://github.com/alex73630/piquetdestream-api/compare/v1.13.2...v1.13.3) (2023-01-19)


### Bug Fixes

* **helloasso:** broken refresh total continuationToken logic ([7c5a5cc](https://github.com/alex73630/piquetdestream-api/commit/7c5a5ccb389febad7059fc5b7816b129142c05b6))

## [1.13.2](https://github.com/alex73630/piquetdestream-api/compare/v1.13.1...v1.13.2) (2023-01-18)


### Bug Fixes

* raise fetch duration to 5min ([1b2e1aa](https://github.com/alex73630/piquetdestream-api/commit/1b2e1aa4c333a80177588b508be483c9decbe315))

## [1.13.1](https://github.com/alex73630/piquetdestream-api/compare/v1.13.0...v1.13.1) (2023-01-18)


### Bug Fixes

* extend donation timings ([9d0cc9a](https://github.com/alex73630/piquetdestream-api/commit/9d0cc9a4062276ada80bcc4e3e42cc4b7c29a4cb))

# [1.13.0](https://github.com/alex73630/piquetdestream-api/compare/v1.12.0...v1.13.0) (2023-01-18)


### Features

* **auth:** protect routes with static token ([16e200c](https://github.com/alex73630/piquetdestream-api/commit/16e200c055c54da6d45e06bd3d3f0ad1651f5635))

# [1.12.0](https://github.com/alex73630/piquetdestream-api/compare/v1.11.0...v1.12.0) (2023-01-18)


### Features

* **cron:** add timer switch on getDonationsSinceLastFetch ([de2f61a](https://github.com/alex73630/piquetdestream-api/commit/de2f61a3fc7051b435e65c294121c00fbdd99c42))

# [1.11.0](https://github.com/alex73630/piquetdestream-api/compare/v1.10.0...v1.11.0) (2023-01-18)


### Features

* **helloasso:** add dedup on getDonationsSinceLastFetch ([3179c11](https://github.com/alex73630/piquetdestream-api/commit/3179c119eae24ece6d52051d058eca0fc4b63017))

# [1.10.0](https://github.com/alex73630/piquetdestream-api/compare/v1.9.0...v1.10.0) (2023-01-18)


### Features

* **redis:** reset lastdonationfetch on counter reset ([57a570f](https://github.com/alex73630/piquetdestream-api/commit/57a570fd50af4848806b468504c8700e3909df65))

# [1.9.0](https://github.com/alex73630/piquetdestream-api/compare/v1.8.1...v1.9.0) (2023-01-18)


### Bug Fixes

* unit test broken and wrong scale for redis ttl ([4952ed7](https://github.com/alex73630/piquetdestream-api/commit/4952ed727d2b0f01edf920ff728e8b8c61d3cf4f))


### Features

* **helloasso:** add fix for missing donation notif ([70c7047](https://github.com/alex73630/piquetdestream-api/commit/70c7047eb381100b07752058d6e10e36268feede))

## [1.8.1](https://github.com/alex73630/piquetdestream-api/compare/v1.8.0...v1.8.1) (2023-01-18)


### Bug Fixes

* amount not parsed correctly for frontend ([b47bc7f](https://github.com/alex73630/piquetdestream-api/commit/b47bc7ff87ddf88b628d7f8631f70de55851a5d1))

# [1.8.0](https://github.com/alex73630/piquetdestream-api/compare/v1.7.0...v1.8.0) (2023-01-18)


### Features

* add redis persistence ([c317857](https://github.com/alex73630/piquetdestream-api/commit/c317857e734714ea8359f7a2c87b0c8653065770))

# [1.7.0](https://github.com/alex73630/piquetdestream-api/compare/v1.6.0...v1.7.0) (2023-01-18)


### Features

* bunch of features ([e4a2f78](https://github.com/alex73630/piquetdestream-api/commit/e4a2f78c9ad15a70dd078ac879b5ec1ee46d2473))

# [1.6.0](https://github.com/alex73630/piquetdestream-api/compare/v1.5.2...v1.6.0) (2023-01-17)


### Features

* add basic counter setup ([4afbeb1](https://github.com/alex73630/piquetdestream-api/commit/4afbeb17589ce38dd6d40bb620f53ee400438bdb))

## [1.5.2](https://github.com/alex73630/piquetdestream-api/compare/v1.5.1...v1.5.2) (2023-01-17)


### Bug Fixes

* typo in fly config file ([f713d94](https://github.com/alex73630/piquetdestream-api/commit/f713d94e9cba86f6cc2de292f15253affbf14163))

## [1.5.1](https://github.com/alex73630/piquetdestream-api/compare/v1.5.0...v1.5.1) (2023-01-17)


### Bug Fixes

* issue with port ([e3dc48a](https://github.com/alex73630/piquetdestream-api/commit/e3dc48a8dc7b4d1c13067f69442c55a129fe3c9f))

# [1.5.0](https://github.com/alex73630/piquetdestream-api/compare/v1.4.0...v1.5.0) (2023-01-17)


### Features

* real deployment here ([bdebbec](https://github.com/alex73630/piquetdestream-api/commit/bdebbec1fd522caa3db99716163c53412b524a03))

# [1.4.0](https://github.com/alex73630/piquetdestream-api/compare/v1.3.0...v1.4.0) (2023-01-17)


### Bug Fixes

* **ci:** put it in the right pipeline ([fd1076e](https://github.com/alex73630/piquetdestream-api/commit/fd1076e3bfb740d72286e223ec6466823c779706))


### Features

* first successful deployment (for real) ([0898d88](https://github.com/alex73630/piquetdestream-api/commit/0898d886bb046b443a5b2da9840855870b92cf50))

## [1.3.1](https://github.com/alex73630/piquetdestream-api/compare/v1.3.0...v1.3.1) (2023-01-17)


### Bug Fixes

* **ci:** put it in the right pipeline ([fd1076e](https://github.com/alex73630/piquetdestream-api/commit/fd1076e3bfb740d72286e223ec6466823c779706))

# [1.3.0](https://github.com/alex73630/piquetdestream-api/compare/v1.2.0...v1.3.0) (2023-01-17)


### Features

* **ci:** actually make ci working ([386d34e](https://github.com/alex73630/piquetdestream-api/commit/386d34eabbfdca681c0d1be8d9e0d2f9b14f02f5))

# [1.2.0](https://github.com/alex73630/piquetdestream-api/compare/v1.1.0...v1.2.0) (2023-01-17)


### Features

* add deployment to fly.io ([592a1fe](https://github.com/alex73630/piquetdestream-api/commit/592a1fe7b6a727f4a94a8b044c2a44d0742da63d))

# [1.1.0](https://github.com/alex73630/piquetdestream-api/compare/v1.0.0...v1.1.0) (2023-01-17)


### Features

* **helloasso:** add basic api support ([1b51e88](https://github.com/alex73630/piquetdestream-api/commit/1b51e88760ec2c6891fb8f35d1d86fc3d36ff2cd))

# 1.0.0 (2023-01-17)


### Bug Fixes

* **tests:** fix broken tests ([e2266c5](https://github.com/alex73630/piquetdestream-api/commit/e2266c5e2bb9de5c42515f54fd77c499b945561c))


### Features

* add project config ([d7741a6](https://github.com/alex73630/piquetdestream-api/commit/d7741a61e0b83a073575b7d91d40c0538fa35181))
* initial commit ([3ad99df](https://github.com/alex73630/piquetdestream-api/commit/3ad99df6fa580b73ea6f85b171b4de27cb5f3ac7))
