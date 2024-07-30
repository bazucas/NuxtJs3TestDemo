<template>
    <div>
        <div class="ml-10 mt-10">
        <select class="border-2 border-blue-500" v-model="fromCurrency">
        <option value="USD">USD (US Dollar)</option>
        <option value="EUR">EUR (Euro)</option>
        <option value="JPY">JPY (Japanese Yen)</option>
        <option value="GBP">GBP (British Pound)</option>
        <option value="AUD">AUD (Australian Dollar)</option>
        <option value="EGP">EGP (Egyptian Pound)</option>
      </select>

      <select class="ml-5 border-2 border-blue-500" v-model="toCurrency">
        <option value="USD">USD (US Dollar)</option>
        <option value="EUR">EUR (Euro)</option>
        <option value="JPY">JPY (Japanese Yen)</option>
        <option value="GBP">GBP (British Pound)</option>
        <option value="AUD">AUD (Australian Dollar)</option>
        <option value="EGP">EGP (Egyptian Pound)</option>
      </select>

      <br><br>

      <input class="border-2 border-blue-500" type="number" v-model="amount" placeholder="Enter amount" />

      <button class="ml-5 btn-teste" @click="execute">Convert</button>

      <div class="mt-5" v-if="conversionRate && amount">
        <h1>
            {{ amount }} {{ fromCurrency }} equals {{ amount * conversionRate }} {{ toCurrency }}
        </h1>
      </div>
      
      </div>
    </div>
  </template>
  

  <script setup>
  
  const apiKey = 'SV90TOORA7CK3RJZ'
  const fromCurrency = ref('USD')
  const toCurrency = ref('EUR')
  const conversionRate = ref(null)
  const amount = ref('')

  const {data, execute} = await useFetch(() => {
    return `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency.value}&to_currency=${toCurrency.value}&apikey=${apiKey}`
  }, {
    immediate: false,
    transform: data => {
      conversionRate.value = Number(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
    }
  })
  </script>

