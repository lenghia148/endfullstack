const ThaoDuocTea = require("../models/ThaoDuocTeas");
const { mutipleMongooseToObj } = require("../../util/mongoose");

class ProductsController {
  //[GET] / product/tra-thao-moc
  thaoduoc(req, res, next) {
    ThaoDuocTea.find({})
      .then((thaoDuocTeas) =>
        res.render("products/thao_duoc_tea", {
            thaoDuocTeas: mutipleMongooseToObj(thaoDuocTeas),
          
        })
      )
      .catch(next);
  }
}
module.exports = new ProductsController();
