<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12 mb-2">
                                <div class="row">
                                    <div class="col-md-6" v-if="profile.member.unit">
                                        <div class="card border-secondary">
                                            <div class="card-header">
                                                <div>
                                                    <h2 class="fw-bolder mb-0">Unit & Dinas</h2>
                                                    <p class="card-text">Dinas : {{ profile.member.unit.dinas }} | Unit
                                                        : {{ profile.member.unit.unit }}</p>
                                                </div>
                                                <div class="avatar bg-light-primary p-50 m-0">
                                                    <div class="avatar-content">
                                                        <i class="fa fa-building fa-2x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6" v-if="profile.member.title">
                                        <div class="card border-secondary">
                                            <div class="card-header">
                                                <div>
                                                    <h2 class="fw-bolder mb-0">Jabatan</h2>
                                                    <p class="card-text">{{ profile.member.title.nama }}</p>
                                                </div>
                                                <div class="avatar bg-light-primary p-50 m-0">
                                                    <div class="avatar-content">
                                                        <i class="fa fa-briefcase fa-2x"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="no_anggota">No. Anggota</label>
                                    <input type="text" v-model="profile.member.no_anggota" class="form-control"
                                        id="no_anggota" disabled>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="nopeg">No. Pegawai</label>
                                    <input type="text" v-model="profile.member.nopeg" class="form-control" id="nopeg"
                                        disabled>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="nama">Nama
                                        <Required /></label>
                                    <input type="text" v-model="profile.member.nama" class="form-control" id="nama">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="tempat_lahir">Tempat Lahir
                                        <Required /></label>
                                    <input type="text" v-model="profile.member.tempat_lahir" class="form-control"
                                        id="tempat_lahir">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="tanggal_lahir">Tanggal Lahir
                                        <Required /></label>
                                    <input type="date" v-model="profile.member.tanggal_lahir" class="form-control"
                                        id="tanggal_lahir">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Alamat E-Mail
                                        <Required /></label>
                                    <input type="email" v-model="profile.member.email" class="form-control" id="email">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone">No. Telephone
                                        <Required /></label>
                                    <input type="text" v-model="profile.member.phone" class="form-control" id="phone">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="alert alert-warning" role="alert">
                    <h4 class="alert-heading"><i class="fa fa-exclamation-triangle"></i> Instruksi</h4>
                    <div class="alert-body">
                        <ul class="warning-list">
                            <li>Form dengan Tanda
                                <Required /> adalah wajib diisi / tidak boleh kosong</li>
                            <li>Isi setiap Form dengan data yang benar dan dapat dipertanggung jawabkan</li>
                            <li>Tekan tombol <span class="badge bg-primary pointer" @click="updateData"><strong><i
                                            class="fa fa-check"></i> Update</strong></span> dibawah ini apabila ingin
                                memperbaharui profile</li>
                        </ul>
                    </div>
                </div>
                <div class="d-grid">
                    <button class="btn btn-primary mb-1" @click="updateData" type="submit"><i class="fa fa-check"></i>
                        Update</button>
                    <button class="btn btn-warning" @click="initData"><i class="fa fa-refresh"></i> Reset
                        Profile</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data: () => ({

    error_validation: {},

    profile: {
      member: {
        nama: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        avatar: '',
        title: {
          id: "",
          level: "",
          multiple_member: "n",
          nama: "",
        },
        unit: {
          unit: '',
          dinas: '',
        }
      },
    },
  }),

  mounted() 
  {
    this.initData();
  },

  methods: {
    initData: function() {
      $.LoadingOverlay("show");
      axios.get('/api/profile')
      .then( res => {
        this.profile = res.data;
      })
      .catch( e => {
        console.log(e.response);
      })
      .then(() => {
        $.LoadingOverlay("hide");
      })
    },

    
    updateData: function() {

      swal({
        title: `Akan memperbaharui Profile Anda`,
        text: "Lanjutkan?",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      }).then((value) => {
        if (value) {
          $.LoadingOverlay("show");
          axios.post(`/api/profile`, this.profile)
          .then( res => {
            console.log(res.data);
          })
          .catch( e => {
            console.log(e.response);
          })
          .then(() => {
            $.LoadingOverlay("hide");
          })
        }
      });
    },
  },
}
</script>

<style>
</style>