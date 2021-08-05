<template>
  <div class="profile">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createprofile"
      >Tambah Data</router-link>
      <router-link class="btn btn-success" to="/editprofile">Edit</router-link>
           
      <br>
      <br>

<h3><font size="5" color="black" face="Cursive" >Profile</font></h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama Lengkap</th>
          <th scope="col">Tentang Saya</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(profil, index) in profile" :key="index">
          <td>{{ profil.namasaya }}</td>
          <td>{{ profil.tentangsaya }}</td>
        </tr>
      </tbody>
    </table>
    <br>

    
<h3><font size="5" color="black" face="Cursive" >Pendidikan</font></h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama Pendidikan</th>
          <th scope="col">Jurusan</th>
          <th scope="col">Tahun</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(profil, index) in profile" :key="index">
          <td>{{ profil.namapendidikan }}</td>
          <td>{{ profil.jurusan }}</td>
           <td>{{ profil.tahun }}</td>
        </tr>
      </tbody>
    </table>
    <br>

<h3><font size="5" color="black" face="Cursive" >Pengalaman Kerja/ Usaha</font></h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nama Usaha</th>
          <th scope="col">Posisi</th>
          <th scope="col">Keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(profil, index) in profile" :key="index">
          <td>{{ profil.namausaha }}</td>
          <td>{{ profil.posisi }}</td>
           <td>{{ profil.keteranganusaha }}</td>
        </tr>
      </tbody>
    </table>
    <br>

<h3><font size="5" color="black" face="Cursive" >Kontak</font></h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Whatsapp</th>
          <th scope="col">Email</th>
           <th scope="col">Instagram</th>
          <th scope="col">Alamat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(profil, index) in profile" :key="index">
          <td>{{ profil.nohp }}</td>
          <td>{{ profil.email }}</td>
           <td>{{ profil.instagram }}</td>
          <td>{{ profil.alamat }}</td>
        </tr>
      </tbody>
    </table>
    <br>
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