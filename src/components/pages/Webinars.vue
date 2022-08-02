<style>
.imaged-header{
    background-image: url('@/assets/img/undraw_fatherhood_-7-i19.svg');
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
                <span class="text-muted fw-light">/</span> Webinars
            </h4>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header imaged-header">
                            <h5>Webinars</h5>
                            <p>Realtime meeting with mentor</p>
                        </div>
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-md-4" v-for="i in 12" :key="i">
                                    <div class="card mb-3">
                                        <div class="row g-0">
                                            <div class="col-md">
                                                <img class="card-img card-img-left"
                                                    src="https://dummyimage.com/600x400/000/fff"
                                                    alt="Card image" />
                                            </div>
                                            <div class="col-md">
                                                <div class="card-body">
                                                    <p class="card-text">Category</p>
                                                    <div>
                                                        <h5 class="card-title fw-bold">
                                                            How to make someone love you
                                                        </h5>
                                                        <p>Date: 02 July 2022 18:00 WIB</p>
                                                    </div>
                                                    <router-link to="/courses/class/1">
                                                        <button role="button" class="btn btn-sm btn-primary rounded-pill mt-4">Register Event</button>
                                                    </router-link>
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
            </div>
        </div>
    </div>
</template>