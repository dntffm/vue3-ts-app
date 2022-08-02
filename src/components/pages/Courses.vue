<style>
.imaged-header{
    background-image: url('@/assets/img/undraw_startled_-8-p0r.svg');
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 200px;
    height: 100%;
}
</style>

<template>
    <div class="content-wrapper">
        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">
            <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light">/</span> Courses
            </h4>

            <div class="row">
                <div class="col-md-12">
                    <!-- <div class="row">
            <div class="col-md-12 d-flex justify-content-between">
              <p class="fw-bold">Filter By:</p>
              <select
                class="form-select form-select-sm"
                 aria-label=".form-select-sm example"
                id="inputGroupSelect01"
              >
                <option selected>Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <select
                class="form-select form-select-sm"
                 aria-label=".form-select-sm example"
                id="inputGroupSelect01"
              >
                <option selected>Price</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div> -->

                    <div class="row">
                        <div class="col-md-6 col-12 mb-md-0 mb-4">
                            <div class="card">
                                <div class="card-header imaged-header">
                                    <h5>All Courses</h5>
                                    <p>Explore your passion by join to our courses</p>
                                </div>
                                <div class="card-body">
                                    <div class="row mb-2" v-for="i in 3" :key="i">
                                        <div class="col-md">
                                            <div class="card mb-3">
                                                <div class="row g-0">
                                                    <div class="col-md-4">
                                                        <img class="card-img card-img-left"
                                                            src="https://dummyimage.com/600x400/000/fff"
                                                            alt="Card image" />
                                                    </div>
                                                    <div class="col-md-8">
                                                        <div class="card-body">
                                                            <p class="card-text">Category</p>
                                                            <div class="d-flex justify-content-between">
                                                                <h5 class="card-title fw-bold">
                                                                    How to make someone love you
                                                                </h5>
                                                                <h5 class="fw-bold">Rp. 1000</h5>
                                                            </div>
                                                            <div class="d-flex align-items-center">
                                                                <i class="bx bxs-heart me-2 text-danger"></i>
                                                                <div class="me-auto fw-semibold">10</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item prev">
                                            <a class="page-link" href="javascript:void(0);"><i
                                                    class="tf-icon bx bx-chevrons-left"></i></a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">1</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">2</a>
                                        </li>
                                        <li class="page-item active">
                                            <a class="page-link" href="javascript:void(0);">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">4</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">5</a>
                                        </li>
                                        <li class="page-item next">
                                            <a class="page-link" href="javascript:void(0);"><i
                                                    class="tf-icon bx bx-chevrons-right"></i></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="card border-light h-100">
                                        <img class="card-img-top" src="https://dummyimage.com/600x400/000/fff"
                                            alt="Card image cap">
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </p>
                                            <p>Category: <span class="fw-bold">Art</span></p>
                                            <p>Level: <span class="fw-bold">III</span></p>
                                            <a href="javascript:void(0)" class="btn btn-primary rounded-pill">Join Course</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>