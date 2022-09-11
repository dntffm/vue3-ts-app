<template>
    <div class="content-wrapper">
        <!-- Content -->
        <div class="container-xxl flex-grow-1 container-p-y">
            <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light">/</span> Courses
            </h4>

            <div class="modal fade" id="exLargeModal" tabindex="-1" aria-modal="true"
            role="dialog">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel4">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="saveCourse">
                        <div class="modal-body">
                            <h6 class="mt-4">General</h6>
                            <div class="row">
                                <div class="col mb-3">
                                    <div class="form-check form-switch mb-2">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Publish this course</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 mb-3">
                                    <label for="nameExLarge" class="form-label">Thumbnail</label>
                                    <div class="border d-flex flex-column justify-content-center align-items-center cursor-pointer" v-if="uploadedImage === null" @click="filePicker">
                                        <span class="tf-icons bx bx-upload"></span>
                                        <span>Upload image</span>
                                        <input class="d-none" type="file" accept="image/*" id="thumbnail" @change="filePickerChange">
                                    </div>
                                    <div class="border d-flex flex-column justify-content-center align-items-center cursor-pointer" v-else @click="filePicker">
                                        <img :src="uploadedImage" alt="Uploaded image" style="width: 100%;">
                                        <input class="d-none" type="file" accept="image/*" id="thumbnail" @change="filePickerChange">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col mb-3">
                                    <label for="course_name" class="form-label">Course Name</label>
                                    <input type="text" id="course_name" class="form-control" placeholder="Enter Course Name" v-model="courseData.course_name">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col mb-3">
                                    <label for="description" class="form-label">Description</label>
                                    <textarea id="description" class="form-control" placeholder="Hi, you should buy this course, i think ...." v-model="courseData.description"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col mb-3">
                                    <label for="price" class="form-label">Price</label>
                                    <input type="number" id="price" class="form-control" placeholder="Enter The Course Price $.$" v-model="courseData.price">
                                </div>
                                <div class="col mb-3">
                                    <label for="discount" class="form-label">Discount</label>
                                    <input type="number" id="discount" class="form-control" placeholder="People always like discount" min="0" max="100">
                                </div>
                            </div>
                            <div class="row g-2">
                                <div class="col mb-0">
                                    <label for="category" class="form-label">Category</label>
                                    <select class="form-select" id="category" aria-label="Default select example" v-model="courseData.course_category">
                                        <option disabled>Choose one of these categories, not more!</option>
                                        <option v-for="(cc, i) in courseCategories" :key="i" :value="cc.id">{{cc.course_category_name}}</option>
                                    </select>
                                </div>
                            </div>
                            <h6 class="mt-4">Course Sections</h6>
                            <div class="row">
                                <div class="col-12 mb-3" v-for="(sc, i) in sections" :key="i">
                                    <input type="text" class="form-control" placeholder="Enter Section Name" v-model="sections[i].section_name">
                                </div>
                                <div class="col-3">
                                    <button type="button" class="btn btn-outline-secondary" @click="addSection">
                                      <span class="tf-icons bx bx-plus-circle"></span>&nbsp; Add section
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h5>
                                List courses
                            </h5>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exLargeModal">
                                Add new course
                            </button>
                        </div>
                        <div class="table-responsive text-nowrap">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Course Name</th>
                                        <th>Description</th>
                                        <th>Price $</th>
                                        <th>Discount</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(c, i) in courses" :key="i">
                                        <td>{{c.course_name}}</td>
                                        <td>{{c.description}}</td>
                                        <td>{{c.price}}</td>
                                        <td>{{c.discount}}</td>
                                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                                        <td>
                                            <div class="dropdown">
                                                <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bx bx-dots-vertical-rounded"></i>
                                                </button>
                                                <div class="dropdown-menu" style="">
                                                    <a class="dropdown-item" href="javascript:void(0);"><i
                                                            class="bx bx-edit-alt me-1"></i> Edit</a>
                                                    <a class="dropdown-item" href="javascript:void(0);"><i
                                                            class="bx bx-trash me-1"></i> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        onMounted,
        reactive,
        ref
    } from '@vue/runtime-core'
    import axios from 'axios';
    export default {
        setup() {
            let courses = ref([]);
            let pageLoading = ref(true);
            let articles = ref([]);
            let uploadedImage = ref(null);
            let sections = ref([]);
            let courseCategories = ref([]);
            let courseData = reactive({
                course_name: "",
                description: "",
                price: 0,
                discount: 0,
                thumbnail: null,
                course_category: null,
                course_sections: null
            });

            function filePicker() {
                let file = document.getElementById("thumbnail");
                file.click();
            }

            function filePickerChange(e) {
                let file = e.target.files[0]
                uploadedImage.value = URL.createObjectURL(file);
                courseData.thumbnail = file;
            }

            function addSection() {
                sections.value.push({
                    section_name: ""
                })
            }

            function saveCourse() {
                const apiUrl =
                    import.meta.env.VITE_API_URL;
                courseData.course_sections = sections.value;
                courseData.thumbnail = 1;
                
                axios.post(`${apiUrl}/courses`, courseData, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                })
                .then(res => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            }

            onMounted(() => {
                const apiUrl =
                    import.meta.env.VITE_API_URL;
                axios.get(`${apiUrl}/courses`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        }
                    })
                    .then(res => {
                        courses.value = res.data.data;
                        console.log(courses)
                    })
                    .catch(err => {
                        console.log(err);
                    })
                
                axios.get(`${apiUrl}/course-categories`, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        }
                    })
                    .then(res => {
                        courseCategories.value = res.data.data;
                        pageLoading.value = false;
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })

            return {
                pageLoading,
                articles,
                filePicker,
                filePickerChange,
                uploadedImage,
                sections,
                addSection,
                courseData,
                courseCategories,
                saveCourse,
                courses
            }
        }
    }
</script>