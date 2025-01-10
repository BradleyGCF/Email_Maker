export const formatDate = (
  date: number | Date | undefined,
  {
    locales = 'es-ES',
    option = { dateStyle: 'long' },
  }: {
    locales?: string | string[] | undefined
    option?: Intl.DateTimeFormatOptions | undefined
  } = {}
) => {
  try {
    return new Intl.DateTimeFormat(locales, option).format(date)
  } catch (error) {
    console.error(error)
  }
}
