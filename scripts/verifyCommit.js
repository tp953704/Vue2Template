const chalk = require('chalk')
const msgPath = process.env.GIT_PARAMS
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

const releaseRE = /^v\d/
// 字要打 5-50個之間
const commitRE = /^(revert: )?(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps)(\(.+\))?: .{5,50}/
console.log(msgPath)
console.log("開始檢核COMMIT文字是否符合規範~~")
if (!releaseRE.test(msg) && !commitRE.test(msg)) {
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        `提交格式不符合規範`
      )}\n\n` +
        chalk.red(
          `  可以參考以下範例:\n\n`
        ) +
        `    ${chalk.green(`feat: add 'comments' option`)}\n` +
        `    ${chalk.green(`fix: handle events on blur (close #28)`)}\n\n` +
        chalk.red(`  See .github/commit-convention.md for more details.\n`)
    )
    process.exit(1)
  }