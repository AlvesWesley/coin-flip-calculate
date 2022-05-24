type SideOfTheCoin = 'HEADS' | 'TAILS'

const COIN: [SideOfTheCoin, SideOfTheCoin] = ['HEADS', 'TAILS']

export function tossCoin(): SideOfTheCoin {
  const random = Math.floor(Math.random() * 10)
  const sideOfTheCoin = COIN[random % 2]

  return sideOfTheCoin
}

export function generateSequence(num: number): SideOfTheCoin[] {
  let counter = 0
  const sequence: SideOfTheCoin[] = []

  while (counter < num) {
    const sideOfTheCoin = tossCoin()
    sequence.push(sideOfTheCoin)

    counter++
  }

  return sequence
}

interface Step {
  currentSide: SideOfTheCoin
  nextSide: SideOfTheCoin
  lastSide?: SideOfTheCoin
  isSequence: boolean
  currentSequenceOfHeads: number
  currentSequenceOfTails: number
  maximumSequenceOfHeads: number
  maximumSequenceOfTails: number
}

interface CalculateMaximumOutput {
  maximum: Record<Lowercase<SideOfTheCoin>, number>
  stepByStep: Step[]
}

export function calculateMaximum(
  sequence: SideOfTheCoin[]
): CalculateMaximumOutput {
  let currentSequenceOfHeads = 0
  let currentSequenceOfTails = 0
  let maximumSequenceOfHeads = 0
  let maximumSequenceOfTails = 0
  let lastSide: SideOfTheCoin | undefined
  let isSequence = false
  let stepByStep: Step[] = []

  for (let i = 0; i < sequence.length; i++) {
    const currentSide = sequence[i]
    const nextSide = sequence[i + 1]
    const sequenceFinished = !nextSide

    if (sequenceFinished) continue

    const isCurrentEqualNext = currentSide === nextSide

    if (!isCurrentEqualNext) {
      if (nextSide === 'HEADS') currentSequenceOfHeads = 0

      if (nextSide === 'TAILS') currentSequenceOfTails = 0
    }

    if (isCurrentEqualNext && nextSide === lastSide) {
      if (nextSide === 'HEADS') {
        currentSequenceOfHeads++

        if (currentSequenceOfHeads > maximumSequenceOfHeads)
          maximumSequenceOfHeads = currentSequenceOfHeads
      }

      if (nextSide === 'TAILS') {
        currentSequenceOfTails++

        if (currentSequenceOfTails > maximumSequenceOfTails)
          maximumSequenceOfTails = currentSequenceOfTails
      }

      isSequence = true
    } else {
      isSequence = false
    }

    lastSide = nextSide

    stepByStep.push({
      currentSide,
      nextSide,
      lastSide,
      isSequence,
      currentSequenceOfHeads,
      currentSequenceOfTails,
      maximumSequenceOfHeads,
      maximumSequenceOfTails
    })
  }

  return {
    maximum: {
      heads: maximumSequenceOfHeads,
      tails: maximumSequenceOfTails
    },
    stepByStep
  }
}

interface CalculateDistributionOutput {
  totalHeads: number
  totalTails: number
  headsPercentage: number
  tailsPercentage: number
}

export function calculateDistribution(
  sequence: SideOfTheCoin[]
): CalculateDistributionOutput {
  const totalHeads = sequence.filter(side => side === 'HEADS').length
  const totalTails = sequence.filter(side => side === 'TAILS').length
  const headsPercentage = (totalHeads / sequence.length) * 100
  const tailsPercentage = (totalTails / sequence.length) * 100

  return {
    totalHeads,
    totalTails,
    headsPercentage,
    tailsPercentage
  }
}
