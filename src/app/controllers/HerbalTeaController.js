const HerbalTea = require("../models/HerbalTea");
const { mongooseToOjb } = require("../../util/mongoose");
class HerbalTeaController {
  //[GET] /
  show(req, res, next) {
    //    let slug = req.params.slug
    HerbalTea.findOne({ slug: req.params.slug })
      .then((herbalTeas) => {
        if (herbalTeas) {
          res.render("herbalteas/show", {
            herbalTeas: mongooseToOjb(herbalTeas),
          });
        } else res.send("Null");
      })
      .catch(next);
  }
  //[GET] / herbal-tea/create
  create(req, res, next) {
    res.render("herbalteas/create");
  }
  //[POST] / herbal-tea/store
  store(req, res, next) {
    const herbalTea = new HerbalTea(req.body);
    herbalTea
      .save()
      .then(() => res.redirect(`/`))
      .catch((error) => {});

    // res.render('herbalteas/store')
  }
  //[get] / herbal-tea/:id/edit
  edit(req, res, next) {
    HerbalTea.findById(req.params.id)
      .then((herbalTeas) =>
        res.render("herbalteas/edit", {
          herbalTeas: mongooseToOjb(herbalTeas),
        })
      )
      .catch(next);
  }
  //[PUT] /herbal-tea/:id
  update(req, res, next) {
    HerbalTea.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/products"))
      .catch(next);
  }
  //[DELETE] /herbal-tea/:id
  delete(req, res, next) {
    HerbalTea.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[patch] /herbal-tea/:id/restore
  restore(req, res, next) {
    HerbalTea.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[DELETE] /herbal-tea/:id/force
  forceDelete(req, res, next) {
    HerbalTea.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  //[POST] /herbal-tea/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        HerbalTea.delete({ _id: { $in: req.body.productIds } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json({ mesage: "Error" });
    }
  }
  index(req, res, next) {
    // HerbalTea.find({})
    //     .then (herbalTeas => res.render('herbalTea',
    //     {
    //         herbalTeas:mutipleMongooseToObj(herbalTeas)
    //     }))
    //     .catch(next)
    res.send("C?? c??i g?? ????u m?? nh??n");
  }
}
module.exports = new HerbalTeaController();
