<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->
      <aside
        id="layout-menu"
        class="layout-menu menu-vertical menu bg-menu-theme"
        v-if="$route.name != 'coursesclass'"
      >
        <div class="text-center">
          <span>
            <img
              src="../../assets/ts-logo.png"
              alt="the-skills logo"
              style="width: 75px"
            />
          </span>
          <!-- <span class="app-brand-text demo menu-text fw-bolder ms-2"
            >THE-SKILLS.ID</span
          > -->


          <a
            href="javascript:void(0);"
            class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i class="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
          <!-- Dashboard -->
          <li
            v-for="(feature, index) in features"
            :key="index"
            :class="`menu-item ${'/'+$route.name === feature.slug || ($route.name === 'dashboard' && feature.slug === '/') ? 'active' : ''}`"
          >
            <router-link :to="feature.slug" class="menu-link">
              <i :class="`menu-icon tf-icons bx ${feature.icon}`"></i>
              <!-- <div data-i18n="Analytics">{{feature.name}}</div> -->
            </router-link>
          </li>
        </ul>
      </aside>
      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->

        <nav
          class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
          id="layout-navbar"
          v-if="$route.name != 'coursesclass'"
        >
          <div
            class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
          >
            <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
              <i class="bx bx-menu bx-sm"></i>
            </a>
          </div>

          <div
            class="navbar-nav-right d-flex align-items-center"
            id="navbar-collapse"
          >
            <!-- Search -->
            <div class="navbar-nav align-items-center">
              <div class="nav-item d-flex align-items-center">
                <i class="bx bx-search fs-4 lh-0"></i>
                <input
                  type="text"
                  class="form-control border-0 shadow-none"
                  placeholder="Search..."
                  aria-label="Search..."
                />
              </div>
            </div>
            <!-- /Search -->

            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <!-- User -->
              <li class="nav-item navbar-dropdown dropdown-user dropdown">
                <a
                  class="nav-link dropdown-toggle hide-arrow"
                  href="javascript:void(0);"
                  id="dr-btn"
                  data-bs-toggle="dropdown"
                >
                  <div class="avatar avatar-online">
                    <img
                      src="https://dummyimage.com/600x400/000/fff"
                      alt
                      class="w-px-40 h-auto rounded-circle"
                    />
                  </div>
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dr-btn">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar avatar-online">
                            <img
                              src="https://dummyimage.com/600x400/000/fff"
                              alt
                              class="w-px-40 h-auto rounded-circle"
                            />
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <span class="fw-semibold d-block">John Doe</span>
                          <small class="text-muted">Admin</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bx bx-user me-2"></i>
                      <span class="align-middle">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bx bx-cog me-2"></i>
                      <span class="align-middle">Settings</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <span class="d-flex align-items-center align-middle">
                        <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                        <span class="flex-grow-1 align-middle">Billing</span>
                        <span
                          class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20"
                          >4</span
                        >
                      </span>
                    </a>
                  </li>
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <a class="dropdown-item" href="auth-login-basic.html">
                      <i class="bx bx-power-off me-2"></i>
                      <span class="align-middle">Log Out</span>
                    </a>
                  </li>
                </ul>
              </li>
              <!--/ User -->
            </ul>
          </div>
        </nav>

        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->
      
          <RouterView />
          <!-- / Content -->

          <!-- Footer -->

          <!-- / Footer -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          name: "Dashboard",
          slug: "/",
          icon: "bx-home-circle"
        },
        {
          name: "My Class",
          slug: "/myclass",
          icon: "bx-notepad"
        },
        {
          name: "Courses",
          slug: "/courses",
          icon: "bx-book"
        },
        {
          name: "Agendas",
          slug: "/agendas",
          icon: "bxl-zoom"
        },
        {
          name: "Articles",
          slug: "/articles",
          icon: "bx-note"
        },
        {
          name: "Webinars",
          slug: "/webinars",
          icon: "bx-webcam"
        },
      ],
    };
  },
  mounted(){
    // Initialize menu togglers and bind click on each
    let menuToggler = document.querySelectorAll('.layout-menu-toggle');

    menuToggler.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        window.Helpers.toggleCollapsed();
      });
    });
  }
};
</script>
