<template>
  <div class="login-page" data-model-id="686:7941">
    <div class="login">
      <div class="frame-26">
        <div class="frame-27">
          <div class="frame-28">
            <div class="text-wrapper-18">jls.</div>
          </div>
        </div>

        <div class="frame-29">
          <div class="text-wrapper-19">Translation3 Login</div>

          <form @submit.prevent="handleLogin" class="frame-29">
            <div class="frame-30">
              <div class="input-wrapper">
                <label for="username">Username</label>
                <input
                  id="username"
                  v-model="username"
                  type="text"
                  required
                  :class="{ 'input-error': errors.username }"
                />
                <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
              </div>
              <div class="input-wrapper">
                <label for="password">Password</label>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  required
                  :class="{ 'input-error': errors.password }"
                />
                <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
              </div>
            </div>

            <button
              type="submit"
              class="login-button"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Logging in...' : 'Login' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const username = ref("");
    const password = ref("");
    const errors = ref({ username: "", password: "" });
    const isLoading = ref(false);

    const handleLogin = async () => {
      errors.value = { username: "", password: "" };
      isLoading.value = true;

      if (username.value !== "admin" || password.value !== "password") {
        errors.value.username = "Invalid username or password";
        errors.value.password = "Invalid username or password";
        isLoading.value = false;
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set authentication state
      localStorage.setItem('isAuthenticated', 'true');

      isLoading.value = false;
      router.push("/");
    };

    return {
      username,
      password,
      errors,
      isLoading,
      handleLogin,
    };
  },
});
</script>

<style scoped>
.login-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 96px 0px;
  position: relative;
  width: 100%;
  max-width: 1440px;
}

.frame-26 {
  align-items: center;
  background-color: var(--jls-colourswhite);
  box-shadow: var(--card-shadow);
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 32px;
  padding: 48px;
  position: relative;
}

.frame-27 {
  height: 53px;
  position: relative;
  width: 70.5px;
}

.frame-28 {
  align-items: center;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  padding: 8px;
  position: relative;
}

.text-wrapper-18 {
  color: #000000;
  font-family: "Gilroy-ExtraBold", Helvetica;
  font-size: 54px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 44px;
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-29 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  position: relative;
}

.text-wrapper-19 {
  color: #000000;
  font-family: var(--h1-font-family);
  font-size: var(--h1-font-size);
  font-style: var(--h1-font-style);
  font-weight: var(--h1-font-weight);
  letter-spacing: var(--h1-letter-spacing);
  line-height: var(--h1-line-height);
  margin-top: -1.00px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-30 {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  color: var(--jls-colourseclipse);
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--jls-colourseclipse);
  border-radius: 4px;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
}

.input-error {
  border-color: #ff0000;
}

.error-message {
  color: #ff0000;
  font-size: 14px;
}

.login-button {
  background-color: var(--jls-coloursneso);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--body-CTA-medium-font-family);
  font-size: var(--body-CTA-medium-font-size);
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: var(--jls-coloursneptune);
}

.login-button:disabled {
  background-color: var(--jls-coloursnimbus);
  cursor: not-allowed;
}
</style>
