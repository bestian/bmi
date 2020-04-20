<template>
  <div class="hello">
    <h1>BMI 計算機</h1>
    <h3>BMI值計算公式: BMI = 體重(公斤) / 身高<sup>2</sup>(公尺<sup>2</sup>)</h3>
    <form>
      <h3>快看看自己的BMI是否在理想範圍吧!</h3>
      我的身高<input type="number" name="height" v-model="height" /> cm
      <br/>
      我的體重<input type="number" name="height" v-model="weight" /> kg
    </form>
    <div class="resault">
      BMI: {{ bmi(height, weight) | showBMI }}
      <br/>
      結果: {{ bmi(height, weight) | showRES }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BMI',
  data () {
    return {
      height: 160,
      weight: 55
    }
  },
  methods: {
    bmi (height, weight) {
      let h = height / 100
      let w = weight 
      console.log(h) 
      console.log(w)
      let ans = null   // Q1: 對的bmi公式是什麼? 
      console.log(ans)
      return ans 
    }
  },
  filters: {
    showBMI (num) {
      let ans = Math.floor(num * 1000 + 0.5) / 1000
      /*  Q2: 如果要改成小數點後兩位就四捨五入，要改哪裡?  */ 
      return ans
    },
    showRES (num) {
      console.log(num)
      if (num < 18.5) {
        return '過輕'
      }
      if (num < 24) {
        return '正常'
      }
      if (num < 27) {
        return '過重'
      }
      if (num < 30) {
        return '輕度肥胖'
      }
      if (num < 35) {
        return '中度肥胖'
      }
      return ''    // Q3: 如果程式執行到這裡，表示num >= 35，所 以最後應該傳回什麼字串?
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input {
  font-size: 22px;
}

</style>
