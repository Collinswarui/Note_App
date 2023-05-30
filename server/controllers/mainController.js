exports.homepage = async(req, res) =>{
    const locals={
        title:'nodejs notes',
        description:'Free nodejs notes app'
    }
    res.render('index', locals);
}

exports.about = async(req, res) =>{
    const locals={
        title:'About nodejs notes',
        description:'Free nodejs notes app'
    }
    res.render('about', locals);
}