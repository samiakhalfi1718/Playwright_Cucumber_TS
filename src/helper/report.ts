const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName:"PlayWright Automation Report",
  pageTitle:"BookCart App Test Report",
  metadata: {
    browser: {
      name: "chrome",
      version: "114",
    },
    device: "samia khalfi",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Book cart project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});