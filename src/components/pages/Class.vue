<template>
    <div class="content-wrapper">
        <!-- Content -->
        <div class="container-xxl flex-grow-1 container-p-y">
            <button class="btn btn-primary more-content-btn m-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart"
              aria-controls="offcanvasStart">
              <i class="bx bx-right-arrow"></i>
            </button>
            <div class="d-flex justify-content-between align-items-center">
              <h4 class="fw-bold py-3 my-4">
                <span class="text-muted fw-light">/</span> Materi 1 : Mengenal Sebelah Mata
              </h4>
              <router-link to="/myclass">Back to Home</router-link>
            </div>
            <div class="d-flex justify-content-between mb-3">
              <button class="btn btn-light" type="button">
                Previous: Judulnya
              </button>
              <button class="btn btn-light" type="button">
                Next: Judulnya
              </button>
            </div>
            <div class="m-auto">
              <iframe width="100%" height="380"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe> 
            </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasStart"
          aria-labelledby="offcanvasStartLabel" style="visibility: visible;" aria-modal="true" role="dialog">
          <div class="offcanvas-header">
            <h5 id="offcanvasStartLabel" class="offcanvas-title">List of Contents</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body mx-0">
            <div class="list-group">
              <a href="javascript:void(0);"
                class="flex-column align-items-start border-bottom mb-2" v-for="i in 20" :key="i">
                <div class="d-flex justify-content-between w-100">
                  <h6>Mengenal Sebelah Mata </h6>
                  <i class="bx bx-play-circle"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
}
</script>