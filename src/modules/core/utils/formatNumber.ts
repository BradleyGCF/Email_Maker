export const formatNumber = (
  value: number | bigint,
  {
    locales = 'de-DE',
    option = { currency: 'USD', style: 'currency' },
  }: {
    locales?: string | string[] | undefined
    option?: Intl.NumberFormatOptions | undefined
  } = {}
) => {
  try {
    return new Intl.NumberFormat(locales, option).format(value)
  } catch (error) {
    console.error(error)
  }
}
