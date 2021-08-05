<template>
<div class="home">
    </div>

  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../assets/1.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8" v-for="(profil, index) in profile" :key="index">
      <div class="card-body">
        <h5 class="card-title">Ashri Azizah Yolandita</h5>
        <p class="card-text">Saya seorang Mahasiswa Sistem Informasi yang memeiliki motivasi 
          yang tinggi dalam bekerja. Saya memiliki kemampuan berbicara yang baik, saya sering berinteraksi
           dengan siapapun dan saya memiliki kemauan untuk selalu belajar memperbaiki diri.</p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
 <center> <h5 class="card-header">Pendidikan</h5></center>
  <div class="card-body ">
    <h5 class="card-title">Universitas CIC</h5>
    <p class="card-text">Sistem Informasi</p>
    <p class="card-text">2018-Sekarang</p>
  </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
 <center> <h5 class="card-header">Pengalaman Kerja/ Usaha</h5></center>
  <div class="card-body ">
    <h5 class="card-title">Bisnis Online Shop</h5>
    <p class="card-text">Pemilik</p>
    <p class="card-text">Memimpin bisnis dengan omset Rp. 5.000.00 perbulan dan
       sukses memasarkan serta menjual >5jenis produk secara online kepuluhan pelanggan dan 
       Bertanggung jawab dalam pengemasan produk dan pengiriman produk ke seluruh wilayah indonesia
        lewat pengantaran tepat waktu untuk menjamin kepuasan pelanggan.</p>
  </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
 <center> <h5 class="card-header">Kontak</h5></center>
  <div class="card-body ">
    <p class="card-text">895711009</p>
    <p class="card-text">aayolandita@gmail.com</p>
    <p class="card-text">@ylndita</p>
    <p class="card-text">Indramayu</p>
  </div>
</div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import { onMounted, ref } from 'vue';
export default {
  name: "Profile",
  components: {
   
  
  },
  setup(){
    let profile = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/profile')
      .then(response => {
        profile.value = response.data.data
      })
      .catch(error =>{
        console.log(error)
      });
    });
  function angDelete(id){
    axios.delete(`http://127.0.0.1:8000/api/profile/${id}`)
    .then(()=>{
      let z = this.profile.map(profile => profile.id).indexOf(id);
      this.profile.splice(z, 1)
    }).catch(error => {
      console.log(error)
    })
  }
    return {
      profile,
      angDelete
    }
  }
};
</script>

<style>
img{
    height: 200px;
}
</style>
