<template>
  <div class="hello">
    <h1>BMI 計算機</h1>
    <h3>BMI值計算公式: BMI = 體重(公斤) / 身高<sup>2</sup>(公尺<sup>2</sup>)</h3>
    <form>
      <h3>快看看自己的BMI是否在理想範圍吧!</h3>
      我的身高<input type="number" min="0" name="height" v-model="height" v-autofocus/> cm
      <br/>
      我的體重<input type="number" min="0" name="height" v-model="weight" /> kg
    </form>
    <div class="resault">
      BMI: {{ bmi(height, weight) | showBMI }}
      <br/>
      結果:
      <span :style="{'background-color': colorList[getIndex(bmi(height, weight))] }">
         {{ resList[getIndex(bmi(height, weight))]}}
      </span>
    </div>
    <table border="1">
      <tr>
        <th v-for = "(b, idx) in bmiList" :key="b"> {{ bmiList[idx-1] || 0 }} ≦ <br/> BMI值 <br/> {{ b | showUpper }}</th>
      </tr>
      <tr>
        <td v-for = "(r, idx) in resList" :key="r" :style="{'background-color': colorList[idx]} "> {{ r }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'BMI',
  data () {
    return {
      height: 160,
      weight: 55,
      bmiList: [18.5, 24, 27, 30, 35, Infinity],
      resList: ['過輕', '正常', '過重', '輕度肥胖', '中度肥胖', '重度肥胖'],
      colorList: ['#ccf', '#cfc', '#fcc', '#faa', '#f66', '#f00']
    }
  },
  methods: {
    bmi (height, weight) {
      let h = height / 100
      let w = weight 
      let ans = w / (h ** 2) // 對的公式
      return ans
    },
    getIndex (num) {
      console.log(num)
      for (let i = 0; i < this.bmiList.length; i++) {
        console.log(this.bmiList[i])
        if (num < this.bmiList[i]) {
          return i
        }
      }
    }
  },
  filters: {
    showUpper (num) {
      if (num < Infinity) {
        return '< ' + num
      } else {
        return ''
      }
    },
    showBMI (num) {
      let ans = Math.round(num * 100) / 100
      return ans
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table {
  display: inline-block;
  border-collapse: collapse;
}

td {
  width: 18vw
}

input {
  font-size: 22px;
}

</style>
