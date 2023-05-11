//给注册按钮注册点击事件
// import { axios } from 'axios';
document.querySelector('.rounded-pill').addEventListener('click', async function () {
  const form = document.querySelector('.register-form');
  const { username, password } = serialize(form, { hash: true, empty: true });
  try {
    if (!/^\w{8,30}$/.test(username)) {
      return showTost('用户名不能少于8位');
    }
    if (!/^\w{6,30}$/.test(password)) {
      return showTost('密码不能少于6位');
    }
    const res = await axios.post('/register', { username, password });
    showTost(res.data.message);
    setTimeout(()=>{
      location.href='./login.html'
    },1500)
  } catch (err) {
    showTost(err.response.data.message);
  }
});
