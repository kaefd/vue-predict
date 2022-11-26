<template>
  <v-container>
    <v-avatar color="info" size="125">
      <v-icon icon="mdi-account-circle" size="125"></v-icon>
    </v-avatar>
    <br />
    <h3>Administrator
      <v-icon color="grey-darken-2" size="20px">mdi-pencil</v-icon>
    </h3>
    <v-container class="my-10 w-75">
      <v-table>
        <tbody>
          <tr>
            <td class="text-left">Nama Lengkap</td>
            <td class="text-left">{{ Name }}</td>
          </tr>
          <tr>
            <td class="text-left">Username</td>
            <td class="text-left">{{ username }}</td>
          </tr>
          <tr>
            <td class="text-left">Email</td>
            <td class="text-left">{{ email }}</td>
          </tr>
          <tr>
            <td class="text-left">Role</td>
            <td class="text-left">{{ role }}</td>
          </tr>
          <tr>
            <td class="text-left">Domisili</td>
            <td class="text-left">{{ domisili }}</td>
          </tr>

        </tbody>
      </v-table>

      <v-btn class="my-10 bg-red">Logout
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      Name: 'Ika Fadila',
      username: 'latteace',
      email: 'ikafadila@gmail.com',
      role: 'admin',
      domisili: 'Kendal'
    }
  }

}
</script>

<style>

</style>