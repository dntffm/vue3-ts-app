<template>
  <div v-if="!isNotUseBody">
    <Body />
  </div>
  <div v-else>
    <Login v-if="$route.name === 'login'" />
    <Register v-if="$route.name === 'register'" />
  </div>
</template>

<script>
import Body from "./components/layouts/Body.vue";
import Login from "./components/pages/Login.vue";
import Register from "./components/pages/Register.vue";
export default {
  components: {
    Body,
    Login,
    Register,
  },
  data() {
    return {
      isNotUseBody: false,
    };
  },
  created() {
    let filePath = window.location.pathname.split("/")[1];

    if (filePath === "login" || filePath === "register")
      this.isNotUseBody = true;
  },
};
</script>
