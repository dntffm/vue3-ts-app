<style>
.imaged-header{
    background-image: url('@/assets/img/undraw_fatherhood_-7-i19.svg');
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 200px;
    height: 100%;
}

.vc-container {
    width: 100%;
    overflow-x: scroll;
}

.vc-day{
    border: 1px solid #8592a383;
    padding: 0 5px 3px 5px;
    min-height: 100px;
    min-width: 100px;
}

.vc-header {
    padding: 10px 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.weekday-1, .weekday-7 {
    background-color: #a8b0ba83;
}

.item-event {
    cursor: pointer;
}

.item-event:hover {
    color: #fff;
    background-color: #4b4dc0;
    border-color: #5f61e6;
    transform: translateY(-1px);
}
</style>
<template>
    <div class="content-wrapper">
        <!-- Content -->
        <div class="container-xxl flex-grow-1 container-p-y">
            <h4 class="fw-bold py-3 mb-4">
                <span class="text-muted fw-light">/</span> Agendas
            </h4>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Detail Event</h5>
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <button type="button" class="btn btn-primary">Enter Event</button>
                    </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header imaged-header">
                            <h5>Agendas</h5>
                            <p>All of my agendas</p>
                        </div>
                        <div class="card-body">
                            <v-calendar :masks="masks" :attributes="attributes" is-expanded>
                                <template v-slot:day-content="{ day, attributes }">
                                        <span>{{ day.day }}</span>
                                        <p v-for="attr in attributes" :key="attr.key" class="item-event bg-primary text-white p-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            {{ attr.customData.title }}
                                        </p>
                                </template>
                            </v-calendar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: 'WWW',
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: 'Webinar 1.',
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Webinar 2',
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Class meeting.",
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Class meeting',
            class: 'bg-indigo-500 text-white',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Webinar Python Programming.',
            class: 'bg-teal-500 text-white',
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Coding practice.",
            class: 'bg-pink-500 text-white',
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Algorithm & Structure data',
            class: 'bg-orange-500 text-white',
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
      ],
    };
  },
};
</script>