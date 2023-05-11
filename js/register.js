//给注册按钮注册点击事件
// import { axios } from 'axios';
document.querySelector('.rounded-pill').addEventListener('click', async function () {
  const form = document.querySelector('.register-form');
  const data = serialize(form, { hash: true, empty: true });
  //   console.log(data);
  const taost = new bootstrap.Toast(document.querySelector('.my-toast'));
  try {
    const res = await axios.post('/registedr', data);
    console.log(res);
    taost.show();
    document.querySelector('.toast-body').innerHTML = res.data.message;
  } catch (err) {
    // document.querySelector('.my-toast').classList.add('show');
    console.log(err);
    // // document.querySelector('.toast-body').innerHTML = err.data.message;
  }
});
