 export default {
    data () {
            return {
                value3: 0,
                setting: {
                    height:'300px',
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
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                },
                movieList: [
                    {
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
                randomMovieList: []
            }
    },
     mounted () {
            this.changeLimit();
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
             changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 6);
            }
        }
    }