<template>
  <strong>
    <slot />
  </strong>
</template>
<style scoped>
strong {
  position: relative;
  display: inline-block;
  font-weight: 400;
  width: fit-content;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.2rem;
    height: 0.75rem;
    left: -0.25rem;
    right: -0.25rem;

    z-index: -1;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg');
    background-repeat: no-repeat;

    background-size: cover;
  }
}
</style>
