<template>
  <div class="row">
    <div class="content-header">
      <h1>Bancos <small>Gerenciamento de bancos</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Seus bancos</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      <div class="card-content">
        <table class="highlight">
          <thead>
          <tr>
            <th>bancos</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(bank, $index) in banks.data">
            <td class="valign-wrapper">
              {{$index + 1}} - {{ bank.attributes.title }} ({{ bank.attributes.code }})
            </td>
          </tr>
          </tbody>
        </table>
        <pagination resource-data="banks"></pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import Pagination from '@/components/SharedComponents/Pagination'

  export default {
    components: {
      'pagination': Pagination
    },
    computed: {
      banks () {
        return this.$store.state.pagination.getList
      }
    }
  }
</script>
