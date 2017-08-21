<template>
    <div class="search" @click="results = []">        
        <Input icon="compass" 
               placeholder="请输入你的问题" 
               class="search-box"   
               size="large"
               v-model="keys"
               @click.native.stop
               @keydown.native.enter="soTar('URL01')"
               @keyup.native="soCur('URL01')">
               
        </Input>
        <div class="results">
            <ul>
                <li v-for="(item,i) in results">
                    <a :href="'https://www.baidu.com/baidu?wd='+item" target="_blank">
                        <span class="rate" :data-index="i">{{i+1}}</span>
                        {{item}}
                    </a>        
                </li>
            </ul>
        </div>
        <div class="tips">
            站长提示：本站默认搜索引擎为百度，如需其他查询可点击下方热门网站快捷查询。
        </div>
        <!--其他搜索站点-->
        <div class="other-so">
            <ul>
                <li v-for="(item,k) in searchURL" 
                    :data-type="k"
                    :title="item.name"
                    @click="soTar(k)" >
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./search.js"></script>
<style lang="scss">
    @import './search.scss';
</style>
