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
        <form class="space-y-4">
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
              ></textarea>
            </div>
            <base-drop-down
                id="dropdownDefaultButton"
                label="Model"
                labelBtn="Select model"
                :selects="['GPT-4', 'GPT-4o', 'GPT-3.5']"
                selectLabel="Select model"
                dropDown="dropDown"
            ></base-drop-down>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <base-drop-down
                id="dropdownDefaultButton1"
                label="Language"
                labelBtn="Select language"
                :selects="['', 'English', 'Vietnamese']"
                selectLabel="Select language"
                dropDown="dropDown1"
            ></base-drop-down>
            <div class="flex items-end">
              <button
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
              >
                Convert
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="flex items-center p-6">
        <div class="grid gap-2">
          <div class="flex items-center justify-between">
            <span>Conversion Rate:</span>
            <span class="font-medium">1 GPT-4 = 50,000 GPT-3.5</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Converted Prompt:</span>
            <span class="font-medium">Your prompt has been converted to GPT-4 format.</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
.bg-card {
  background-color: #ffffff;
}
</style>
