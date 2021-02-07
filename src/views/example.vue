<template>
  <div class="example d-flex">
    <div class="example_row1 w-50">
      <img width="50%" alt="Vue logo" src="../assets/logo.png">
      <Button Mclass="btn-border rounded-pill" :onClick="btnClick">primary ></Button>
      <Progress :Mclass="['H','rounded-pill']" :val=12></Progress>

      <TextWithBackgroud :Mclass="['H']" />

    </div>
    <div class="example_row2 w-50">
    <Dialog :Mclass="['modal-dialog__layout']" :isShow="false" bgStyle="bg-style">
      <template v-slot:header>
        <span>Here might be a page title</span>
      </template>
      <template v-slot:body>
        <span>Here might be a page title</span>
      </template>
      <template v-slot:footer>
        <span>Here might be a page title</span>
      </template>
    </Dialog>
    <!-- <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select> -->
     <Input :value.sync="inputVal" :Mclass="['H']"/>
    <Select :Mclass="['my-1']" :selected.sync="selected" :options="options">
      <template v-slot:selectHeader>
        <option selected disabled value="">請選擇</option>
      </template>
    </Select>
    <div v-if="true">
      <Carousel :Mclass="['1']">
        <template v-slot:selectHeader>
          <option selected disabled value="">請選擇</option>
        </template>
      </Carousel>
    </div>
    <MSwitch :value.sync="checkVal"  :Mclass="['my-1','my-1']">
        <template v-slot:switchText>
          Switch範例
        </template>
    </MSwitch>
    <CheckGroup :value.sync="checkGroupVal" :Mclass="['my-1','my-1']">

    </CheckGroup>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/boostrap4/button/button.vue'
import Progress from '@/components/boostrap4/progress/progress.vue'
import Input from '@/components/boostrap4/input/input.vue'
import TextWithBackgroud from '@/components/boostrap4/TextWithBackgroud/TextWithBackgroud.vue'
import Dialog from '@/components/boostrap4/dialog/dialog.vue'
import Select from '@/components/boostrap4/select/select.vue'
import Carousel from '@/components/boostrap4/Carousel/Carousel.vue'
import MSwitch from '@/components/boostrap4/switch/switch.vue'
import CheckGroup from '@/components/boostrap4/checkGroup/checkGroup.vue'
import axios from 'axios'

export default {
  name: 'Example',
  components: {
    Button,
    Progress,
    Input,
    TextWithBackgroud,
    Dialog,
    Select,
    Carousel,
    MSwitch,
    CheckGroup
  },
  data () {
    return {
      inputVal: '',
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      checkVal:false,
      checkGroupVal:''
    }
  },
  methods: {
    btnClick () {
      console.log(this.inputVal)
      console.log(this.selected)
      axios.get('/api/api')
        .then((res) => { console.table(res.data) })
        .catch((error) => { console.error(error) })
        .finally(() => { /* 不論失敗成功皆會執行 */ })
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
