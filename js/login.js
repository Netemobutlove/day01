/**
 * 用户登录
 *  1. 收集并校验数据
 *  2. 提交数据
 *  3. 缓存响应数据
 *  4. 跳转首页
 * */
document.querySelector('#btn-login').addEventListener('click', async function () {
  const form = document.querySelector('.login-form');
  const { username, password } = serialize(form, { hash: true, empty: true });
  if (!/^\w{8,30}$/.test(username)) {
    return showTost('用户名不能少于8位');
  }
  if (!/^\w{6,30}$/.test(password)) {
    return showTost('密码不能少于6位');
  }
  try {
    const res = await axios.post('/login', { username, password });
    showTost(res.data.message);
    localStorage.setItem('token', res.data.data.token);
    localStorage.setItem('username', res.data.data.username);
    setTimeout(() => {
      location.href = './index.html';
    });
    // console.log(res);
  } catch (err) {
    showTost(err.response.data.message);
  }
});
