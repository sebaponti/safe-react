import {
  isDateLabel,
  isLabel,
  isConflictHeader,
  isTransactionSummary,
  isTransferTxInfo,
  isSettingsChangeTxInfo,
  isCustomTxInfo,
  isMultiSendTxInfo,
  isCreationTxInfo,
  isStatusSuccess,
  isStatusFailed,
  isStatusCancelled,
  isStatusPending,
  isStatusPendingFailed,
  isStatusAwaitingConfirmation,
  isStatusAwaitingExecution,
  isStatusWillBeReplaced,
  isMultiSigExecutionDetails,
  isModuleExecutionInfo,
  isMultisigExecutionInfo,
  isTxPending,
  isTxQueued,
} from '../gateway.d'

describe('isDateLabel', () => {
  it('returns true when it is a date label', () => {
    const data = {
      type: 'DATE_LABEL',
    }

    // @ts-ignore - Sending an invalid object
    expect(isDateLabel(data)).toBe(true)
  })
  it('returns false when it is not a date label', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isDateLabel(data)).toBe(false)
  })
})
describe('isLabel', () => {
  it('returns true when it is a label', () => {
    const data = {
      type: 'LABEL',
    }

    // @ts-ignore - Sending an invalid object
    expect(isLabel(data)).toBe(true)
  })
  it('returns false when it is not a label', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isLabel(data)).toBe(false)
  })
})
describe('isConflictHeader', () => {
  it('returns true when it is a conflict header', () => {
    const data = {
      type: 'CONFLICT_HEADER',
    }

    // @ts-ignore - Sending an invalid object
    expect(isConflictHeader(data)).toBe(true)
  })
  it('returns false when it is not a conflict header', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isConflictHeader(data)).toBe(false)
  })
})
describe('isTransactionSummary', () => {
  it('returns true when it is a transaction summary', () => {
    const data = {
      type: 'TRANSACTION',
    }

    // @ts-ignore - Sending an invalid object
    expect(isTransactionSummary(data)).toBe(true)
  })
  it('returns false when it is not a transaction summary', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isTransactionSummary(data)).toBe(false)
  })
})
describe('isTransferTxInfo', () => {
  it('returns true when it is a transfer transaction', () => {
    const data = {
      type: 'Transfer',
    }

    // @ts-ignore - Sending an invalid object
    expect(isTransferTxInfo(data)).toBe(true)
  })
  it('returns false when it is not a transfer transaction', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isTransferTxInfo(data)).toBe(false)
  })
})
describe('isSettingsChangeTxInfo', () => {
  it('returns true when it is a settings change transaction', () => {
    const data = {
      type: 'SettingsChange',
    }

    // @ts-ignore - Sending an invalid object
    expect(isSettingsChangeTxInfo(data)).toBe(true)
  })
  it('returns false when it is not a settings change transaction', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isSettingsChangeTxInfo(data)).toBe(false)
  })
})

describe('isCustomTxInfo', () => {
  it('returns true when it is a custom transaction', () => {
    const data = {
      type: 'Custom',
    }

    // @ts-ignore - Sending an invalid object
    expect(isCustomTxInfo(data)).toBe(true)
  })
  it('returns false when it is not a custom transaction', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isCustomTxInfo(data)).toBe(false)
  })
})
describe('isMultiSendTxInfo', () => {
  it('returns true when it is a custom multisend transaction', () => {
    const data = {
      type: 'Custom',
      methodName: 'multiSend',
    }

    // @ts-ignore - Sending an invalid object
    expect(isMultiSendTxInfo(data)).toBe(true)
  })
  it('returns false when it is not a custom multisend transaction', () => {
    const data = {
      type: 'TEST',
      methodName: 'multiSend',
    }

    // @ts-ignore - Sending an invalid object
    expect(isMultiSendTxInfo(data)).toBe(false)
  })
  it('returns false when it is just a multisend transaction', () => {
    const data = {
      methodName: 'multiSend',
    }

    // @ts-ignore - Sending an invalid object
    expect(isMultiSendTxInfo(data)).toBe(false)
  })
  it('returns false when it is not a custom multisend transaction', () => {
    const data = {
      type: 'TEST',
      methodName: 'multiSend',
    }

    // @ts-ignore - Sending an invalid object
    expect(isMultiSendTxInfo(data)).toBe(false)
  })
})

describe('isCreationTxInfo', () => {
  it('returns true when it is a creation transaction', () => {
    const data = {
      type: 'Creation',
    }

    // @ts-ignore - Sending an invalid object
    expect(isCreationTxInfo(data)).toBe(true)
  })
  it('returns false when it is not a creation transaction', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isCreationTxInfo(data)).toBe(false)
  })
})
describe('isStatusSuccess', () => {
  it('returns true when it is a "SUCCESS" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusSuccess('SUCCESS')).toBe(true)
  })
  it('returns false when it is not "SUCCESS" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusSuccess('TEST')).toBe(false)
  })
})
describe('isStatusFailed', () => {
  it('returns true when it is a "FAILED" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusFailed('FAILED')).toBe(true)
  })
  it('returns false when it is not "FAILED" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusFailed('TEST')).toBe(false)
  })
})
describe('isStatusCancelled', () => {
  it('returns true when it is a "CANCELLED" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusCancelled('CANCELLED')).toBe(true)
  })
  it('returns false when it is not "CANCELLED" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusCancelled('FAILES')).toBe(false)
  })
})
describe('isStatusPending', () => {
  it('returns true when it is a "PENDING" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusPending('PENDING')).toBe(true)
  })
  it('returns false when it is not "PENDING" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusPending('TEST')).toBe(false)
  })
})
describe('isStatusPendingFailed', () => {
  it('returns true when it is a "PENDING_FAILED" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusPendingFailed('PENDING_FAILED')).toBe(true)
  })
  it('returns false when it is not "PENDING_FAILED" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusPendingFailed('TEST')).toBe(false)
  })
})
describe('isStatusAwaitingConfirmation', () => {
  it('returns true when it is a "AWAITING_CONFIRMATIONS" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusAwaitingConfirmation('AWAITING_CONFIRMATIONS')).toBe(true)
  })
  it('returns false when it is not "AWAITING_CONFIRMATIONS" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusAwaitingConfirmation('TEST')).toBe(false)
  })
})
describe('isStatusAwaitingExecution', () => {
  it('returns true when it is a "AWAITING_EXECUTION" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusAwaitingExecution('AWAITING_EXECUTION')).toBe(true)
  })
  it('returns false when it is not "AWAITING_EXECUTION" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusAwaitingExecution('TEST')).toBe(false)
  })
})
describe('isStatusWillBeReplaced', () => {
  it('returns true when it is a "WILL_BE_REPLACED" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusWillBeReplaced('WILL_BE_REPLACED')).toBe(true)
  })
  it('returns false when it is not "WILL_BE_REPLACED" status', () => {
    //@ts-ignore - Sending a string
    expect(isStatusWillBeReplaced('TEST')).toBe(false)
  })
})
describe('isMultiSigExecutionDetails', () => {
  it('returns true when it is multisig execution details', () => {
    const data = {
      type: 'MULTISIG',
    }

    // @ts-ignore - Sending an invalid object
    expect(isMultiSigExecutionDetails(data)).toBe(true)
  })
  it('returns false when it is not multisig multisig execution details', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isMultiSigExecutionDetails(data)).toBe(false)
  })
})
describe('isModuleExecutionInfo', () => {
  it('returns true when it is module execution info', () => {
    const data = {
      type: 'MODULE',
    }

    // @ts-ignore - Sending an invalid object
    expect(isModuleExecutionInfo(data)).toBe(true)
  })
  it('returns false when it is not module execution info', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isModuleExecutionInfo(data)).toBe(false)
  })
})
describe('isMultisigExecutionInfo', () => {
  it('returns true when it is multisig execution info', () => {
    const data = {
      type: 'MULTISIG',
    }

    // @ts-ignore - Sending an invalid object
    expect(isMultisigExecutionInfo(data)).toBe(true)
  })
  it('returns false when it is not multisig execution info', () => {
    const data = {
      type: 'TEST',
    }

    // @ts-ignore - Sending an invalid object
    expect(isMultisigExecutionInfo(data)).toBe(false)
  })
})
describe('isTxPending', () => {
  it('returns true when it is a pending transaction status', () => {
    const statuses = ['PENDING', 'PENDING_FAILED']
    statuses.forEach((status) => {
      // @ts-ignore - Sending an invalid object
      expect(isTxPending(status)).toBe(true)
    })
  })
  it('returns false when it is not a pending transaction status', () => {
    //@ts-ignore - Sending a string
    expect(isTxPending('TEST')).toBe(false)
  })
})
describe('isTxQueued', () => {
  it('returns true when it is a queued transaction status', () => {
    const statuses = ['PENDING', 'PENDING_FAILED', 'AWAITING_EXECUTION', 'AWAITING_CONFIRMATIONS', 'WILL_BE_REPLACED']
    statuses.forEach((status) =>
      // @ts-ignore - Sending an invalid object
      expect(isTxQueued(status)).toBe(true),
    )
  })
  it('returns false when it is not a queued transaction status', () => {
    //@ts-ignore - Sending a string
    expect(isTxQueued('TEST')).toBe(false)
  })
})
