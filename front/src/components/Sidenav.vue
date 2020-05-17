<template>
  <div>
    <b-card
      title="映画監督"
      class="mt-4"
    >
      <b-form>
        <b-form-group
          label="監督名"
          label-for="input-director-name"
        >
          <b-form-input
            id="input-director-name"
            type="text"
            placeholder="監督名"
            size="sm"
            required
          />
        </b-form-group>
        <b-form-group
          label="年齢"
          label-for="input-director-age"
        >
          <b-form-input
            id="input-director-age"
            type="number"
            placeholder="年齢"
            size="sm"
            required
          />
        </b-form-group>
        <b-button
          type="submit"
          variant="outline-info"
        >登録</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Sidenav"
};
</script>

<style lang="scss" scoped>
</style>
