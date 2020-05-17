<template>
  <div>
    <b-table-simple
      outlined
      hover
      class="mt-4"
    >
      <b-thead>
        <b-tr>
          <b-th>タイトル</b-th>
          <b-th>ジャンル</b-th>
          <b-th>監督</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr>
          <b-td>となりのトトロ</b-td>
          <b-td>アニメ</b-td>
          <b-td>宮崎 駿</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  name: "MovieList"
};
</script>

<style lang="scss" scoped>
</style>
