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
                    value: 'github',
                    label: 'GitHub'
                }, {
                    value: 'qianduan',
                    label: '前端外刊评论'
                }, {
                    value: 'cnblogs',
                    label: '博客园'
                }, {
                    value: 'csdn',
                    label: 'CSDN博客'
                }, {
                    value: 'ithome',
                    label: 'IT之家'
                },
                {
                    value: 'solidot',
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
        getHotData(type) {
            let pramas = {
                "type": type,
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
            if (type == 'github') {
                this.layoutType = 0;
                this.getHotData(type);
            } else {
                this.layoutType = 1;
            }
            HttpHot.getOtherHot(res => {
                if (res.code == 200) {
                    this.hotLists = res.data;
                }
            }, { type })
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