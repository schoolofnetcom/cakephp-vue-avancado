<template>
  <div class="row">
    <div class="content-header">
      <h1>Contas bancárias <small>Gerenciamento de contas</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Suas contas</span>
        </small>
      </div>
    </div>

    <div class="card col s12">

      <div class="card-content">
        <table class="highlight">
          <thead>
          <tr>
            <th>contas</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="account in accounts.data" @click="goTo(account.id)" style="cursor: pointer">
            <td class="valign-wrapper">
              {{ account.attributes.title }} &nbsp;
              <small>agência: {{ account.attributes.agency }} / conta: {{ account.attributes.account_number }}</small>
            </td>
          </tr>
          </tbody>
        </table>
        <pagination resource-data="accounts"></pagination>
      </div>
      <div class="card-action">
        <a href="#/contas/novo">Nova conta</a>
      </div>
    </div>
  </div>

</template>
<script>
  import Pagination from '@/components/SharedComponents/Pagination'

  export default {
    name: 'accounts',
    components: {
      'pagination': Pagination
    },
    methods: {
      goTo: function (id) {
        this.$router.push('/contas/' + id)
      }
    },
    computed: {
      accounts () {
        return this.$store.state.pagination.getList
      }
    }
  }
</script>
