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
                <span class="text-muted fw-light">/</span> Chapter
            </h4>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header imaged-header">
                            <h5>Class Chapter</h5>
                            <p></p>
                        </div>
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-md-6" v-for="i in 3" :key="i">
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
                                                    <router-link to="/class/1/2">
                                                        <button role="button" class="btn btn-sm btn-primary rounded-pill mt-4">Go</button>
                                                    </router-link>
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
        </div>
    </div>
</template>