//设置基地址
axios.defaults.baseURL = 'https://hmajax.itheima.net';
//实例化弹窗
function showTost(msg) {
  const toast = new bootstrap.Toast(document.querySelector('.toast'));
  document.querySelector('.toast-body').innerText = msg;
  toast.show();
}
//判断是否有token
function permissonControl() {
  const token = localStorage.getItem('token');
  if (!token) {
    showTost('重新登录');
    setTimeout(() => {
      location.href = './login.html';
    }, 1500);
  }
}
//渲染 用户名
function renderNmae() {
  const username = localStorage.getItem('username');
  document.querySelector('.username').innerHTML = username;
}
// 给退出按钮添加点击事件
function logOut() {
  document.querySelector('#logout').addEventListener('click', function () {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    showTost('退出成功');
    setTimeout(() => {
      location.href = './login.html';
    }, 1500);
  });
}

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // console.log(config);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response.status === 401) {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      showTost('请重新登录');
      setTimeout(() => {
        location.href = './login.html';
      }, 1500);
    }
    return Promise.reject(error);
  }
);
