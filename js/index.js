//判断有没有token
permissonControl();
//渲染用户名
renderNmae();
//调用logOut()函数 退出登录
logOut();

//数据渲染
async function renderData() {
  const res = await axios({
    url: '/dashboard',
  });
  const { overview } = res.data.data;
  Object.keys(overview).forEach((key) => (document.querySelector(`.${key}`).innerHTML = overview[key]));
}
renderData();
