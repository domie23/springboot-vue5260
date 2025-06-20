const base = {
    get() {
        return {
            url : "http://localhost:8080/chexianlipeixinxiguanlixitong/",
            name: "chexianlipeixinxiguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chexianlipeixinxiguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "车险理赔信息管理系统"
        } 
    }
}
export default base
