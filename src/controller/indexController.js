
const homepage = (req, res) => {
    console.log("homepage from controller");
    return res.render('home.ejs')
   
}

module.exports = {
    homepage: homepage
};