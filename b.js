let v = ['15110252', "15110740"]
let b = [{
  houseCode: "15110252",
  houseName: "0101",
  ridgepoleCode: "43406969",
  ridgepoleName: "D1",
  unitCode: "43407779",
  unitName: "商铺",
}, {
  houseCode: "15110255",
  houseName: "0101",
  ridgepoleCode: "43406969",
  ridgepoleName: "D1",
  unitCode: "43407779",
  unitName: "商铺",
}, {
  houseCode: "15110740",
  houseName: "0201",
  ridgepoleCode: "43406969",
  ridgepoleName: "D1",
  unitCode: "43407779",
  unitName: "商铺",
}]
let newarr = []
v.forEach(item => {
  b.forEach(item1 => {
    if (item == item1.houseCode) {
      newarr.push(item1)
    }
  })
})
console.log(newarr)