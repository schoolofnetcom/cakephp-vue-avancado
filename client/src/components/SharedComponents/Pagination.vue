<template>
  <center>
    <ul class="pagination">
      <li v-for="n in totalToPager" class="waves-effect" :class="{active: n === active}" @click.prevent="navigate(n)">
        <a href="">{{ n }}</a>
      </li>
    </ul>

    <p>Exibindo página {{ active }} de {{ total }}, total de {{ totalRegistries }} registros.</p>
  </center>
</template>

<script>
  import _ from 'lodash'

  export default {
    props: [
      'limitData',
      'resourceData'
    ],
    data: function () {
      return {
        active: 1,
        limitPerPage: this.limitData || 15,
        resource: this.resourceData
      }
    },
    computed: {
      registries () {
        return this.$store.state.pagination.getList
      },
      total () {
        return this.registries.meta.page_count
      },
      totalToPager () {
        let limitPager = 5
        let pageTotal = this.total
        if (pageTotal > limitPager) {
          pageTotal = limitPager

          if (this.active > 3 && this.active <= this.total - 2) {
            let pages = []
            for (let i of Array(limitPager).keys()) {
              pages.push(i + this.active - 2)
            }
            pageTotal = pages
          }
          if (this.active > this.total - 2) {
            pageTotal = _.rangeRight(this.total, this.total - limitPager)
          }
        }
        return pageTotal
      },
      totalRegistries () {
        return this.registries.meta.record_count
      }
    },
    methods: {
      navigate: function (n) {
        this.active = n
        let config = {resource: this.resource, limit: this.limitPerPage, page: n}
        this.$store.dispatch('getRegistries', config)
      }
    },
    mounted () {
      this.$store.dispatch('getRegistries', {resource: this.resource, limit: this.limitPerPage})
    }
  }
</script>
