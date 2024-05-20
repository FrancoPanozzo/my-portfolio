<script lang="ts" setup>
const { locale, setLocale, t } = useI18n({
  useScope: 'local'
})

const onChange = async (locale: string) => {
  setLocale(locale)
  selectValue.value = locale
}

const selectOptions = [
  { value: 'en', label: 'English', icon: 'flag:us-4x3' },
  { value: 'es', label: 'Español', icon: 'flag:es-4x3' },
  { value: 'fr', label: 'Français', icon: 'flag:fr-4x3' }
]

const selectValue = ref(locale)
</script>

<template>
  <Select @update:modelValue="onChange" :modelValue="selectValue">
    <SelectTrigger class="w-32">
      <SelectValue :placeholder="t('placeholder')" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="item in selectOptions" :value="item.value" class="cursor-pointer">
          <span class="flex items-center gap-2"
            ><Icon :name="item.icon" />
            <span>{{ item.label }}</span>
          </span>
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<i18n lang="json">
{
  "en": {
    "placeholder": "Select a language"
  },
  "fr": {
    "placeholder": "Sélectionnez une langue"
  },
  "es": {
    "placeholder": "Selecciona un idioma"
  }
}
</i18n>
