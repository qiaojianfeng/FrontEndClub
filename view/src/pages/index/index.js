import mySearch from '../../components/search/search.vue'
import HttpHot from '../../axios/hot/hot'
export default {
    data() {
        return {
            layoutType: 0,
            value3: 0,
            setting: {
                height: '300px',
                autoplay: true,
                autoplaySpeed: 3000,
                dots: 'inside',
                trigger: 'hover',
                arrow: 'hover'
            },
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [{
                    required: true,
                    message: '请填写用户名',
                    trigger: 'blur'
                }],
                password: [{
                        required: true,
                        message: '请填写密码',
                        trigger: 'blur'
                    },
                    {
                        type: 'string',
                        min: 6,
                        message: '密码长度不能小于6位',
                        trigger: 'blur'
                    }
                ]
            },
            movieList: [{
                    name: 'vue.js',
                    url: '###',
                    rate: 9.6
                },
                {
                    name: 'angular.js',
                    url: 'Cavans',
                    rate: 9.4
                },
                {
                    name: '正则',
                    url: '###',
                    rate: 9.5
                },
                {
                    name: 'ECMA2015',
                    url: '###',
                    rate: 9.4
                },
                {
                    name: 'web',
                    url: '###',
                    rate: 9.5
                },
                {
                    name: '性能优化',
                    url: '###',
                    rate: 9.2
                },
                {
                    name: '移动web',
                    url: '###',
                    rate: 9.4
                },
                {
                    name: '开发调试',
                    url: '###',
                    rate: 9.2
                },
                {
                    name: '开发IDE',
                    url: '###',
                    rate: 9.3
                },
                {
                    name: '浏览器插件',
                    url: '###',
                    rate: 9.2
                }
            ],
            randomMovieList: [],
            hotLists: [],
            curHotSite: 'site01',
            curHotType: 'trending',
            curDateType: 'day',
            curHotLang: 'JavaScript',
            HotSiteLists: [{
                    value: 'site01',
                    label: 'GitHub'
                }, {
                    value: 'site02',
                    label: '前端外刊评论'
                }, {
                    value: 'site03',
                    label: '博客园'
                }, {
                    value: 'site04',
                    label: 'CSDN博客'
                }, {
                    value: 'site05',
                    label: 'IT之家'
                },
                {
                    value: 'site06',
                    label: '奇客'
                }
            ],
            HotTypeLists: [{
                value: 'trending',
                label: '热门'
            }, {
                value: 'upcome',
                label: '新生'
            }],
            DateTypeLists: [{
                value: 'day',
                label: '今日'
            }, {
                value: 'week',
                label: '本周'
            }, {
                value: 'month',
                label: '本月'
            }],
            HotLangLists: [{
                value: 'JavaScript',
                label: 'JavaScript'
            }, {
                value: 'CSS',
                label: 'CSS'
            }, {
                value: 'HTML',
                label: 'HTML'
            }, {
                value: 'TypeScript',
                label: 'TypeScript'
            }, {
                value: 'CoffeeScript',
                label: 'CoffeeScript'
            }, {
                value: 'Vue',
                label: 'Vue'
            }]
        }
    },
    mounted() {
        this.changeLimit();
        this.getHotData();
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        changeLimit() {
            function getArrayItems(arr, num) {
                const temp_array = [];
                for (let index in arr) {
                    temp_array.push(arr[index]);
                }
                const return_array = [];
                for (let i = 0; i < num; i++) {
                    if (temp_array.length > 0) {
                        const arrIndex = Math.floor(Math.random() * temp_array.length);
                        return_array[i] = temp_array[arrIndex];
                        temp_array.splice(arrIndex, 1);
                    } else {
                        break;
                    }
                }
                return return_array;
            }
            this.randomMovieList = getArrayItems(this.movieList, 6);
        },
        getHotData() {
            let pramas = {
                "category": this.curHotType,
                "period": this.curDateType,
                "lang": this.curHotLang,
                "offset": 0,
                "limit": 30
            }
            HttpHot.getHotData(res => {
                if (res.code == 200) {
                    this.hotLists = res.data;
                }
            }, pramas)
        },
        getOtherHot(type) {
            if (type == 'site01') {
                this.layoutType = 0;
                this.getHotData();
            } else {
                this.layoutType = 1;
            }
            HttpHot.getOtherHot(type, res => {
                if (res.code == 200) {
                    this.hotLists = res.data;
                }
            })
        },
        //box顶部随机颜色
        BTColor() {
            var c1 = parseInt(Math.random() * 255);
            var c2 = parseInt(Math.random() * 255);
            var c3 = parseInt(Math.random() * 255);
            return 'rgb(' + c1 + ',' + c2 + ',' + c3 + ')';
        },

    },
    computed: {

    },
    components: {
        mySearch
    }
}