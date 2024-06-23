# nextjs + playwrightのUIテスト

## Install

### pnpmでnextjs.jsをインストール
> pnpm dlx create-next-app@latest

projectを**nextjs-playwright-sample**にする

> cd nextjs-playwright-sample

### Installing Playwright
> pnpm create playwright


全部defaultにしておく

### Running the Example Test(in UI Mode)
> pnpm run dev
localhostが起動した状態で

> pnpm playwright test

またはUIモード
> pnpm playwright test --ui

package.jsonにコマンドを追加しておく
```json
  "scripts": {
    "ui-test": "pnpm playwright test",
  },
```

> pnpm run ui-test

### ref

[plyawright](https://playwright.dev/docs/intro)

[nextjs](https://nextjs.org/docs/pages/building-your-application/testing/playwright)