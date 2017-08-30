import HttpSearch from '../../axios/search/homeSearch'

export default {
    data() {
        return {
            keys: null,
            results: [],
            searchURL: {
                URL01: {
                    url: 'https://www.baidu.com/baidu?wd=', //百度
                    name: '百度'
                },
                URL02: {
                    url: 'https://www.google.com.hk/search?q=', //Google
                    name: 'Google'
                },
                URL03: {
                    url: 'https://www.so.com/s?&q=', //360
                    name: '360'
                },
                URL04: {
                    url: 'https://github.com/search?q=', //GitHub
                    name: 'GitHub'
                },
                URL05: {
                    url: 'https://www.zhihu.com/search?q=', //知乎
                    name: '知乎'
                },
                URL06: {
                    url: 'https://segmentfault.com/search?q=', //segmentfault
                    name: 'segmentfault'

                },
                URL07: {
                    url: 'http://so.csdn.net/so/search/s.do?&q=', //CSDN
                    name: 'CSDN'
                },
                URL08: {
                    url: 'https://www.w3cschool.cn/search?w=', //w3cschool
                    name: 'w3cschool'
                },
                URL09: {
                    url: 'https://developer.mozilla.org/zh-CN/search?q=', //MDN
                    name: 'MDN'
                },
                URL10: {
                    url: 'http://www.jianshu.com/search?q=js', //简书
                    name: '简书'
                }

            }
        }
    },
    methods: {
        soCur(type) {
            HttpSearch.getSearchData(type, res => {
                if (res.status) {
                    this.results = res.data;
                } else {
                    this.$Message.error('对方不想说话，并且向你抛出了一个异常');
                }

            }, {
                type: 'URL01',
                wd: this.keys
            })
        },

        soTar(key) {
            if (this.keys) {
                window.open(this.searchURL[key].url + this.keys);
            }
        },


    }
}