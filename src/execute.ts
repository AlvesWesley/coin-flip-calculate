import {
  generateSequence,
  calculateMaximum,
  calculateDistribution
} from './logic'

interface ExecuteOptions {
  num: number
  showSequence?: boolean
  showStepByStep?: boolean
}

export function execute(options: ExecuteOptions): void {
  const { num, showSequence, showStepByStep } = options
  const sequence = generateSequence(num)
  const maximumResult = calculateMaximum(sequence)
  const distributionResult = calculateDistribution(sequence)
  const { maximum, stepByStep } = maximumResult

  if (showSequence) console.info(sequence)

  if (showStepByStep) console.info(stepByStep)

  const { heads, tails } = maximum
  const { totalHeads, totalTails, headsPercentage, tailsPercentage } =
    distributionResult

  console.info(
    `\nTotal coin flips: ${num}\n` +
      `The longest sequence of heads is: ${heads}\n` +
      `The longest sequence of tails is: ${tails}\n` +
      `The total of heads is: ${totalHeads}\n` +
      `The total of tails is: ${totalTails}\n` +
      `The percentage of heads is: ${headsPercentage}%\n` +
      `The percentage of tails is: ${tailsPercentage}%\n`
  )
}
