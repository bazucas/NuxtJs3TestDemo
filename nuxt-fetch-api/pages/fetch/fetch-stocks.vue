<template>
    <div>
      {{ stocks }}
    </div>
  </template>
  
  <script setup>
    const apiKey = 'SV90TOORA7CK3RJZ'
    const {data: stocks} = await useFetch('/query', {
      baseURL: 'https://www.alphavantage.co',
    //   query: { // same thing as params: {}
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'IBM',
        interval: '5min',
        apikey: apiKey
      },
      timeout: 5000 // if the response doesn't arrive in less than 5s, it will be closed
    })
  </script>
  
  <style>
  
  </style>
  
  
  