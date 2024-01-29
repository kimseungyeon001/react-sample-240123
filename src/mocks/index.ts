export const initMocks = async (): Promise<void> => {
  const { worker } = await import('./browser')
  await worker.start({ onUnhandledRequest: 'bypass' })
}
