<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
    <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md p-6 space-y-4"
        data-v0-t="card"
    >
      <div class="flex flex-col space-y-1.5 p-6">
        <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">AI Model Converter</h3>
        <p class="text-sm text-muted-foreground">Convert between different AI models using an open API.</p>
      </div>
      <div class="p-6">
        <the-form>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="prompt"
              >
                Prompt
              </label>
              <textarea
                  class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="prompt"
                  placeholder="Enter your prompt"
                  rows="3"
                  v-model="formData.prompt"
              ></textarea>
            </div>
            <base-select-el select-label="Select models" label="Model" :selects="models" selectedValue="model"></base-select-el>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <base-select-el select-label="Select languages" label="Language" :selects="languages" selectedValue="language"></base-select-el>
            <div class="flex items-end">
              <button
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
              >
                Convert
              </button>
            </div>
          </div>
        </the-form>
      </div>
      <div class="flex items-center p-6">
        <div class="grid gap-2">
          <div class="flex items-center justify-between">
            <span>Conversion Rate:</span>
            <span class="font-medium">1 GPT-4 = 50,000 GPT-3.5</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Converted Prompt:</span>
            <span class="font-medium ml-2">{{ formData.prompt }}</span>
          </div>
          <div v-if="error">
            <span class="text-red-500">{{ error }}</span>
          </div>
          <div class="flex items-center justify-between" v-if="message">
            <span>Result:</span>
            <span class="font-medium ml-2">{{ message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import BaseSelectEl from "@/components/UI/BaseSelectEl.vue";
import TheForm from "@/components/layouts/TheForm.vue";

export default {
  name: 'App',
  components: {TheForm, BaseSelectEl},
  provide() {
    return {
      handleChange: this.handleChange,
      submitForm: this.calculateTokens,
    };
  },
  data() {
    return {
      formData: [
        prompt,
      ],
      models: ['GPT-4-32k', 'GPT-4', 'GPT-3.5-Turbo'],
      languages: ['English', 'Vietnamese'],
      pricing: {
        'GPT-4-32k': 60.00,
        'GPT-4': 30.00,
        'GPT-3.5-Turbo': 0.50,
      },
      result: null,
      error: null,
      price: 0,
      message: null,
    };
  },
  methods: {
    handleChange(event) {
      if (event.target.dataset.value === 'model') {
        this.formData.model = event.target.value;
      } else {
        this.formData.language = event.target.value;
      }
    },
    async calculateTokens() {
      const data = Object.assign({}, this.formData);
      try {
        const response = await axios.post('https://tiktoken-beta.vercel.app/calculate_tokens', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        this.result = response.data;
        this.error = null;
        this.calculatePrice(this.formData.model, this.result.tokens);
        this.message = `
                Conversion successful 👌👌🏻. 
                You have received ${this.result.tokens} tokens ⛳. 
                Price: $${this.price} USD 💲.
        `;
      } catch (error) {
        if (error.message.includes('NetworkError')) {
          this.error = 'No response received from server. Please check your network connection.';
        } else {
          this.error = `Error: ${error.message}`;
        }
        console.error('Error calculating tokens:', error);
      }
    },
    calculatePrice(model, tokenAmount) {
      const pricePerMillionTokens = this.pricing[model];
      this.price = (tokenAmount / 1000000) * pricePerMillionTokens;
    },
  },
}
</script>

<style scoped>
.bg-card {
  background-color: #ffffff;
}
</style>
