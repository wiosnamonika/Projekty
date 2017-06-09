const express = require('express');
const app = express();
const http = require('http').Server(app)
//http jest wbudowany w node js
const.io = require('socket.io')
//musimy zmieniac ze to nie aplikacja nasluchuje na porcie 3000 tylko html nasluchuje na tym porcie
app.listen(3000, ()=>{
  console.log('');

//wszystko w nodzie jest asynchroniczne
//wchodzimy na strone localhost - czyli moja maszyna i 30000
//zwykle nasluchuje na porcie 3000
//blad na stronie to nasz maly sukces
// app.get('/', (req, res)=>{
//   //request i response
//   res.get('/', (req, res)=>{
//     res.send('<!Doctype><html><body><h1>')
//   })
// }) kod html przechowujemy w inym pliku
app.use(express.)
