export default defineEventHandler(async (event) => {
  
  const config = useRuntimeConfig(event)
  const { avKey } = config
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${avKey}`;

  const data = await $fetch(url)

  return data
})
