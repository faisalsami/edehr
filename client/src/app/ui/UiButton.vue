<template lang="pug">
  button(v-on:click="buttonClicked", v-bind:class="classObject", :disabled="disabled")
    slot
</template>

<script>
export default {
  props: {
    value: { type: String },
    secondary: {
      type: Boolean
    },
    danger: {
      type: Boolean,
      default: false
    },
    disabled: { type: Boolean, default: false },
  },
  computed: {
    classObject: function () {
      let def = {
        button: true
      }
      
      if (this.secondary) {
        def['is-light'] = true
      } else if (this.danger) {
        def['is-danger'] = true
      } else {
        def['is-primary'] = true
      }
      return def
    }
  },
  methods: {
    buttonClicked: function (event) {
      this.$emit('buttonClicked', event, this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

button,
.button,
.button.is-primary {
  background-color: $brand-primary;
  font-family: $bodyFontFamily;
  font-size: $bodyFontSize;
  margin-bottom: 2em;
  padding: 0.3rem 1rem;

  &:hover {
    background-color: $brand-primary-hover;
    transition-duration: 0.3s;
    transition-property: background-color;
  }

  &:disabled {
    background-color: $grey40;
    color: $white;
    cursor: default;
  }
}

.button.is-danger {
  background-color: $red;
  border: 1px solid $white;
  box-sizing: border-box;
  color: $white;
  font-family: $bodyFontFamily;
  font-size: $bodyFontSize;
  margin-bottom: 2em;
  padding: 0.3rem 1rem;
}

.button.is-light,
button.is-light {
  background-color: $white;
  border: 1px solid $brand-primary;
  box-sizing: border-box;
  color: $brand-primary;
  font-family: $bodyFontFamily;
  font-size: $bodyFontSize;
  margin-bottom: 2em;
  padding: 0.3rem 1rem;

  &:hover {
    background-color: $white;
    border: 1px solid $brand-primary-hover;
    color: $brand-primary-hover;
    transition-duration: 0.3s;
  }

  &:disabled {
    background-color: $grey40;
    color: $white;
    cursor: default;
  }
}
.is-pulled-right {
    margin-left: 1em;
}

button + button {
    margin-left: 15px;
}

.table td.actions button {
  margin-bottom: 0;
}
</style>
