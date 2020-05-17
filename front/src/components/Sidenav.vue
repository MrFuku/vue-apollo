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
    <b-card
      title="映画作品"
      class="mt-4"
    >
      <b-form>
        <b-form-group
          label="タイトル"
          label-for="input-movie-name"
        >
          <b-form-input
            id="input-movie-name"
            type="text"
            placeholder="タイトル"
            size="sm"
            required
          />
        </b-form-group>
        <b-form-group
          label="ジャンル"
          label-for="input-movie-genre"
        >
          <b-form-input
            id="input-movie-genre"
            type="text"
            placeholder="ジャンル"
            size="sm"
            required
          />
        </b-form-group>
        <b-form-group
          label="監督"
          label-for="input-movie-director"
        >
          <b-form-select
            size="sm"
            
          >
            <b-form-select-option v-for="director in directors" :key="director.id" :value="director.id">{{ director.name }}</b-form-select-option>
          </b-form-select>
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
import { DIRECTOR_LIST } from "../graphql/queries";

export default {
  name: "Sidenav",
  apollo: {
    directors: DIRECTOR_LIST
  }
};
</script>

<style lang="scss" scoped>
</style>
