/* eslint-disable eqeqeq */
const express = require('express');

const router = express.Router();
const { init } = require('rajaongkir-node-js');

const request = init(process.env.REACT_APP_API_KEY, 'starter');

router.get('/provinsi', (req, res) => {
  const province = request.get('/province');
  province
    .then((prov) => {
      const js = JSON.parse(prov);
      res.send(js);
    })
    .catch((error) => {
      console.log(error);
      console.log(request);
    });
});

router.get('/kota/:id', (req, res) => {
  const allCityInProvince = request.get(`/city?&province=${req.params.id}`);
  allCityInProvince.then((city) => {
    const citi = JSON.parse(city);
    res.send(citi);
  });
});

router.post('/ongkir', (req, res) => {
  const form = req.body;
  const data = {
    origin: form.origin,
    destination: form.destination,
    weight: form.weight,
    courier: form.courier, // bisa merequest satu atau beberapa kurir sekaligus
  };
  const cost = request.post('cost', data);
  cost.then((cst) => {
    res.send(cst);
  });
});

router.post('/auth', (req, res) => {
  const form = req.body;
  if (form.username == 'admin' && form.password == 'admin') {
    res.send({ status: 'Berhasil', code: 200, token: 'this-is-token' });
  } else {
    res.send({ status: 'Gagal', code: 500 });
  }
});

module.exports = router;
