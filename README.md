# test-runner

![test-runner](/docs/imgs/test-runner-lotr.jpg)
_But as for your gift, lord, I will choose one that will fit my need: swift and sure. Give me test-runner! He was only lent before, if loan we may call it. But now shall ride him into great hazard, setting silver against black: I would not risk anything that is not my own. And already there is a bond of love between us._[Said Gandalf].

## _LodGerin QA Playwright Template_

This repository is intended as as template for functional and visual automation test validation using [Playwright](http://playwright.dev).

Teh framework provides easy setup and a interactive ways to record and save automated test scripts with the additional the visual regression assert expectations.

## Setup

### Prerequisites

1. POSIX shell (Windows we strongly advise to use [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) Bash terminal or development environment).
2. Node v18 or higher (currently LTS version is v18.16.0, check using `node -v`).
3. Yarn (install with `npm install -g yarn`).
4. Install browsers to execute the test locally `npx playwright install`
5. Docker (check using `docker -v`).
6. Any IDE that support Prettier and Eslint extensions.

### Execution

1. Clone this repository
2. Install dependencies using `yarn install`.
3. Check docker daemon is running using `docker ps -a`.
4. Run all the test using `yarn test:e2e` or if you want to run specific set of test using @tags run `yarn test:e2e tags`.
5. Open the execution report using `yarn report`

### Cuztomized ways to execute the framework

1. To run a basic test case locally, se `yarn test:e2e:local` and append other playwright configs like `--headed`,`--project`, etc.
    Example:

    ```bash
    yarn test:e2e:local e2e/tests/example.e2e.test.ts --headed --project chromium
    ```

2. To open the playwright runner, use `yarn ui` (to run all the test cases). To use the runner with a specific testcase, just append the path to the test as argument.
    Example:

    ```bash
    yarn ui e2e/tests/example.e2e.test.ts
    ```

### Framework structure

``` bash
playwright-template/
 ├── utils/
 │    ├── visual
 │        ├── configs here....
 ├── e2e
 │    ├── pages
 │        ├── ExampelPage.ts
 │    ├── tests
 │        ├── example.e2e.test.ts      # End-to-end tests
 │    ├── visual
 │        ├── example.visual.test.ts   # Visual regression tests
 ├── scripts/
 │    ├── docker
 │        ├── result.sh
 │        ├── summary.sh
 │        ├── test.sh
 ├── playwright-report
 ├── playwright.config.js              # Playwright configuration file
```

### What are some of files/folders that you see during the framework tests execution

1. 📂 `e2e/tests/visual/*.ts-snapshots/` folder: is you use the `assertVisual()` method in any of your test you will see this folder alongside the spec folder, this is purely intentional is a folder representing your snapshot images generated during the executions. We don't version any snapshot different than `e2e/**/*-snapshots/*-page-*-linux.png` because that is the format used in our docker environment, any other snapshot i.e. darwin for OSX or Windows will be avoided in the versioning of the code.
2. 📂 `test-results/` folder: stores our screenshots/traces/videos/json output result files, this is autogenerated from docker and is not versioned in the code.
3. 📂 `playwright-report/` folder: the autogenerated html report from playwright and is not versioned in the code.
4. 📝 `output.txt` file: this is the execution report of the tests, this is generated from local and docker executions you will see the same file for both types of execution, this file is not versioned in the code.
5. 📝 `results.txt` file: this is a dummy file that is generated if all the test pass, this is a way to know if the docker execution pass outside of the container but don't worry all the test execution data is copied outside the container in their corresponding folders, this file is not versioned in the code.

## What is this framework about?

The idea is simple, generate a basic boilerplate template to perform fast automation testing easy using screen recording and also provides a easy and assisted way to perform visual regression on the go. In contrast to normal functional assertions verifying individual or specific expectations like text labels values or specific elements or page sections, the visual regression perform validations over screenshots (or snapshots as the framework defines it) allowing us to validate more elements in a single image analysis validation performed pixel by pixel comparison between a base snapshot and a screenshot captured in teh test execution.

This approach has some benefits:

1. No need to assert individual parts of the page, all the info is captured in the snapshot and is verified pixel y pixel. This example explains how multiple assertions can be validated using a single image:

    ```ts
    expect(divElement.innerText).toEqual("Some value");
    expect(labelElement.innerText).toEqual("Other value");
    expect(buttonElement.innerText).toEqual("And another value");
    ```

    Can be validated using a single image assertion:

    ```ts
    assertVisual(page, "home-page.png");
    ```

2. Snapshots captures more detail than just text or number values, it captures visual aspects of the page as positions/colors/fonts/sizes of elements. Allowing us to test more closely "what user see".

## An easy way to develop new Test Scripts

Playwright offers different ways to develop new test scripts based in a screen recorder, this will suffice for basic os fast script test but if you need more complex test you can develop using page objects or even make your own scripts using playwright official documentation.

### Record a new test script using yarn codegen command

You can run `yarn new:test` to develop a local test script, a new window will open and a new test file will be generated under `./e2e/tests/newtest.ts`. Then you can proceed with interact with the page and all the interaction will be saved under the spec file. Then you can manually add you own assertions or even perform visual assertions using our own `assertVisual` method. This framework including automatic linting validation so any change performed over the scripts will be automatically formatted after you save the file.

You can find more info about this feature in the [official Playwright codegen documentation](https://playwright.dev/docs/codegen#generate-tests-with-the-playwright-inspector).

### Record a new test using Playwright VSCode extension

Alternatively you can use the official [Playwright VScode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) to generate new test scripts. You can follow the instruction under [Generate tests in VS Code](https://playwright.dev/docs/codegen#generate-tests-in-vs-code) in the official Playwright documentation. this feature will allow you to record new test scripts in a [new spec test file](https://playwright.dev/docs/codegen#record-a-new-test) or even in [an existing developed test spec](https://playwright.dev/docs/codegen#record-at-cursor).

## Best Practices

1. HardCoded Waits 😱:

    Please don't use `page.waitForTimeout()` to avoid hard coded wait times over the framework, playwright offers automatic wait times with 30secs by default so we discourage the use of manual waits over the test.

2. The use of `page.pause()`:

    When you are defining you new test scripts or flow you can use the `page.pause()` method to pause the dev tools in specific points of the scripts. This is intended to be used in dev phases and only will work under the playwright debugger (it doesn't affect the local test or docker test execution, so keep in mind that). This is useful to debug part of the test in the dev tools. In our framework this will only work when you use the [`npx playwright test --debug command`](https://playwright.dev/docs/debug#run-in-debug-mode-1).

## Adding Playwright Features developed by LodGerin

LodGerin has worked with features that are independent, which means you can create your own framework based on the necessity of your project.

Current features developed:

- Testrail
- Browserstack

To integrate the features in a customized branch for you, follow the steps:

1. Make sure you have checked out the `master` branch.
2. Fetch the changes from the remote repository `git fetch`.
3. Create a new branch where it will contain all the customized features `git checkout -b nameOfYourBranch`.
4. Use `git merge featureToIntegrate` to add an integration to your branch, for example: `git merge testrail`.
5. If there are conflicts, fix them.
    5.1 Make sure you're accepting changes from both branches (in the previous example between master and testrail).
6. `git merge --continue` to continue the merging action from the feature to your custom branch.
7. You'll receive a message that says Merge branch 'name of branch' into your branch recently created.
8. Once you merge your branches, update all dependencies with `yarn install`.
9. Once you have the 'Done' output from the Yarn console, you're good to go.

### TestRail

TestRail is a web-based test case management tool. It is used by testers, developers and team leaders to manage, track, and organise software testing efforts. LodGerin has worked in a Playwright library that will create a test run and will add a execution for that test run automatically.

**Branch with the functionality:** `testrail`

### Browserstack

BrowserStack enables you to run automated tests on your internal development environments, on localhost, and from behind a corporate firewall. This feature is called Local Testing. LodGerin has worked in a integration with this current framework

**Branch with the functionality:** `browserstack`
